// src/components/Smily.js
import React from 'react';

function Smily() {
  return(
    <div class="relative w-[1392px] h-[616px] top-[3997px] left-[264px] gap-0 bg-bgcolour">
        <img src="/eyebrow.png" class="absolute w-[336px] h-[336px] top-[250px] left-[47px]"></img>
        <img src='/paperairplane.png' class="absolute w-[430px] h-[370px] top-[30px] left-[254px] gap-0"></img>
        <div class=''>
          <p class='absolute font-inter text-[15px] text-gray-600 top-[30px] left-[730px]'>OVERLINE</p>
          <p class="absolute font-sora font-bold text-[64px] gap-[16px] leading-[54px] tracking-[0.2px] text-left text-white top-[80px] left-[730px]">
            Habitant tristique aliquam in vel scelerisque
          </p>
          <p class='absolute font-inter text-[16px] text-gray-500 top-[270px] left-[730px]'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
          <img src='/Vector.png' class='absolute w-[32px] h-[32px] left-[730px] top-[400px]'></img>
          <img src='/Group.png' class='absolute w-[32px] h-[32px] left-[970px] top-[400px]'></img>
          <p class='absolute font-sora text-[20px] left-[730px] top-[450px] text-white'>Sollicitudin sapien</p>
          <p class='absolute font-sora text-[20px] left-[970px] top-[450px] text-white' >Pulvinar metus</p>
          <p class='absolute font-inter text-[16px] left-[730px] top-[477px] text-gray-500'>Cursus fermentum</p>
          <p class='absolute font-inter text-[16px] left-[970px] top-[477px] text-gray-500'>Nunc sed</p>
        </div>
        <div class='absolute w-[302px] h-[52px] top-[546px] left-[726px]'>
        <div class='absolute w-[144px] h-[52px] flex items-center justify-center bg-gradient-to-r from-gstart to-gend rounded-lg'>
              <p class='absolute font-sora text-[16px] text-white'>Get started</p>
            </div>
            <div class='absolute w-[144px] h-[52px] left-[164px] flex items-center justify-center border border-gray-500 rounded-lg'>
              <p class='absolute font-sora text-[16px] text-gray-500'>Learn more</p>
            </div>
        </div>
    </div>
  );
}

export default Smily;
