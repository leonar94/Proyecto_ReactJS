import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
  return ( 
  <>
    <NavBar/>
    {/* <ItemListContainer mensaje={'YB Lashes Studio'} mensaje2={'Potenciá tu belleza'}/> */}
    <ItemDetailContainer/>
      </>
  )
}

export default App;
