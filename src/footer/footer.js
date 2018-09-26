import './footer.scss';

(async function Footer() {
    const El = await new Promise((resolve) => {resolve('footer');})
        .then(el => {
            const footer = document.createElement(el);
            const text = document.createTextNode('Protected by the LAW');

            footer.appendChild(text);
            footer.classList.add('footer');

            return footer;
        });
    document.body.appendChild(El);
})();
