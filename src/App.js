import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homepage/homepage.component.jsx';
import ShopPage from './Pages/shop/shop.component';
import Header from './Component/header/header.component';
import signinandsignout from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={signinandsignout} />
      </Switch>
    </div>
  );
}

export default App;
