import { navigationListItem } from './constants'

function navigation(navElements: string[]) {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    navElements.forEach(el => {
        const item = document.createElement('span');
        const text = document.createTextNode(el);

        item.appendChild(text);
        item.classList.add('nav-item');
        item.addEventListener('click', (e) => {
            const target: any = e.target;

            if (target.classList.contains('clicked')) {
                target.classList.remove('clicked')
            } else {
                target.classList.add('clicked')
            }
        });
        nav.appendChild(item);
    });

    document.body.appendChild(nav);
}

navigation(navigationListItem);
