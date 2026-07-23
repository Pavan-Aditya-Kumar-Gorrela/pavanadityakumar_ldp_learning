import { useReducer } from 'react';

type State = {
    count: number;
}

type Action = {type: 'increment'} | {type: 'decrement'} | {type: 'reset'};

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function UseReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    )
}

