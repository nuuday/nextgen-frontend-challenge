import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";

import style from "./document.module.scss";
import { Sample } from "../components/sample";

const App = hot(Sample);

const rootElement = document.getElementById("root");
rootElement?.classList.add(style.root);

ReactDOM.render(<App />, rootElement);
