import React, { createContext } from "react";
import io from "socket.io-client";

const SOCKET_URL = "wss://fstream.binance.com";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const socket = io.connect(SOCKET_URL);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};