// Nested Elements

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hi I'm h1 Tag!")
  )
);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
