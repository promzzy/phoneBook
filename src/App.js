import "./App.css";
import Loader from "./components/Loader";
import Popup from "./components/Popup";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="app-root">
      <Loader />
      <Popup />
      <Homepage />
    </div>
  );
}

export default App;
