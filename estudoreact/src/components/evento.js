import Button from "./button";

function Evento() {

    function meuEvento() {
       console.log('Primeiro Evento!') 
    }

    function segEvento() {
        console.log("Segundo Evento!")
    }

    return (
        <div>
            <p>
                Click para desparar um Evento
            </p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento;