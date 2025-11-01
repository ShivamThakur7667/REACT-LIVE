import React from "react";
import ReactDom from "react-dom/client";

// JSX ??

const Title = () => (
  <h1 id="title" key="h2">
    Namaste Shivam React2
  </h1>
);

var x = 10;

// React Component
// -> Function based Component - new
// -> Component name should start with Capital letter - it's not mandatory

const HeaderComponent = () => {
  return (
    <div>
      {/* {Title()} */}
      {1 + 2}
      <h1>Namaste React function component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

// -> Class based Component - old

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
