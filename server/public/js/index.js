"use strict";

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    var cities = [{
      "name": "Місто"
    }, {
      "name": "Київ",
      "id": 1
    }, {
      "name": "Дніпро",
      "id": 4
    }, {
      "name": "Донецьк",
      "id": 6
    }, {
      "name": "Запоріжжя",
      "id": 9
    }, {
      "name": "Одеса",
      "id": 3
    }, {
      "name": "Харків",
      "id": 21
    }, {
      "name": "Львів",
      "id": 2
    }, {
      "name": "Вінниця",
      "id": 5
    }, {
      "name": "Житомир",
      "id": 7
    }, {
      "name": "Івано-Франківськ",
      "id": 10
    }, {
      "name": "Кривий Ріг",
      "id": 31
    }, {
      "name": "Кропивницький",
      "id": 11
    }, {
      "name": "Луганськ",
      "id": 13
    }, {
      "name": "Луцьк",
      "id": 14
    }, {
      "name": "Маріуполь",
      "id": 27
    }, {
      "name": "Миколаїв",
      "id": 15
    }, {
      "name": "Полтава",
      "id": 17
    }, {
      "name": "Рівне",
      "id": 18
    }, {
      "name": "Севастополь",
      "id": 32
    }, {
      "name": "Сімферополь",
      "id": 29
    }, {
      "name": "Суми",
      "id": 19
    }, {
      "name": "Тернопіль",
      "id": 20
    }, {
      "name": "Ужгород",
      "id": 28
    }, {
      "name": "Херсон",
      "id": 22
    }, {
      "name": "Хмельницький",
      "id": 23
    }, {
      "name": "Черкаси",
      "id": 24
    }, {
      "name": "Чернігів",
      "id": 25
    }, {
      "name": "Чернівці",
      "id": 26
    }, {
      "name": "Авангард",
      "id": 710
    }, {
      "name": "Авдіївка",
      "id": 104
    }, {
      "name": "Якимівка",
      "id": 177
    }, {
      "name": "Олександрія",
      "id": 246
    }, {
      "name": "Алушта",
      "id": 549
    }, {
      "name": "Алчевськ",
      "id": 266
    }, {
      "name": "Амвросіївка",
      "id": 106
    }, {
      "name": "Антрацит",
      "id": 267
    }, {
      "name": "Апостолове",
      "id": 78
    }, {
      "name": "Армянськ",
      "id": 550
    }, {
      "name": "Арциз",
      "id": 336
    }, {
      "name": "Охтирка",
      "id": 404
    }, {
      "name": "Балаклія",
      "id": 576
    }, {
      "name": "Балта",
      "id": 337
    }, {
      "name": "Баришівка",
      "id": 214
    }, {
      "name": "Бахмач",
      "id": 517
    }, {
      "name": "Бахмут",
      "id": 107
    }, {
      "name": "Бахчисарай",
      "id": 551
    }, {
      "name": "Баштанка",
      "id": 318
    }, {
      "name": "Біла Криниця",
      "id": 721
    }, {
      "name": "Біла Церква",
      "id": 215
    }, {
      "name": "Білгород-Дністровський",
      "id": 338
    }, {
      "name": "Білогірськ",
      "id": 552
    }, {
      "name": "Білозерське",
      "id": 574
    }, {
      "name": "Білопілля",
      "id": 405
    }, {
      "name": "Біляївка",
      "id": 339
    }, {
      "name": "Бердичів",
      "id": 143
    }, {
      "name": "Бердянськ",
      "id": 178
    }, {
      "name": "Берегове",
      "id": 164
    }, {
      "name": "Березань",
      "id": 216
    }, {
      "name": "Берислав",
      "id": 460
    }, {
      "name": "Бобровиця",
      "id": 518
    }, {
      "name": "Богодухів",
      "id": 570
    }, {
      "name": "Богуслав",
      "id": 217
    }, {
      "name": "Болград",
      "id": 341
    }, {
      "name": "Борислав",
      "id": 294
    }, {
      "name": "Бориспіль",
      "id": 218
    }, {
      "name": "Боярка",
      "id": 220
    }, {
      "name": "Бровари",
      "id": 221
    }, {
      "name": "Броди",
      "id": 295
    }, {
      "name": "Брянка",
      "id": 270
    }, {
      "name": "Бурштин",
      "id": 589
    }, {
      "name": "Буринь",
      "id": 406
    }, {
      "name": "Буча",
      "id": 222
    }, {
      "name": "Вараш",
      "id": 398
    }, {
      "name": "Василівка",
      "id": 180
    }, {
      "name": "Васильків",
      "id": 223
    }, {
      "name": "Ватутіне",
      "id": 584
    }, {
      "name": "Великі Лази",
      "id": 715
    }, {
      "name": "Верхньодніпровськ",
      "id": 80
    }, {
      "name": "Винники",
      "id": 636
    }, {
      "name": "Виноградів",
      "id": 166
    }, {
      "name": "Вишневе",
      "id": 571
    }, {
      "name": "Володимир-Волинський",
      "id": 62
    }, {
      "name": "Вознесенськ",
      "id": 323
    }, {
      "name": "Волноваха",
      "id": 109
    }, {
      "name": "Вовчанськ",
      "id": 439
    }, {
      "name": "Вільногірськ",
      "id": 81
    }, {
      "name": "Вільнянськ",
      "id": 182
    }, {
      "name": "Вишгород",
      "id": 226
    }, {
      "name": "Гадяч",
      "id": 364
    }, {
      "name": "Гайворон",
      "id": 249
    }, {
      "name": "Гайсин",
      "id": 38
    }, {
      "name": "Генічеськ",
      "id": 465
    }, {
      "name": "Глухів",
      "id": 408
    }, {
      "name": "Гнівань",
      "id": 618
    }, {
      "name": "Гола Пристань",
      "id": 466
    }, {
      "name": "Горлівка",
      "id": 30
    }, {
      "name": "Городня",
      "id": 521
    }, {
      "name": "Гостомель",
      "id": 575
    }, {
      "name": "Гуляйполе",
      "id": 183
    }, {
      "name": "Дебальцеве",
      "id": 111
    }, {
      "name": "Дергачі",
      "id": 441
    }, {
      "name": "Джанкой",
      "id": 553
    }, {
      "name": "Дніпрорудне",
      "id": 573
    }, {
      "name": "Добропілля",
      "id": 114
    }, {
      "name": "Долинська",
      "id": 252
    }, {
      "name": "Дрогобич",
      "id": 298
    }, {
      "name": "Дружківка",
      "id": 116
    }, {
      "name": "Дубно",
      "id": 392
    }, {
      "name": "Дунаївці",
      "id": 483
    }, {
      "name": "Євпаторія",
      "id": 554
    }, {
      "name": "Єнакієве",
      "id": 117
    }, {
      "name": "Жданівка",
      "id": 662
    }, {
      "name": "Жовті Води",
      "id": 83
    }, {
      "name": "Звенигородка",
      "id": 501
    }, {
      "name": "Здолбунів",
      "id": 395
    }, {
      "name": "Зеленодольськ",
      "id": 572
    }, {
      "name": "Зміїв",
      "id": 443
    }, {
      "name": "Знам'янка",
      "id": 253
    }, {
      "name": "Золотоноша",
      "id": 502
    }, {
      "name": "Зугрес",
      "id": 118
    }, {
      "name": "Ізмаїл",
      "id": 344
    }, {
      "name": "Ізюм",
      "id": 445
    }, {
      "name": "Ірпінь",
      "id": 229
    }, {
      "name": "Ічня",
      "id": 522
    }, {
      "name": "Кагарлик",
      "id": 230
    }, {
      "name": "Козятин",
      "id": 41
    }, {
      "name": "Калуш",
      "id": 204
    }, {
      "name": "Кам'янець-Подільський",
      "id": 485
    }, {
      "name": "Кам'янка",
      "id": 503
    }, {
      "name": "Кам'янка-Дніпровська",
      "id": 185
    }, {
      "name": "Кам'янське",
      "id": 82
    }, {
      "name": "Канів",
      "id": 504
    }, {
      "name": "Карлівка",
      "id": 369
    }, {
      "name": "Каховка",
      "id": 470
    }, {
      "name": "Керч",
      "id": 555
    }, {
      "name": "Кілія",
      "id": 346
    }, {
      "name": "Кобеляки",
      "id": 370
    }, {
      "name": "Ковель",
      "id": 67
    }, {
      "name": "Коломия",
      "id": 205
    }, {
      "name": "Конотоп",
      "id": 409
    }, {
      "name": "Коростень",
      "id": 148
    }, {
      "name": "Коростишів",
      "id": 149
    }, {
      "name": "Корсунь-Шевченківський",
      "id": 506
    }, {
      "name": "Корюківка",
      "id": 525
    }, {
      "name": "Костопіль",
      "id": 397
    }, {
      "name": "Краматорськ",
      "id": 121
    }, {
      "name": "Красилів",
      "id": 486
    }, {
      "name": "Красноград",
      "id": 448
    }, {
      "name": "Кременець",
      "id": 429
    }, {
      "name": "Кременчук",
      "id": 35
    }, {
      "name": "Кролевець",
      "id": 411
    }, {
      "name": "Крижанівка",
      "id": 722
    }, {
      "name": "Куп'янськ",
      "id": 450
    }, {
      "name": "Курахове",
      "id": 608
    }, {
      "name": "Ладижин",
      "id": 44
    }, {
      "name": "Лебедин",
      "id": 412
    }, {
      "name": "Лиман",
      "id": 123
    }, {
      "name": "Лисичанськ",
      "id": 275
    }, {
      "name": "Лозова",
      "id": 451
    }, {
      "name": "Лохвиця",
      "id": 375
    }, {
      "name": "Лубни",
      "id": 376
    }, {
      "name": "Лутугине",
      "id": 276
    }, {
      "name": "Любомль",
      "id": 70
    }, {
      "name": "Люботин",
      "id": 641
    }, {
      "name": "Макіївка",
      "id": 124
    }, {
      "name": "Малин",
      "id": 152
    }, {
      "name": "Марганець",
      "id": 86
    }, {
      "name": "Маяки",
      "id": 711
    }, {
      "name": "Мелітополь",
      "id": 187
    }, {
      "name": "Мена",
      "id": 527
    }, {
      "name": "Мерефа",
      "id": 452
    }, {
      "name": "Миргород",
      "id": 378
    }, {
      "name": "Мирноград",
      "id": 113
    }, {
      "name": "Могилів-Подільський",
      "id": 47
    }, {
      "name": "Моршин",
      "id": 590
    }, {
      "name": "Мукачево",
      "id": 170
    }, {
      "name": "Ніжин",
      "id": 528
    }, {
      "name": "Немирів",
      "id": 49
    }, {
      "name": "Нетішин",
      "id": 488
    }, {
      "name": "Миколаївка",
      "id": 352
    }, {
      "name": "Нікополь",
      "id": 16
    }, {
      "name": "Нова Каховка",
      "id": 472
    }, {
      "name": "Нова Одеса",
      "id": 329
    }, {
      "name": "Новгород-Сіверський",
      "id": 529
    }, {
      "name": "Нововолинськ",
      "id": 72
    }, {
      "name": "Новоград-Волинський",
      "id": 154
    }, {
      "name": "Новогродівка",
      "id": 128
    }, {
      "name": "Новомиргород",
      "id": 258
    }, {
      "name": "Новомосковськ",
      "id": 88
    }, {
      "name": "Новояворівськ",
      "id": 577
    }, {
      "name": "Новий Буг",
      "id": 330
    }, {
      "name": "Обухів",
      "id": 234
    }, {
      "name": "Обухівка",
      "id": 704
    }, {
      "name": "Овруч",
      "id": 155
    }, {
      "name": "Оріхів",
      "id": 190
    }, {
      "name": "Острог",
      "id": 400
    }, {
      "name": "Очаків",
      "id": 331
    }, {
      "name": "Павлоград",
      "id": 90
    }, {
      "name": "Первомайський",
      "id": 454
    }, {
      "name": "Перевальськ",
      "id": 282
    }, {
      "name": "Перещепине",
      "id": 650
    }, {
      "name": "Переяслав-Хмельницький",
      "id": 235
    }, {
      "name": "Першотравенськ",
      "id": 91
    }, {
      "name": "Пісочин",
      "id": 687
    }, {
      "name": "Пирятин",
      "id": 381
    }, {
      "name": "Підгородне",
      "id": 635
    }, {
      "name": "Подільськ",
      "id": 349
    }, {
      "name": "Покров",
      "id": 89
    }, {
      "name": "Покровськ",
      "id": 122
    }, {
      "name": "Покровське",
      "id": 94
    }, {
      "name": "Пологи",
      "id": 191
    }, {
      "name": "Попасна",
      "id": 283
    }, {
      "name": "Прилуки",
      "id": 531
    }, {
      "name": "Приморськ",
      "id": 193
    }, {
      "name": "Путивль",
      "id": 415
    }, {
      "name": "П'ятихатки",
      "id": 95
    }, {
      "name": "Радехів",
      "id": 307
    }, {
      "name": "Роздільна",
      "id": 355
    }, {
      "name": "Рені",
      "id": 356
    }, {
      "name": "Ровеньки",
      "id": 284
    }, {
      "name": "Рогатин",
      "id": 208
    }, {
      "name": "Ромни",
      "id": 416
    }, {
      "name": "Рубіжне",
      "id": 285
    }, {
      "name": "Саки",
      "id": 563
    }, {
      "name": "Самбір",
      "id": 308
    }, {
      "name": "Сватове",
      "id": 286
    }, {
      "name": "Світловодськ",
      "id": 263
    }, {
      "name": "Світлодарськ",
      "id": 665
    }, {
      "name": "Синельникове",
      "id": 96
    }, {
      "name": "Скадовськ",
      "id": 475
    }, {
      "name": "Сквира",
      "id": 238
    }, {
      "name": "Сколе",
      "id": 309
    }, {
      "name": "Славута",
      "id": 491
    }, {
      "name": "Славутич",
      "id": 239
    }, {
      "name": "Слов'янськ",
      "id": 131
    }, {
      "name": "Сміла",
      "id": 510
    }, {
      "name": "Сніжне",
      "id": 132
    }, {
      "name": "Снігурівка",
      "id": 333
    }, {
      "name": "Сновськ",
      "id": 537
    }, {
      "name": "Снятин",
      "id": 210
    }, {
      "name": "Сокаль",
      "id": 310
    }, {
      "name": "Соледар",
      "id": 133
    }, {
      "name": "Софіївська Борщагівка",
      "id": 682
    }, {
      "name": "Старобільськ",
      "id": 291
    }, {
      "name": "Стебник",
      "id": 656
    }, {
      "name": "Стрий",
      "id": 312
    }, {
      "name": "Судак",
      "id": 565
    }, {
      "name": "Щасливе",
      "id": 688
    }, {
      "name": "Щастя",
      "id": 651
    }, {
      "name": "Таврійськ",
      "id": 697
    }, {
      "name": "Тальне",
      "id": 511
    }, {
      "name": "Тернівка",
      "id": 99
    }, {
      "name": "Тлумач",
      "id": 211
    }, {
      "name": "Токмак",
      "id": 195
    }, {
      "name": "Торецьк",
      "id": 112
    }, {
      "name": "Трускавець",
      "id": 313
    }, {
      "name": "Тульчин",
      "id": 56
    }, {
      "name": "Тячів",
      "id": 174
    }, {
      "name": "Вугледар",
      "id": 137
    }, {
      "name": "Узин",
      "id": 591
    }, {
      "name": "Умань",
      "id": 512
    }, {
      "name": "Фастів",
      "id": 244
    }, {
      "name": "Феодосія",
      "id": 566
    }, {
      "name": "Харцизьк",
      "id": 138
    }, {
      "name": "Хмільник",
      "id": 58
    }, {
      "name": "Хорол",
      "id": 384
    }, {
      "name": "Червоноград",
      "id": 315
    }, {
      "name": "Чорноморськ",
      "id": 345
    }, {
      "name": "Чигирин",
      "id": 515
    }, {
      "name": "Чугуїв",
      "id": 457
    }, {
      "name": "Шахтарськ",
      "id": 139
    }, {
      "name": "Шостка",
      "id": 419
    }, {
      "name": "Шпола",
      "id": 516
    }, {
      "name": "Енергодар",
      "id": 197
    }, {
      "name": "Южноукраїнськ",
      "id": 334
    }, {
      "name": "Южне",
      "id": 362
    }, {
      "name": "Яворів",
      "id": 316
    }, {
      "name": "Яготин",
      "id": 245
    }, {
      "name": "Яремче",
      "id": 213
    }, {
      "name": "Ясинувата",
      "id": 140
    }];
    var container = document.querySelector('.js-vac-container'),
        dropdown = document.querySelector('.js-dropdown');

    if (container !== null) {
      cities.forEach(function (city) {
        dropdown.innerHTML += city.name === 'Місто' ? "<option disabled selected>".concat(city.name, "</option>") : "<option value=".concat(city.id, ">").concat(city.name, "</option>");
      });

      if (container.children.length < 2) {
        document.querySelector('.js-empty').style.display = "flex";
      }
    }
  })();

  ;

  (function () {
    var button = document.querySelector('.js-btn'),
        cardsContainer = document.querySelector('.cards-container');
    var cnt = 1;

    var insertData = function insertData(_ref) {
      var img = _ref.img,
          percent = _ref.percent,
          name = _ref.name,
          price = _ref.price;
      return "<li class=\"product col-12 col-md-6 col-lg-4 js-product faded\">\n                    <div class=\"product-inner\">\n                        <svg class=\"icon-sm product-icon\">\n                            <use xlink:href=\"/img/icons/icons.svg#red-pepper\"></use>\n                        </svg>\n                        <div class=\"text-center\">\n                            <img src=\"".concat(img, "\" alt=\"\" class=\"product-img mb-2\">\n                            <div class=\"product-heading\">").concat(name, "</div>\n                        </div>\n                        <div class=\"product-numbers\">\n                            <div class=\"product-price\">\n                                <div class=\"product-price-main\">").concat(price, "</div>\n                            </div>\n                            <div class=\"product-percent\">").concat(percent, "</div>\n                        </div>\n                    </div>\n                </li>");
    };

    var transformButton = function transformButton() {
      button.parentElement.innerHTML = "<a class=\"btn btn-danger btn-lg text-uppercase\" href=\"#top\">\u0434\u043E \u043F\u043E\u0447\u0430\u0442\u043A\u0443</a>";
    };

    var render = function render(data, container) {
      var datLeng = data.length;
      var productsHTML = '';

      if (datLeng < 6) {
        transformButton();
      }

      for (var i = 0; i < datLeng; i++) {
        productsHTML += insertData(data[i]);
      }

      container.innerHTML += productsHTML;
      setTimeout(function () {
        document.querySelectorAll('.js-product').forEach(function (li) {
          li.classList.remove('faded');
        });
      }, 300);
    };

    var loadMore = function loadMore(cnt) {
      fetch("/discounts/".concat(cnt), {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        return render(json, cardsContainer);
      });
    };

    var buttonListen = function buttonListen() {
      button.addEventListener('click', function () {
        loadMore(cnt);
        cnt++;
      });
    };

    if (button !== null) {
      buttonListen();
    }
  })();

  ;

  (function () {
    if (document.querySelector('#map') !== null) {
      var touchBlockerInit = function touchBlockerInit() {
        var namespace = {
          map: document.getElementById('map'),
          blocker: document.querySelector('.js-tBlocker')
        };

        var isTouchable = function isTouchable() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };

        var isDoubleTouched = function isDoubleTouched(touchesNum) {
          return touchesNum === 2;
        };

        var blockerAddListener = function blockerAddListener(tBlocker) {
          tBlocker.addEventListener('touchstart', function (event) {
            if (isDoubleTouched(event.touches.length)) {
              removeTouchBlocker(tBlocker);
            } else {
              return false;
            }
          });
        };

        var addTouchBlocker = function addTouchBlocker() {
          if (isTouchable()) {
            var tBlocker = namespace.blocker;
            tBlocker.classList.add('js-show');
            blockerAddListener(tBlocker);
          } else {
            return false;
          }
        };

        var removeTouchBlocker = function removeTouchBlocker(tBlocker) {
          var map = namespace.map;
          tBlocker.classList.remove('js-show');
          setTimeout(function () {
            document.addEventListener('touchstart', function touchOut(event) {
              var target = event.target;

              if (target && target !== map && !map.contains(target)) {
                document.removeEventListener('touchstart', touchOut);
                addTouchBlocker();
              }
            });
          }, 500);
        };

        addTouchBlocker();
      };

      DG.then(function () {
        var initMap = function initMap() {
          return DG.map('map', {
            center: [50.4532, 30.5164],
            zoom: 12
          });
        };

        var loadShopsData = function loadShopsData() {
          return fetch("/map/json", {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
          }).then(function (res) {
            return res.json();
          });
        };

        var addDOMLinks = function addDOMLinks(shopsData, shopNodes) {
          var point;
          var icon = DG.icon({
            iconUrl: '/img/icons/icons.svg#red-pepper',
            iconSize: [20, 20]
          });
          shopsData.forEach(function (shop) {
            point = shop.point;
            shop.node = Array.from(shopNodes).find(function (node) {
              return node.dataset.marker === "".concat(point.lat, ",").concat(point.lon);
            });
            shop.marker = DG.marker([point.lat, point.lon], {
              icon: icon
            }).addTo(map);
            shop.popup = shop.marker.bindPopup(shop.address_name);
          });
          return shopsData;
        };

        var filter = function filter(data, text) {
          var filtered = [],
              station;
          data.forEach(function (item) {
            station = item.links.nearest_stations[0].name;

            if (station.toLowerCase().indexOf(text) > -1) {
              filtered.push(item);
            }
          });
          return filtered;
        };

        var clearBorder = function clearBorder() {
          document.querySelectorAll('.js-shop').forEach(function (shopNode) {
            shopNode.querySelector('.card').classList.remove('border-danger');
          });
        };

        var listenButton = function listenButton(_ref2) {
          var marker = _ref2.marker,
              node = _ref2.node,
              point = _ref2.point;
          var button = node.querySelector('.js-shop-btn');
          button.addEventListener('click', function () {
            map.setZoom(12);
            setTimeout(function () {
              marker.openPopup();
              map.setView(point, 16);
              node.querySelector('.card').classList.add('border-danger');
            }, 600);
          });
        };

        var listenMarker = function listenMarker(_ref3) {
          var marker = _ref3.marker,
              node = _ref3.node,
              point = _ref3.point;
          marker.addEventListener('click', function () {
            map.setZoom(12);
            setTimeout(function () {
              map.setView(point, 16);
              node.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
              });
              node.querySelector('.card').classList.add('border-danger');
            }, 600);
          });
        };

        var listenPopup = function listenPopup(_ref4) {
          var popup = _ref4.popup;
          popup.addEventListener('popupclose', function () {
            clearBorder();
            setTimeout(function () {
              map.setZoom(12);
            }, 200);
          });
        };

        var addListeners = function addListeners(shopsData) {
          shopsData.forEach(function (shop) {
            listenButton(shop);
            listenMarker(shop);
            listenPopup(shop);
          });
        };

        var render = function render(data) {
          var container = document.querySelector('.js-shops-container');
          container.innerHTML = '';
          map.eachLayer(function (layer) {
            if (layer._leaflet_id > 400) {
              map.removeLayer(layer);
            }
          });
          data.forEach(function (_ref5) {
            var point = _ref5.point,
                name_ex = _ref5.name_ex,
                address_name = _ref5.address_name,
                links = _ref5.links;
            container.innerHTML += "<div class=\"col-12 mb-1 px-0 px-lg-2 js-shop\" data-marker=\"".concat(point.lat, ",").concat(point.lon, "\">\n                        <div class=\"card bg-light border\">\n                            <div class=\"card-body\">\n                                <p class=\"h5 my-0 js-shop-name\">").concat(name_ex.description, "</p>\n                                <p class=\"card-text mt-0\">").concat(address_name, "</p>\n                                <p class=\"card-text my-0\">8:00 - 23:00</p>\n                                <p class=\"card-text mt-0\">").concat(links.nearest_stations[0].name, "</p>\n                                <button class=\"btn btn-outline-danger btn-block text-uppercase js-shop-btn\">\u041D\u0430 \u043C\u0430\u043F\u0456</button>\n                            </div>\n                        </div>\n                    </div>");
          });
          return container.querySelectorAll('.js-shop');
        };

        var start = function start(data, shopNodes) {
          var shops = addDOMLinks(data, shopNodes);
          addListeners(shops);
        };

        touchBlockerInit();
        var map = initMap(),
            shopsData = loadShopsData(),
            input = document.querySelector('.js-input'),
            shopNodes = document.querySelectorAll('.js-shop');
        shopsData.then(function (data) {
          input.addEventListener('input', function (event) {
            var filtered = filter(data, event.target.value.toLowerCase()),
                shopNodes = render(filtered);
            start(filtered, shopNodes);
          });
          start(data, shopNodes);
        });
      });
    }
  })();

  ;
});