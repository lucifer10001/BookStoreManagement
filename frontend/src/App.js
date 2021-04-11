import "./App.css"
//import CarouselPage from './components/CarouselPage';
//import NavbarPage from './components/NavbarPage';
import ViewCustomer from "./components/ViewCustomer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import AddBook from "./components/AddBook";
// import UpdateBook from "./components/UpdateBook";
// import ViewDetails from "./components/ViewDetails";
import Tabs from './components/Tabs';
//import { FooterContainer } from "./components/footer/Footer";
// import FooterPage from "./components/FooterPage";
//import Signup from './components/SignUp'


function App() {
  return (
    <div>
      <Router>
        <Switch>

          
         
          <Tabs/>
          <Route path="/">
                        
            <br></br>
            
            
            </Route>

        </Switch>
       
      </Router>
     
        {/* <FooterPage /> */}
    </div>
    
  );
}
export default App;

