import UseToggle from "./UseToggle.js";

function UseToggleHook() {

  // ! initially false diye set korlam . karon 1st time amr akta value deya lagto . jeita ke change korbe
  
  const [value, ToggleValue] = UseToggle(false);

  return (
    <>
      <div className="container">
        <h1 style={{ color: "blue", margin: "2rem" }}>{value.toString()}</h1>
        <div className="toggle" style={{ font: "menu", margin: "2rem" }}>
          <button onClick={() => ToggleValue()}>Toggle It</button>
          <button onClick={() => ToggleValue(true)}>Set True</button>
          <button onClick={() => ToggleValue(false)}>Set False</button>
        </div>
      </div>
    </>
  );
}

export default UseToggleHook;