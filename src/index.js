import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Detection from "./component/detection";
let config = {};

config.callBack = function () {
  alert(
    "welcome to react event handling function Flight Reservation Button..."
  );
};

ReactDOM.render(<Detection></Detection>, document.getElementById("detail"));
serviceWorker.register();
