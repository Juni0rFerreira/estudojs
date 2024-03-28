import style from './text.module.css'

function SyMayName(props) {
    return(

        <div>
            <p className={style.textContainer}>
                Fala ai {props.nome}, tudo bem?
            </p>
        </div>

    );
}

export default SyMayName