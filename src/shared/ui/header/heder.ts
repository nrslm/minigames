import { createButton } from '../button/button';
import './heder.scss';

export function createHeader(): HTMLElement {
    const header = document.createElement('header');
    header.className = 'header';

    const container = document.createElement('div');
    container.className = 'header__container';

    const logo = document.createElement('a');
    logo.href = '#';
    logo.className = 'header__logo';
    logo.innerHTML = `<img src="Logo.png" alt="Logo"/>`;

    // Навигационный блок, который будет служить выпадающим меню на мобилках
    const nav = document.createElement('nav');
    nav.className = 'header__nav';

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'header__menu-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.ariaLabel = 'Close menu';

    const navList = document.createElement('ul');
    navList.className = 'header__nav-list';

    const menuItems = [
        { name: 'Home', href: '#home', active: 'header__nav-link--active' },
        { name: 'Library', href: '#library', active: '' },
        { name: 'Tournaments', href: '#tournaments', active: '' },
        { name: 'Community', href: '#community', active: '' },
    ];

    menuItems.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'header__nav-item';
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.name;
        a.className = `header__nav-link ${item.active}`;

        a.addEventListener('click', () => {
            navList.querySelectorAll('.header__nav-link').forEach((link) => {
                link.classList.remove('header__nav-link--active');
            });
            a.classList.add('header__nav-link--active');
            // Закрываем меню при клике на ссылку на мобилке
            nav.classList.remove('active');
            burgerBtn.classList.remove('active');
        });

        li.append(a);
        navList.append(li);
    });

    // Блок с кнопками авторизации
    const actions = document.createElement('div');
    actions.className = 'header__actions';

    const loginBtn = createButton({
        text: 'Log In',
        variant: 'outline',
        size: 'small',
        onClick: () => {},
    });

    const signupBtn = createButton({
        text: 'Sign Up',
        variant: 'primary',
        size: 'small',
        onClick: () => {},
    });
    actions.append(loginBtn, signupBtn);

    // Вкладываем крестик, список и кнопки внутрь НАВИГАЦИИ (теперь они единое мобильное меню)
    nav.append(closeBtn, navList, actions);

    // Бургер-кнопка в шапке
    const burgerBtn = document.createElement('button');
    burgerBtn.type = 'button';
    burgerBtn.className = 'header__burger';
    burgerBtn.ariaLabel = 'Toggle menu';
    burgerBtn.innerHTML = `
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
    `;

    // Логика открытия/закрытия
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        nav.classList.remove('active');
    });

    container.append(logo, burgerBtn, nav);
    header.append(container);

    return header;
}