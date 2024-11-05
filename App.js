// Nested Elements
// For passing siblings => we have to pass the array of childrens in 3rd parameter
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi I'm h1 Tag!"),
    React.createElement("h2", {}, "Hi I'm h2 Tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I'm h1 Tag!"),
    React.createElement("h2", {}, "Hi I'm h2 Tag!"),
  ]),
]);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
