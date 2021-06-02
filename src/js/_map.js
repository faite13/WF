(function () {
    if(document.querySelector('#map') !== null) {
        const touchBlockerInit = () => {
            const namespace = {
                map: document.getElementById('map'),
                blocker: document.querySelector('.js-tBlocker'),
            };
    
            const isTouchable = () => {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            };
        
            const isDoubleTouched = touchesNum => touchesNum === 2;
        
            const blockerAddListener = (tBlocker) => {
                tBlocker.addEventListener('touchstart', (event) => {
                    if(isDoubleTouched(event.touches.length)) {
                        removeTouchBlocker(tBlocker);
                    } else {
                        return false;
                    }
                });
            };
        
            const addTouchBlocker = () => {
                if(isTouchable()) {
                    const tBlocker = namespace.blocker; 
                    tBlocker.classList.add('js-show');
                    blockerAddListener(tBlocker);
                } else {
                    return false;
                }
            };
        
            const removeTouchBlocker = (tBlocker) => {
                const map = namespace.map;
                
                tBlocker.classList.remove('js-show');
        
                setTimeout(() => {
                    document.addEventListener('touchstart', function touchOut(event) {
                        const target = event.target;
                        if(target && target !== map && !map.contains(target)) {
                            document.removeEventListener('touchstart', touchOut);
                            addTouchBlocker();
                        }
                    });
                }, 500);
            };

            addTouchBlocker();
        };
    
        DG.then(() => {
            const initMap = () => {
                return DG.map('map', {
                    center: [50.4532, 30.5164],
                    zoom: 12,
                });
            };
        
            const loadShopsData = () => {
                return fetch(`/map/json`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                })
                .then(res => res.json());
            };
    
            const addDOMLinks = (shopsData, shopNodes) => {
                let point;
                const icon = DG.icon({
                    iconUrl: '/img/icons/icons.svg#red-pepper',
                    iconSize: [20, 20],
                });
        
                shopsData.forEach(shop => {
                    point = shop.point;
                    shop.node = Array.from(shopNodes).find(
                        node => 
                            node.dataset.marker === `${point.lat},${point.lon}`
                    );
                    shop.marker = DG.marker([point.lat, point.lon], {icon}).addTo(map);
                    shop.popup = shop.marker.bindPopup(shop.address_name);
                });
                return shopsData;
            };
        
            const filter = (data, text) => {
                let filtered = [], station;
                data.forEach(item => {
                    station = item.links.nearest_stations[0].name;
                    if(station.toLowerCase().indexOf(text) > -1) {
                        filtered.push(item);
                    }
                });
                return filtered;
            };
        
            const clearBorder = () => {
                document.querySelectorAll('.js-shop').forEach(shopNode => {
                    shopNode.querySelector('.card').classList.remove('border-danger');
                });
            };
        
            const listenButton = ({marker, node, point}) => {
                const button = node.querySelector('.js-shop-btn');
        
                button.addEventListener('click', () => {
                    map.setZoom(12);
                    setTimeout(() => {
                        marker.openPopup();
                        map.setView(point, 16);
                        node.querySelector('.card').classList.add('border-danger');
                    }, 600);
                });
            };
        
            const listenMarker = ({marker, node, point}) => {
                marker.addEventListener('click', () => {
                    map.setZoom(12);
                    setTimeout(() => {
                        map.setView(point, 16)
                        node.scrollIntoView({
                            behavior: 'smooth', 
                            block: 'nearest', 
                            inline: 'start'
                        });
                        node.querySelector('.card').classList.add('border-danger');
                    }, 600);
                });
            };
        
            const listenPopup = ({popup}) => {
                popup.addEventListener('popupclose', () => {
                    clearBorder();
                    setTimeout(() => {
                        map.setZoom(12);
                    }, 200);
                });
            };
        
            const addListeners = (shopsData) => {
                shopsData.forEach(shop => {
                    listenButton(shop);
                    listenMarker(shop);
                    listenPopup(shop);
                });
            };
        
            const render = (data) => {
                const container = document.querySelector('.js-shops-container');
                container.innerHTML = '';
        
                map.eachLayer((layer) => {
                    if(layer._leaflet_id > 400) {
                        map.removeLayer(layer);
                    }
                });
        
                data.forEach(({point, name_ex, address_name, links}) => {
                    container.innerHTML += 
                    `<div class="col-12 mb-1 px-0 px-lg-2 js-shop" data-marker="${point.lat},${point.lon}">
                        <div class="card bg-light border">
                            <div class="card-body">
                                <p class="h5 my-0 js-shop-name">${name_ex.description}</p>
                                <p class="card-text mt-0">${address_name}</p>
                                <p class="card-text my-0">8:00 - 23:00</p>
                                <p class="card-text mt-0">${links.nearest_stations[0].name}</p>
                                <button class="btn btn-outline-danger btn-block text-uppercase js-shop-btn">На мапі</button>
                            </div>
                        </div>
                    </div>`;
                });
                return container.querySelectorAll('.js-shop');
            };
        
            const start = (data, shopNodes) => {
                const shops = addDOMLinks(data, shopNodes);
                addListeners(shops);
            };

            touchBlockerInit();

            const map = initMap(),
                shopsData = loadShopsData(),
                input = document.querySelector('.js-input'),
                shopNodes = document.querySelectorAll('.js-shop');

            shopsData.then(data => {
                input.addEventListener('input', (event) => {
                    const filtered = filter(data, event.target.value.toLowerCase()),
                        shopNodes = render(filtered);

                    start(
                        filtered, 
                        shopNodes
                    );
                });
                start(data, shopNodes);
            });
        });
    }
})();