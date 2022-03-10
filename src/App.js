import { createContext, useState } from "react";
import StationBody from "./Components/StationBody/StationBody";
import StationFooter from "./Components/StationFooter/StationFooter";
import StationHeader from "./Components/StattionHeader/StationHeader";

export const FMContext = createContext()

const appStyle = {
  backgroundColor: '#20202b',
  height: '100vh',
  paddingTop: '10px'
}

function App() {
  const [FMname, setFMname] = useState(false)

  return (
    <div style={appStyle}>
      <FMContext.Provider value={[FMname, setFMname]}>
        <StationHeader />
        <StationBody />
        <StationFooter />
      </FMContext.Provider>
    </div>
  );
}

export default App;
