import { useState } from "react";
import Button from "../Button";

const Card = () => {
    const [ number, setNumber ] = useState(0);

    const handlerAdd = ()=>{
        setNumber(number + 1);
    }

    const handlerSub = ()=>{
        setNumber(number - 1)
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <Button 
                    type="success"
                    name="Adicionar"
                    onClick={handlerAdd}
                />
                <Button 
                    type="danger"
                    name="Remover"
                    onClick={handlerSub}
                />
                <p>{number}</p>
            </div>
        </div>
    );
}

export default Card;