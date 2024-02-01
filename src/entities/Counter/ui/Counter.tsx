import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../modal/slice/counterSlice";
import { CounterSchema } from "../modal/types/counterSchema";
import { getCounterValue } from "../modal/selectors/getCounterValue/getCounterValue";

const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue);
		
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>Value = {counterValue}</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    )
};

export default Counter;

