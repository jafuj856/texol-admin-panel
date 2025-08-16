import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-[30vh] w-full gap-2">
      <div className="h-2 w-2 bg-buttonColor/90 rounded-full shadow-2xl animate-bounce delay-75" />
      <div className="h-2 w-2 bg-buttonColor/90 rounded-full shadow-2xl animate-bounce delay-300" />
      <div className="h-2 w-2 bg-buttonColor/90 rounded-full shadow-2xl animate-bounce delay-700" />
    </div>
  );
}

export default Loading;
