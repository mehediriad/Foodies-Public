
import './App.css';
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
import Header from './Components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Banner from './Components/Banner/Banner';
import PrivetRoute from './Utilites/PrivetRoute/PrivetRoute';
import AddItems from './Components/AddItems/AddItems';
import FeaturedItems from './Components/FeaturedItems/FeaturedItems';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Items from './Components/Items/Items';
import Pricing from './Components/Pricing/Pricing';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Membership from './Components/Membership/Membership';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrders from './Components/MyOrders/MyOrders';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
            <Route exact path='/'>
                <Banner></Banner>
                <FeaturedItems></FeaturedItems>
                <Pricing></Pricing>
                <Membership></Membership>
            </Route>
            <Route path='/home'>
                <Banner></Banner>
                <FeaturedItems></FeaturedItems>
                <Pricing></Pricing>
                <Membership></Membership>
            </Route>
            <Route path='/items'>
                <Items></Items>
            </Route>
            <Route path='/about'>
                <About></About>
            </Route>
            <Route path='/contact'>
                <Contact></Contact>
            </Route>
            <Route path='/pricing'>
                <Pricing></Pricing>
            </Route>
            <Route path='/login'>
                <Login></Login>
            </Route>
            <Route path='/register'>
                <Register></Register>
            </Route>
            
            <PrivetRoute path='/add-items'>
                <AddItems></AddItems>
            </PrivetRoute>
            <PrivetRoute path='/manage-orders'>
                <ManageOrders></ManageOrders>
            </PrivetRoute>
            <PrivetRoute path='/my-orders'>
                <MyOrders></MyOrders>
            </PrivetRoute>
            <PrivetRoute path='/shipping/:itemId'>
                <Shipping></Shipping>
            </PrivetRoute>
            <Route path='*'>
                <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
