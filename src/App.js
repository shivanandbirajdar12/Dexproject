import { Routes, Route } from "react-router-dom";
import Swap from "./Component/Swap";
import Explore from './Component/Explore';
import Analytics from './Component/Analytics';
import Pool from "./Component/Pool";
import MainHome from "./Component/MainHome";
import Main from './Router/Routing';
import CreatePair from "./PoolContent/CreatePair";
import AddLiquidty from "./PoolContent/AddLiquidty";
import ImportPool from "./PoolContent/ImportPool";

function App() {
  
  return (
    <>
    <div className="App app-container">
    
      <Routes>
        <Route path="/" element={<MainHome/>}/>
        <Route path="/ main" element={<Main />} />  
        <Route path="/swap" element={<Swap/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/pool" element={<Pool />} />
        <Route path='/pool=create pair' element={<CreatePair/>}/>
        <Route path='/pool=add Liquidty' element={<AddLiquidty ></AddLiquidty>}/>
        <Route path='/pool=import Pool' element={<ImportPool/>}/>
      </Routes> 
  
      </div>
    </>
  );
}

export default App;