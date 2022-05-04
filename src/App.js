import "./App.css";

import { Countries } from "./components/Countries.jsx";
import { SearchByName } from "./components/SearchByName";

function App() {
  return (
    <div className="App">
      <SearchByName />
      <Countries />
    </div>
  );
}

export default App;
