import React from "react";
import TableView from "./components/TableView";
import { SocketContextProvider } from "./context/socket";

function App() {
  return (
    <SocketContextProvider>
      <div id="app" className="bg-slate-900 justify-center flex ">
        <TableView />
      </div>
    </SocketContextProvider>
  );
}

export default App;
