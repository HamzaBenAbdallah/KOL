import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignPage from './pages/SignPage';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/Shop' component={ShopPage} />
                <Route exact path='/signin' component={SignPage} />
            </Switch>
        </div>
    );
}

export default App;
