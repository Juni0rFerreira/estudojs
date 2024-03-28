import Item from "./item"

function List() {
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1985}/>
            <Item marca="Fiat" ano_lancamento={1964}/>
            <Item marca="Lamborghini" ano_lancamento={1987}/>
            <Item />
        </ul>
        </>
    )
}

export default List