import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';

//Components
import Home from './components/home';
import Artist from './components/artist';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path = '/' component={Home}></Route>
                <Route path = '/artist/:artistid' component={Artist}></Route>
            </div>
                
        </BrowserRouter>
    )
}

ReactDOM.render(<App />,document.getElementById('root'));


//To start the json web server
// json-server --watch db.json --port 3004