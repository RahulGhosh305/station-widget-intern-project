import { createContext, useState } from "react";
import StationBody from "./Components/StationBody/StationBody";
import StationFooter from "./Components/StationFooter/StationFooter";
import StationHeader from "./Components/StattionHeader/StationHeader";

export const FMContext = createContext()

const appStyle = {
  backgroundColor: '#20202b',
  height: '150vh',
  paddingTop: '15px'
}

function App() {
  const [FMname, setFMname] = useState(false)

  return (
    <FMContext.Provider value={[FMname, setFMname]}>
      <div style={appStyle}>
        <StationHeader />
        <StationBody />
        <StationFooter />
      </div>
    </FMContext.Provider>
  );
}

export default App;
