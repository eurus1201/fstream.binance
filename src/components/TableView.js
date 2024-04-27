import React, { useContext, useEffect } from "react";
import { SocketContext } from "../context/socket";

const TableView = () => {
  const socket = useContext(SocketContext);

  useEffect(() => {
    const subscribePayload = {
      method: "SUBSCRIBE",
      params: ["!Icker@arr"],
      id: 1,
    };
    socket.emit("SUBSCRIBE", subscribePayload, () => {
      console.log("Subscription successful");
    });
    const onDataReceived = (data) => {
      console.log(data);
      console.log("first data received");
    };
    socket.on("data", onDataReceived);
  }, [socket]);
  return (
    <div className="flex justify-center items-center">
      <div>
        <table className="w-96 table-collapse bg-slate-950">
          <tbody className="align-baseline">
            <tr className="group cursor-pointer hover:bg-gray-100">
              <td className="text-sm text-white p-3   whitespace-no-wrap">
                <p>BTCUSDT</p>
                <small className="text-gray-400">perpetual</small>
              </td>
              <td className="text-sm p-3 text-white text-right whitespace-no-wrap">
                <p>20,356,222</p>
                <small className="text-green-600">+2.08 %</small>
              </td>
            </tr>
            <tr className="group cursor-pointer hover:bg-gray-100">
              <td className="text-sm text-white p-3   whitespace-no-wrap">
                <p>ETHUSDT</p>
                <small className="text-gray-400">perpetual</small>
              </td>
              <td className="text-sm p-3 text-red-500 text-right whitespace-no-wrap">
                <p>20,356,222</p>
                <small className="text-green-600">+2.08 %</small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
