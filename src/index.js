import React from 'react';
import {render} from 'react-dom';
import './index.css';

class Info extends React.Component {
    render() {
        return (
            <p>Some info here.</p>
        );
    }
}
const App = () => (
    <div>
        <h2>Hi there!</h2>
        <Info/>
    </div>
);

render(<App/>, document.getElementById('root'));
