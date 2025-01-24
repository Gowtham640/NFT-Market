import React from "react";

function Footer(){
    return(
        <div class='relative w-[1392px] h-[397px] top-[6976px] left-[264px] bg-bgcolour relative'>
            <div class='absolute w-[465px] h-[397px] rounded-l-xl border border-gray-500/40'>
              <div class='absolute w-[213px] h-[34px] top-[48px] left-[48px]'>
                <img src='/Sygnet.png' class='absolute w-[34px] h-[34px]'></img>
                <img src='/NFT Market.png' class='absolute w-[160.19px] h-[20.37px] top-[5px] left-[45px]'></img>
              </div>
              <div class='absolute w-[294px] h-[21px] top-[333px] left-[48px] flex justify-between'>
                <p class='  font-inter text-[14px] text-gray-500'>Support</p>
                <p class='  font-inter text-[14px]  text-gray-500'>Terms of service</p>
                <p class='  font-inter text-[14px]  text-gray-500'>License</p>
              </div>
            </div>



            <div class='absolute w-[464px] h-[397px] left-[464px]  border border-gray-500/40'>
             <div class='absolute w-[99px] h-[128px] top-[48px] left-[48px] flex-col justify-between'>
                <p class='font-sora text-white text-[16px] font-custom'>Auctions</p>
                <p class='font-sora text-white text-[16px] font-custom'>Roadmap</p>
                <p class='font-sora text-white text-[16px] font-custom'>Discover</p>
                <p class='font-sora text-white text-[16px] font-custom'>Community</p>
             </div>
             <div class='absolute w-[144px] h-[52px] top-[216px] left-[48px] flex items-center justify-center bg-gradient-to-r from-gstart to-gend rounded-lg'>
              <p class='absolute font-sora text-[16px] text-white'>Get started</p>
             </div>
             <div class='absolute w-[200px] h-[20px] top-[337px] left-[48px] flex justify-between'>
               <img src='/fb.png' class='w-[20px] h-[20px]'></img>
               <img src='/lk.png' class='w-[20px] h-[20px]'></img>
               <img src='/git.png' class='w-[20px] h-[20px]'></img>
               <img src='/twitter.png' class='w-[20px] h-[20px]'></img>
               <img src='/insta.png' class='w-[20px] h-[20px]'></img>
             </div>
            </div>



            <div class='absolute w-[465px] h-[397px] left-[927px] rounded-r-xl border border-gray-500/40'>
               <p class='absolute font-inter text-gray-500 text-[16px] top-[48px] left-[48px]'>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
               <div class='absolute w-[367px] h-[52px] top-[305px] left-[48px] '>
                 <div class='absolute  w-[367px] h-[52px] pl-3 pr-3 bg-white rounded-2xl flex items-center justify-between'>
                    <p class='font-inter text-[16px] text-gray-300'>Newsletter</p>
                    <p class='font-sora text-gend text-[16px] font-medium'>Sign in</p>
                 </div>
               </div>
            </div>
        </div>
    );
}

export default Footer;