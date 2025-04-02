import Auth from "remoteApp/Auth";
import { useInput } from "remoteApp/Store";
import "./App.css";

function App() {
  const [value, setValue] = useInput();
  return (
    <div className="App">
      <h1>Host Application</h1>
      <Auth />
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
