import React from "react";
import ReactDom from "react-dom";

import Demo from "../demos/demo2/index$";

if (!document.querySelector("#app-root")) {
  const root = document.createElement("div");
  root.id = "app-root";
  document.body.appendChild(root);
}

ReactDom.render(<Demo />, document.querySelector("#app-root"));
