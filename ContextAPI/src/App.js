
import { createContext } from "react";
import CompA from "./components/CompA";

const FirstName=createContext();
const LastName=createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Rameshwar"}>
          <LastName.Provider value={"Navarange"}>
              <CompA/>
          </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export {FirstName,LastName};
