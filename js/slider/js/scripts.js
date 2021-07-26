
new Swiper('.image-slider', { // Инициализируем swiper
    preloadImages: false,
    // Enable lazy loading
    lazy: {
        // подгр на старте переключения слайдера
        LoadOnTransitionStart: true,
        //подгр пред и след картинки
        LoadPrevNext: true,
    },
    //Слежка за видимыми слайдами
    watchSlidesProgress: true,
    //Добавление класса видимым слайдам
    watchSlidesVisibility: true,
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // навигация: буллеты, положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // буллеты
        clickable: true,
        // динамические буллеты
        dynamicBullets: true,
        // кастомные буллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },

        // type: 'fraction',
        // // кастомный вывод фракций
        // renderFraction: function (currentClass, totalClass) {
        //     return 'Фото <span class="' + currentClass + '"></span>' +
        //     ' из ' + '<span class="' + totalClass + '"></span>';
        // },

        // Прогрессбар
        // type: 'progressbar'
    },



    // Скролл
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     // Возможность перетаскивать скролл
    //     draggable: true
    // },

    // Включение/ отключение перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // // Курсор перетаскивания
    // grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: true,

    // Навигация по хэшу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true, // навигация с помощью стрелок браузера
    },

    // Управление клавиатурой
    keyboard: {
        // вкл/ выкл
        enabled: true,
        // Вкл/ выкл только когда слайдер в пределах вьюпорта
        onlyInVievport: true,
        // ВКЛ/ ВЫКЛ  управление клавишами pageUp, pageDown
        pageUpDown: true,
    },

    // // Управление колесом мыши
    // mousewheel: {
    //     // Чувствительность колеса мыши
    //     sensitivity: 1,
    //     // Класс обьекта на котором будет срабатывать прокрутка мышью
    //     eventsTarget:".image-slider"
    // }

    // // Автовысота  (меняется высота от высоты фотографии)
    // autoHeight: true,


    // Количество слайдов для показа
    slidesPerView:'auto', //может быть 'auto' может быть не целое число  // для корректной работы нужко указать в стилях ширину авто


    
    // // Отключение функционала, если слайдов меньше указанного выше
    // watchOverflow: true,

    // Отступ между слайдами
    // spaceBetween: 30, 

    // Количество пролистываемых слайдов
    // slidesPerGroup: 1,

    // Активный слайд по центру
    // centeredSlides: true,

    // Стартовый слайд
    // initialSlide: 1,  //(1-ый слайд это нулевой)

    // Мультирядность 

    // Бесконечный слайдер
    loop: true,

    // // Кол-во дублирующих слайдов (при необх. по верхн параметру)
    // loopedSlides: 0,
    
    // Свободный режим (свободно тягяем ленту без фиксации)
    // freeMode: true,

    // // Автопрокрутка
    // autoplay: {
    //     // Пауза между прокруткой
    //     delay: 2000,
    //     // Закончить на последнем слайде
    //     stopOnLastSlide: false,
    //     // Отключить после ручного переключения
    //     disableOnInteraction: true
    // }

    // Скорость переключения слайдов
    speed: 800, // 300 по умолчанию

    // // Вертикальный слайдер
    // direction: 'vertical', // для корректн таботы прописать стили

    // Эффекты переключения слайдов
    // Листание
    // effect: 'slide', // по умолчанию


    // Смена прозрачности
    effect: 'fade',
        // Дополнение к fade
        fadeEffect: {
            //Параллельная смена прозрачности
            crossFade: true
        },


    // // Переворот
    // effect: 'flip',
    // // Дополнение к флип
    //     flipEffect: {
    //         // Тень
    //         slideShadows: false,
    //         // Показ только активного слайда
    //         limitRotation: true
    //     },

    // // Куб
    //     effect: 'cube',
        
    //    // Дополнение к куб
    //     cubeEffect: {       // нужно добавить css
    //         // Настройки тени
    //         slideShadows: true,
    //         shadow: true,
    //         shadowOffset: 20,
    //         shadowScale: 0,94
    //     }
    
    // Эффект потока 
    // effect: 'coverflow',
    //     // Дополнения к coverflow
    //     coverflowEffect: {
    //         // Угол
    //         rotate: 20,
    //         //Наложение
    //         stretch: 50,
    //         // Тень
    //         slideShadows: true,
    //     },

    
        // Брейк пойнты (адаптив)
        // Ширина экрана
        // breakpoints: {
        //     375: {
        //         slidesPerView:1,
        //     },
        //     768: {
        //         slidesPerView:1.6,
        //     },
        //     1600: {
        //         slidesPerView:2.5,
        //     }
        // }

}); 

