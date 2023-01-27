//desestruturar
const Item = ( { children }) => {
//const Item = (props) => {
    return (
        <a href="#" className="list-group-item list-group-item-action list-group-item-info">
         {/*{props.text}*/}
         {/*{props.children}*/}
         {children}
        </a>
    )
}


export default Item;