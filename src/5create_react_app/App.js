import Button from "./Button";
import style from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={style.title}>Welcome back!!</h1>
      <Button text={"Countinue"} />
    </div>
  );
}

export default App;
