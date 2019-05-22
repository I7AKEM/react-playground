const redux = require('redux');
const createStore = redux.createStore;

const initState = {
    counter: 0
}

// reducer
const rootReducer = (state = initState, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state
}

// store
const store = createStore(rootReducer);
// console.log(store.getState());

// Subscription
store.subscribe(() => {
    // console.log("Subscription", store.getState());
});

// dispatching actions
store.dispatch({type: "INC_COUNTER"});
store.dispatch({type: "ADD_COUNTER", value: 10});