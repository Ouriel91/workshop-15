import "./counter-component.css";
import {useState} from "react";

const CounterComponent = props => {
    const [counterValue, setCounterValue] = useState(0);
    
    const sevenBoom = (value) =>{
        if (value <= 0) return false
        if(value % 7 === 0) return true;
        let counter
        while (value > 10){
            counter = Math.floor(value % 10)
            if(counter === 7) return true;
            value = Math.floor(value / 10)
        }
        return value === 7
    }

    return (
        <div className="counter-component">
            <button className="counter-component__button" onClick={() => setCounterValue(counterValue + 1)}>+</button>
            <div className="counter-component__value">{sevenBoom(counterValue) ? "BOOM" : String(counterValue)}</div>
            <button className="counter-component__button" onClick={() => setCounterValue(counterValue - 1)}>-</button>
        </div>
    )
}

export default CounterComponent;