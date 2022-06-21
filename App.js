import React from "react";
import ReactDOM from "react-dom";

function App() {
  const test = () => { console.log('it works') }
  test();
  return (
    <div>Hello, esbuild!</div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
