import React, { useReducer, useState } from "react";

//estado inicial
const initialState = {
  count: 0,
  countInterval: 1,
};

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INTERVAL":
      return {
        ...state,
        countInterval: action.countInterval,
      };
    case "INCREASE_COUNT":
      return {
        ...state,
        count: state.count + state.countInterval,
      };
    case "DECREASE_COUNT":
      return {
        ...state,
        count: state.count - state.countInterval,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState(false);

  const handleCountInterval = (e) => {
    const { value } = e.target;
    dispatch({ type: "SET_INTERVAL", countInterval: parseInt(value) });
  };

  const handleCountSum = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };

  const handleCountRes = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Count: {state.count}</h1>
      <div className="my-3">
        <input
          value={state.countInterval}
          onChange={handleCountInterval}
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
          <div>Te has suscrito</div>
        ) : (
          <button className="btn btn-success" onClick={() => setText(true)}>suscribirse</button>
        )}
      </div>
    </div>
  );
}

export default App;
