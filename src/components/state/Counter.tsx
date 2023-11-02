import { useReducer } from 'react'

type CounterState = {
    count: number
}
type CounterAction = {
    type: string
    payload: number
}

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
    /* switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.payload }
        case "DECREMENT":
            return { count: state.count - action.payload }
        default:
            return state; */
    }
    /* switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count - 1 }
        default:
            return state;
    } */


}

export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count : {state.count}
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>Decrement 10</button>
        </>
    )
}
