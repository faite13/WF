(function(){
    const button = document.querySelector('.js-btn'),
    cardsContainer = document.querySelector('.cards-container');
    let cnt = 1;

    const insertData = ({img, percent, name, price}) => {
        return `<li class="product col-12 col-md-6 col-lg-4 js-product faded">
                    <div class="product-inner">
                        <svg class="icon-sm product-icon">
                            <use xlink:href="/img/icons/icons.svg#red-pepper"></use>
                        </svg>
                        <div class="text-center">
                            <img src="${img}" alt="" class="product-img mb-2">
                            <div class="product-heading">${name}</div>
                        </div>
                        <div class="product-numbers">
                            <div class="product-price">
                                <div class="product-price-main">${price}</div>
                            </div>
                            <div class="product-percent">${percent}</div>
                        </div>
                    </div>
                </li>`;
    };

    const transformButton = () => {
        button.parentElement.innerHTML = `<a class="btn btn-danger btn-lg text-uppercase" href="#top">до початку</a>`;
    };

    const render = (data, container) => {
        const datLeng = data.length;
        let productsHTML = '';
        
        if(datLeng < 6) {
            transformButton();
        }
        for(let i = 0; i < datLeng; i++) {
            productsHTML += insertData(data[i]);
        }
        container.innerHTML += productsHTML;

        setTimeout(() => {
            document.querySelectorAll('.js-product').forEach(li => {
                li.classList.remove('faded');
            });
        }, 300);
    };

    const loadMore = (cnt) => {
        fetch(`/discounts/${cnt}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(res => res.json())
        .then(json => render(json, cardsContainer));
    };

    const buttonListen = () => {
        button.addEventListener('click', () => {
            loadMore(cnt);
            cnt++;
        });
    }; 
    
    if(button !== null) {
        buttonListen();
    }
})();