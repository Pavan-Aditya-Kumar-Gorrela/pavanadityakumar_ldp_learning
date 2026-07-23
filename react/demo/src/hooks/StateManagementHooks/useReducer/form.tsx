import { useReducer} from 'react';

type State = {
    username: string;
    password: string;
    loading: boolean;
}

type Action = {type: "SET_USERNAME", payload: string} | {type: "SET_PASSWORD", payload: string} | {type: "LOGIN_START"} | {type: "LOGIN_SUCCESS"};

const initialState:State = {
    username: "",
    password: "",
    loading: false
};

function reducer(state:State, action: Action): State {
    switch(action.type){
        case "SET_USERNAME":
            return {...state, username: action.payload};
        case "SET_PASSWORD":
            return {...state, password: action.payload};
        case "LOGIN_START":
            return {...state, loading: true};
        case "LOGIN_SUCCESS":
            return {...state, loading: false};
        default:
            return state;
    }
}

export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
            <input type = "text" placeholder="Username" onChange = {(e) => {
                dispatch({type: "SET_USERNAME", payload: e.target.value})
            }}/>

            <input type = "password" placeholder="Password" onChange = {(e) => {
                dispatch({type: "SET_PASSWORD", payload: e.target.value})
            }}/>

            <button onClick = {() => {
                dispatch({type: "LOGIN_START"});
            }}>
                Login
            </button>


            {state.loading && <p onMouseOver={() =>{dispatch({type: "LOGIN_SUCCESS"})}}>Setting the credentials...</p>}
            {!state.loading && (
                <>
                    <p >Username: {state.username}</p>
                    <p>Password: {state.password}</p>
                </>
            )}
        </>
    )
}