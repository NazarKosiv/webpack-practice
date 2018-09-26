import './header.css';

function header() {
    return {
        name: 'header',
        text: 'Hello Webpack'
    }
}

(() => {
    const headerEl = document.createElement(header().name);
    headerEl.textContent = header().text;
    document.body.appendChild(headerEl);
})();
