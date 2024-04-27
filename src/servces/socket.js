import socketio from "socket.io-client";

const SOCKET_URL = "wss://fstream.binance.com";

export const socket = socketio.connect(SOCKET_URL);
