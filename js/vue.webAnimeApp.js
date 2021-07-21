/*!
 * WebAnime (https://github.com/Relzon/WebAnime)
 * (c) 2016-2021 Roman Bartsevich (Relzon.com)
 * Created: 21.07.2021
 */

const HeaderOptions = {
    data: () => ({
        /* Параметры лого */
        logoStyleClass: 'header_logo', // Класс стлей для логотипа
        logoLink: 'images/logo.png', // Ссылка на логотип

        /* Параметры кнопки прокрутки */
        upScrollButtonExistence: false, // Существование кнопки прокрутки
        heightForButtonAppear: 100, // Дистанция от верхнего края окна браузера, при превышении которой появляется кнопка прокрутки
        heightForScrollUpTo: 0, // Дистанция от верхнего края окна браузера к которой будет прокручена страница
        upScrollButtonId: 'move_up', // ID кнопки
        upScrollButtonText: 'Наверх' // Текст на кнопке
    }),
    created () {
        window.addEventListener('scroll', this.onScroll) // Добавление слушателя события
    },
    destroyed () {
        window.removeEventListener('scroll', this.onScroll) // Удаление слушателя события
    },
    methods: {
        onScroll() { // Событие прокрутки страницы
            if (window.scrollY > this.heightForButtonAppear) {
                this.upScrollButtonExistence = true // Кнопка прокрутки существует
            } else {
                this.upScrollButtonExistence = false // Кнопка прокрутки НЕ существует
            }
        },
        upScroll() { // Событие прокрутки вверх (при нажатии на кнопку)
            window.scrollTo(0, this.heightForScrollUpTo) // Прокрутка страницы
        }
    }
}

const Header = Vue.createApp(HeaderOptions).mount('header');

const FooterOptions = {
    data: () => ({
        author: 'Mr. Relzon', // Автор шаблона
        link: 'https://relzon.com', // Ссылка на автора
        slogan: 'Сделано руками и... головой :)' // Текст в футере
    })
}

const Footer = Vue.createApp(FooterOptions).mount('footer');
