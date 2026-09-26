import { createButton } from '../button/button';
import './heder.scss';

export function createHeader(): HTMLElement {

    const header = document.createElement('header');
    header.className = 'header';

    const container = document.createElement('div');
    container.className = 'header__container';

    const blockNav = document.createElement('div')
    blockNav.className = "header__block"

    const logo = document.createElement('a');
    logo.href = '#';
    logo.className = 'header__logo';
    logo.innerHTML = `<img src="Logo.png" alt="Logo"/>`;


    const nav = document.createElement('nav');
    nav.className = 'header__nav';

    const navList = document.createElement('ul');
    navList.className = 'header__nav-list';

    const menuItems = [
        { name: 'Home', href: '#home', active: 'header__nav-link--active' },
        { name: 'Library', href: '#library', active: ''},
        { name: 'Tournaments', href: '#tournaments', active: ''},
        { name: 'Community', href: '#community', active: ''},
    ];

    menuItems.forEach((item) => {

        const li = document.createElement('li');
        li.className = `header__nav-item `;
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.name;
        a.className = `header__nav-link ${item.active}`;

        a.addEventListener('click', () => {
            navList.querySelectorAll('.header__nav-link').forEach((link) => {
                link.classList.remove('header__nav-link--active');
            });

            a.classList.add('header__nav-link--active');
        });

        li.append(a);
        navList.append(li);
    });
    nav.append(navList);

    const actions = document.createElement('div');
    actions.className = 'header__actions';

    const loginBtn = createButton({
        text: 'Log In',
        variant: 'outline',
        size: 'small',
        onClick: () => {
        },
    });

    const signupBtn = createButton({
        text: 'Sign Up',
        variant: 'primary',
        size: 'small',
        onClick: () => {
        },
    });
    actions.append(loginBtn, signupBtn);

    const burgerBtn = document.createElement('button');
    burgerBtn.type = 'button';
    burgerBtn.className = 'header__burger';
    burgerBtn.ariaLabel = 'Toggle menu';
    burgerBtn.innerHTML = `
    <span class="header__burger-line"></span>
    <span class="header__burger-line"></span>
    <span class="header__burger-line"></span>
  `;

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    blockNav.append(nav, actions, burgerBtn)
    container.append(logo, blockNav);
    header.append(container);

    return header;
}