import React from "react";

function Stats() {
  return (
    <div className="relative w-[920px] h-[135px] bg-bgcolour top-[5868px] left-[500px] flex justify-between items-center">
      
      <div className="flex flex-col items-center">
        <img src="/people.png" className="w-[32px] h-[32px] mb-4" />
        <div className="text-center">
          <p className="font-sora text-[48px] text-white font-custom">300K</p>
          <p className="font-inter text-gray-500 text-[16px]">Users Active</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src="/Group.png" className="w-[32px] h-[32px] mb-4" />
        <div className="text-center">
          <p className="font-sora text-[48px] text-white font-custom">300K</p>
          <p className="font-inter text-gray-500 text-[16px]">Users Active</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src="/paintbrush.png" className="w-[32px] h-[32px] mb-4" />
        <div className="text-center">
          <p className="font-sora text-[48px] text-white font-custom">300K</p>
          <p className="font-inter text-gray-500 text-[16px]">Users Active</p>
        </div>
      </div>
      
    </div>
  );
}

export default Stats();
