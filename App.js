const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent);