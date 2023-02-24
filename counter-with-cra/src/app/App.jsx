import "./App.css";
// import { Counter } from "../components";
import { CounterClass, CounterFunction, Button } from "../components";

function App() {
  return (
    <div className="App">
      <h2>함수컴포넌트</h2>
      <CounterFunction count={10} />
      <h2>클래스컴포넌트</h2>
      <CounterClass step={3} />
      <h2>버튼 컴포넌트</h2>
      <Button />
    </div>
  );
}

export default App;
