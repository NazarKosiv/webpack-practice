import React from 'react';
import ReactDOM from 'react-dom';

const reactRoot = document.getElementById('react-root');

const Content = () => {
    return (
        <div>
            <h1>Main content of</h1>
        </div>
    );
};

ReactDOM.render(<Content/>, reactRoot);
