import './App.css';

function App() {
  function handleOnClick() {
    alert("클릭하셨군요!");
  }
  return (
    <div className="App">
      <button onClick={handleOnClick}>클릭하세요</button> 
    </div>
  );
}

export default App;
