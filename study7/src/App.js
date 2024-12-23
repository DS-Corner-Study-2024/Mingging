import { useState } from "react";
import Viewer from "./component/Viewer.js";
import Controller from "./component/Controller.js";

function App() {
  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} count={count} />
      </section>
    </div>
  );
}

export default App;
