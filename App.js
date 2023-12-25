const heading = React.createElement("div", { id: "heading", tabIndex: "1" }, [
  React.createElement("h1", { id: "head1" }, [
    React.createElement("p", { id: "para1" }, "Hi I am MovieAdda App1"),
    React.createElement("p", { id: "para2" }, "Hi I am MovieAdda App2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
