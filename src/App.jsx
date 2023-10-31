import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import MainLayouts from "./Layouts/MainLayouts";
import NavBarComponent from "./Components/NavBar/NavBarComponent";





function App() {
  return (
    <div>
      <NavBarComponent/>
      <ItemListContainer greeting="¡Hola! Le brindamos total libertad para explorar nuestros productos." />

    </div>

  );
  
}



export default App;

