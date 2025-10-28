import React from "react";
import ReactDom from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", key: "child1" },

    [
      React.createElement("h1", { key: "a" }, "h1 tag"),
      React.createElement("h2", { key: "b" }, "h2 tag"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" },

    [
      React.createElement("h1", { key: "c" }, "h1 tag"),
      React.createElement("h2", { key: "d" }, "h2 tag"),
    ]
  ),
]);

console.log(parent);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent);
