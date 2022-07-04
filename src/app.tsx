import React, { useCallback, useState } from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";

const App = () => {
  return(<>
    <h1>Hello World!</h1>
  </>)
};

const root = createRoot(document.getElementById('root'))
root.render(<App/>);
