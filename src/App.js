import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  
  return ( 
  <>
    <NavBar/>
    <ItemListContainer mensaje={'YB Lashes Studio'} mensaje2={'Potenciá tu belleza'}/>
      </>
  )
}

export default App;
