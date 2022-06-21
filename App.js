import React from "react";
import ReactDOM from "react-dom";

function App() {
  const test = () => 'hello, from esbuild!'
  test();
  return (
    <div>{test()}</div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
