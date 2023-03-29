import React from "react";

function App() {
  return (
    <div className="flex h-screen text-gray-100">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-auto">
        {[...Array(40)].map((_, i) => (
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-800">
            {i}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-60 bg-gray-800">
        <div className="px-3 h-12 shadow-md flex items-center">
          Tailwind CSS
        </div>
        <div className="text-gray-300 flex-1 p-3 overflow-y-auto space-y-2">
          <p className="text-white">channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p>channel {i + 1}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-gray-700">
        <div className="px-3 h-12 shadow-md flex items-center">general</div>
        <div className="flex-1 px-3 space-y-4 overflow-y-auto">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Message {i}. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel saepe laudantium sed reprehenderit incidunt! Hic rem
              quos reiciendis, fugit quae ratione beatae veniam laborum
              voluptatem, iusto dolorum, voluptates suscipit quia.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
