import React from "react";
import "./App.css";
import Child from "./child";
import { TransactionProvider } from "./transContext";

function App() {
  return (
    <div>
      <Child />
    </div>
  );
}

export default App;
