import Auth from "remoteApp/Auth";
import useStore from "remoteApp/Store";
import "./App.css";

function App() {
  const [value, setValue] = useStore();
  return (
    <div className="App">
      <h1>Host Application</h1>
      <Auth />
      <input value={value} onChange={(e) => {}} />
    </div>
  );
}

export default App;
