import React from "react";
import socketio from "socket.io-client";

export const socket = socketio.connect(process.env.SOCKET_URL);
export const SocketContext = React.createContext();