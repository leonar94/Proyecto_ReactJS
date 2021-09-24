import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';
import Cart from './components/Cart/Cart';



function App() {
  
  return ( 
     <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path='/' exact>
                    <ItemListContainer mensaje={'YB Lashes Studio'} mensaje2={'Potenciá tu belleza'}/>
                </Route>

                <Route path = '/categoria/:idCategoria' component={ItemListContainer}/>
                <Route exact path='/detalle' component={ItemDetailContainer}/>
                <Route exact path='/cart' component={Cart}/>
            </Switch>
            <ItemCount/>
      </BrowserRouter>
     
      
  )
}

export default App;
