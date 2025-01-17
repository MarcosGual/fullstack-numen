import { useReducer } from "react";

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  TOGGLE_VISIBILITY: "TOGGLE_VISIBILITY",
};

const initialState = {
  count: 0,
  isVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      console.log("Incremento. Estado anterior: ", state);
      return { ...state, count: state.count + 1 };
    case TYPES.DECREMENT:
      console.log("Decremento. Estado anterior: ", state);
      return { ...state, count: state.count - 1 };
    case TYPES.RESET:
      console.log("Resetear. Estado anterior: ", state);
      return { ...state, count: 0 };
    case TYPES.TOGGLE_VISIBILITY:
      return { ...state, isVisible: !state.isVisible };
    default:
      console.log("Default");
      return state;
  }
};

const ContadorReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: TYPES.TOGGLE_VISIBILITY })}>
        Mostrar Contador
      </button>
      {state.isVisible && (
        <div>
          <h2>Contador con Función Reductora</h2>
          <h4>{state.count}</h4>
          <button onClick={() => dispatch({ type: TYPES.DECREMENT })}>
            -1
          </button>
          <button onClick={() => dispatch({ type: TYPES.INCREMENT })}>
            +1
          </button>
          <button onClick={() => dispatch({ type: TYPES.RESET })}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default ContadorReduce;
