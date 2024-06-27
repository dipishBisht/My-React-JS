import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));


const Main = () => {

    useEffect(() => {
        getData();
    })

    async function getData() {
        console.log("Hello World");
    }

    return (
        <div>
            xsadd
        </div>
    );
}

root.render(<Main />);
