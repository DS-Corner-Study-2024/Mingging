import './App.css';
import Header from './component/Header';
import Body from './component/Body';

function App() {
  const HeaderProps = {
    name:"박민주",
    stdnumber: 20230949,
  }
  return (
    <div className="App">
      <Header {...HeaderProps}  />
      <Body />
    </div>
  );
}

export default App;
