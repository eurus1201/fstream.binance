import React, { useEffect, useContext, useState } from "react";
import { SocketContext } from "../context/socket";

const TableView = () => {
  const socket = useContext(SocketContext);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const subscribePayload = {
      method: "SUBSCRIBE",
      params: ["!ticker@arr"],
      id: 1,
    };
    socket.emit("SUBSCRIBE", subscribePayload);
    const onDataReceived = (jsonData) => {
      try {
        const data = JSON.parse(jsonData);
        setTableData((prevData) => [...prevData, ...data]);
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    };
    socket.on("data", onDataReceived);
    return () => {
      socket.off("data", onDataReceived);
    };
  }, [socket]);

  return (
    <div className="flex justify-center items-center">
      <div>
        <table className="w-96 table-collapse bg-slate-950">
          <tbody className="align-baseline">
            {tableData?.map((item, index) => (
              <tr
                key={index}
                className="group cursor-pointer hover:bg-gray-100"
              >
                <td className="text-sm text-white p-3 whitespace-no-wrap">
                  <p>{item.s}</p>
                  <small className="text-gray-400">perpetual</small>
                </td>
                <td className="text-sm p-3 text-white text-right whitespace-no-wrap">
                  <p>{item.c}</p>
                  <small className="text-green-600">{item.p} %</small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
