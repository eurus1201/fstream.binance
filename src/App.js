import { SocketContext, socket } from "./context/socket";
import TableView from "./components/TableView";
import "./App.css";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div id="app" className="bg-slate-900 justify-center flex ">
     <TableView/>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
