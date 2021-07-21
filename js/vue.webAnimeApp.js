/*!
 * WebAnime (https://github.com/Relzon/WebAnime)
 * (c) 2016-2021 Roman Bartsevich (Relzon.com)
 * Created: 21.07.2021
 */

const HeaderOptions = {
    data: () => ({
        /* Парамеры лого */
        logoStyleClass: 'header_logo', // Класс стлей для логотипа
        logoLink: 'images/logo.png', // Ссылка на логотип

        /* Параметры кнопки прокрутки */
        upScrollButtonExistence: false, // Существование кнопки прокрутки
        heightForButtonAppear: 100, // Дистанция от верхнего края окна браузера, при превышении которой кнопка становится видимой
        heightForScrollUpTo: 0, // Дистанция от верхнего края окна браузера к которой будет прокручена страница
        upScrollButtonId: 'move_up', // ID кнопки
        upScrollButtonText: 'Наверх' // Текст на кнопке
    }),
    created () {
        window.addEventListener('scroll', this.onScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            if (window.scrollY > this.heightForButtonAppear) {
                this.upScrollButtonExistence = true
            } else {
                this.upScrollButtonExistence = false
            }
        },
        upScroll() {
            window.scrollTo(0, this.heightForScrollUpTo)
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
