import StyleWithSxProp from "./components/Sx";
import StyleWithClassName from "./components/ClassName";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <StyleWithSxProp />
      <StyleWithClassName />
    </div>
  );
}

export default App;
