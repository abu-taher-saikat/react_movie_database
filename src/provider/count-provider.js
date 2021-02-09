import {createContext, useReducer} from 'react';
import reducer, {createActions} from '../reducers/count-reducer';

const CountContext = createContext();

const CountProvider = (props) => {
    const [count, dispatch] = useReducer(reducer, 0);
    const actions = createActions(dispatch);

    return(
        <CountContext.Provider value={{count, ...actions}}>
            {props.children}
        </CountContext.Provider>
    )
}

export {CountProvider, CountContext};