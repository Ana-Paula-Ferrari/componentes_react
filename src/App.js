import Item from "./Components/Item";
import Card from "./Components/Item/Card";

const App = () => {
  return (
    <>
    <h1>Minha primeira aplicação com React</h1>
    <ul>
      {/*<Item texto = "Item 1"/> */}
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </ul>
    <Card/>
    </>

    )
}

export default App;




//Outra forma
//function App () {
 // return (
   // <h1>Hello world</h1>
  //)
//}