# react-console-log-plus-hook

A custom [hook](https://reactjs.org/docs/hooks-intro.html) for React which allows to use [console-log-plus](https://www.npmjs.com/package/console-log-plus) easily in functional components.

## How to install

```
# using npm
> npm install react-console-log-plus-hook --save

# using yarn
> yarn add react-console-log-plus-hook
```

## How to use

```
import React from "react";
import ReactDOM from "react-dom";

import { useLogger } from "react-console-log-plus-hook";

function App() {
  const logger = useLogger();

  return (
    <button
      onClick={() => logger.clp({ type: "info", message: "You clicked me!" })}
    >
      Click Me!
    </button>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
