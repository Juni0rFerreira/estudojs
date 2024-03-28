import PropTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {
    return (
        <>
        <li>
            {marca} - {ano_lancamento}
        </li>
        </>
    )
}

Item.protTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marcar: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item