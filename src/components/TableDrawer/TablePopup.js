import React from "react";
import TableUI from "../TableUI";

function TablePopup({ trigger, setTrigger, rows, headers }) {
  return (
    trigger && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 bg-gray-900 bg-opacity-25">
        <div className="mx-auto relative p-6 w-9/12 h-96 bg-indigo-50 rounded-2xl shadow-lg">
          <button
            onClick={() => setTrigger(false)}
            className="absolute -top-4 -right-2 text-white font-extrabold bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full transition duration-300"
          >
            X
          </button>
          <TableUI headers={headers} rows={rows} />
        </div>
      </div>
    )
  );
}

export default TablePopup;
