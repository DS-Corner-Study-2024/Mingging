import { useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              isDone: !it.isDone,
            }
          : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }

    default:
      return state;
  }
  return state;
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current, 
        content,
        isDone: false,
        createData: new Date().getTime(), 
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    })
  };

  const onDelete = (targetId) => {
      dispatch({
        type: "DELETE",
        targetId,
      })
  };

  return (
    <div className="App">
    </div>
  );
}

export default App;
