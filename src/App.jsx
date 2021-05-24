import React, { useReducer, useState } from "react";

//estado inicial
const initialState = {
  count: 0,
};

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        ...state,
        count: state.count + action.value,
      };
    case "DECREASE_COUNT":
      return {
        ...state,
        count: state.count - action.value,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(0);
  const [text, setText] = useState(false);

  const handleCountSum = () => {
    dispatch({ type: "INCREASE_COUNT", value: step });
  };

  const handleCountRes = () => {
    dispatch({ type: "DECREASE_COUNT", value: step });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Count: {state.count}</h1>
      <div className="my-3">
        <input
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          type="text"
        />
      </div>
      <div>
        <button onClick={handleCountSum} type="text" className="btn btn-danger">
          sumar
        </button>
        <button
          onClick={handleCountRes}
          type="button"
          className="btn btn-warning mx-2"
        >
          restar
        </button>
      </div>
      <div className="my-5">
        {text ? (
          <div>
            <strong>TE HAS SUSCRITO</strong>
          </div>
        ) : (
          <button className="btn btn-success" onClick={() => setText(true)}>
            suscribirse
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
