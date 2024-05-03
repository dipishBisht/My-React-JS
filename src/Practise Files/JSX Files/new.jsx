import React from 'react'
import ReactDOM from 'react-dom/client'

const headingElement = <h1>Heading Element</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
const AnotherHeading = () => <h1>Another Heading Component</h1>

const HeadingComponent = () => (
    <div>
        <AnotherHeading />
        <h1>Heading Component</h1>
        {headingElement}
        {AnotherHeading()}
    </div>
);

root.render(<HeadingComponent />);
