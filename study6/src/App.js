import './App.css';
import {useRef, useState} from "react";

function App() {
  const[text, setText] = useState("");
  const textRef = useRef();

  function textChange(e) {
    setText(e.target.value);
  }

  function handleOnClick() {
    if (text.length < 7) {
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  }

  return (
    <div className="App">
        <input ref={textRef} type="text" value={text} onChange={textChange}></input>
        <button type="button" onClick={handleOnClick}>제출</button>
    </div>
  );
}

export default App;
