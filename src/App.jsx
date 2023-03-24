import React from "react";

function App() {
  return (
    <div className="flex h-screen text-white">
      <div className="bg-gray-800 p-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-800">
          TW
        </div>
      </div>
      <div className="flex flex-col w-60 bg-gray-700">
        <div className="p-4 shadow-md">Tailwind CSS</div>
        <div className="flex-1 p-4">channels</div>
      </div>
      <div className="flex flex-col flex-1 bg-gray-600">
        <div className="p-4 shadow-md">general</div>
        <div className="flex-1 p-4">messages</div>
      </div>
    </div>
  );
}

export default App;
