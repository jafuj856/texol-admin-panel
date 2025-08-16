import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#191919]  w-full mt-auto pt-[47px] px-[25px] md:px-[45px] lg:px-[75px] text-white capitalize">
      <div className="grid grid-cols-4 w-full gap-[30px] md:gap-5">
        {/* 11111111 */}
        <div className="w-full md:col-span-2 col-span-4 ">
          <div className="flex items-center gap-[14px]">
            <svg
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.74265"
                y="3.62741"
                width="53.0571"
                height="53.0571"
                stroke="#C29D5E"
                stroke-width="3.68452"
              />
              <line
                x1="12.8755"
                y1="25.5469"
                x2="12.8755"
                y2="55.023"
                stroke="#C29D5E"
                stroke-width="3.68452"
              />
              <line
                x1="46.2212"
                y1="25.1797"
                x2="46.2212"
                y2="55.0243"
                stroke="#C29D5E"
                stroke-width="3.68452"
              />
              <line
                x1="21.9028"
                y1="19.4687"
                x2="21.9028"
                y2="55.0243"
                stroke="#C29D5E"
                stroke-width="3.68452"
              />
              <line
                x1="36.6411"
                y1="17.9922"
                x2="36.6411"
                y2="55.0216"
                stroke="#C29D5E"
                stroke-width="3.68452"
              />
              <path
                d="M1.22431 27.2075L1.2243 27.2077C1.20549 27.5519 1.46191 27.8539 1.79827 27.8833L1.7986 27.8833C8.18521 28.4528 14.7815 26.7136 20.2278 22.5334L20.2281 22.5331C25.6743 18.3529 29.0588 12.4292 30.1602 6.11273L1.22431 27.2075ZM1.22431 27.2075L1.29944 25.8053M1.22431 27.2075L1.29944 25.8053M29.6557 5.38309C29.9939 5.45491 30.2179 5.78045 30.1602 6.11263L29.6557 5.38309ZM29.6557 5.38309C29.6556 5.38309 29.6556 5.38309 29.6556 5.38308L28.2819 5.09315C28.2818 5.09314 28.2817 5.09312 28.2816 5.0931C27.9326 5.02014 27.5957 5.24561 27.5347 5.59018C26.5292 11.2952 23.5141 16.6201 18.5902 20.3994C13.6663 24.1787 7.74271 25.7144 1.9728 25.212M29.6557 5.38309L1.9728 25.212M1.9728 25.212C1.62407 25.1818 1.3191 25.449 1.29944 25.8053M1.9728 25.212L1.29944 25.8053"
                fill="#C29D5E"
                stroke="#C29D5E"
                stroke-width="0.387933"
              />
              <path
                d="M30.0291 5.4904L30.0289 5.49045C29.6963 5.56677 29.4688 5.89563 29.5202 6.2227L29.5203 6.22303C30.4858 12.4331 33.689 18.2112 38.9336 22.2344L38.9339 22.2346C44.1784 26.2577 50.5903 27.8533 56.8383 27.1771C57.167 27.1412 57.4258 26.8377 57.4141 26.4956L57.3651 25.114C57.3523 24.7664 57.0646 24.5149 56.7295 24.5503C51.0818 25.1511 45.3187 23.7423 40.5709 20.1003C35.8232 16.4582 32.9696 11.2568 32.0855 5.64764C32.033 5.31484 31.7157 5.10217 31.3767 5.17961L30.0291 5.4904ZM30.0291 5.4904L31.3764 5.17968L30.0291 5.4904Z"
                fill="#C29D5E"
                stroke="#C29D5E"
                stroke-width="0.387933"
              />
              <path
                d="M21.9401 5.16717L21.9397 5.16709L20.5615 4.88208C20.5614 4.88207 20.5614 4.88207 20.5614 4.88207C20.208 4.8091 19.866 5.04227 19.8043 5.39702C19.1324 9.34097 17.0541 13.0382 13.6559 15.6465C10.2606 18.2525 6.128 19.3268 2.16773 18.9427C1.80932 18.908 1.49337 19.1792 1.47251 19.5396L1.47251 19.5396L1.39111 20.9392C1.37115 21.2854 1.63076 21.5824 1.98195 21.616L21.9401 5.16717ZM21.9401 5.16717C22.2781 5.23629 22.4991 5.5646 22.4407 5.91267L21.9401 5.16717Z"
                fill="#C29D5E"
                stroke="#C29D5E"
                stroke-width="0.387933"
              />
              <path
                d="M57.0738 19.3666L57.0737 19.3662L56.9131 17.968C56.9131 17.968 56.9131 17.968 56.9131 17.968C56.8718 17.6095 56.5433 17.3576 56.187 17.41C52.2309 18.0062 48.069 17.1893 44.5283 14.7781C40.9906 12.3689 38.6769 8.78007 37.8024 4.89853C37.7232 4.54725 37.3667 4.33205 37.0179 4.42503L37.0178 4.42504L35.6631 4.78574C35.3281 4.8751 35.1272 5.21464 35.2052 5.5587L57.0738 19.3666ZM57.0738 19.3666C57.1139 19.7093 56.8712 20.0219 56.5224 20.0754L57.0738 19.3666Z"
                fill="#C29D5E"
                stroke="#C29D5E"
                stroke-width="0.387933"
              />
              <path
                d="M13.9063 5.59031L13.9063 5.59041C13.512 8.3672 12.1258 10.9465 9.75513 12.7661L9.75478 12.7664C7.38429 14.5858 4.53421 15.258 1.75232 14.9192L1.75208 14.9192C1.4176 14.8789 1.16542 14.5781 1.18232 14.2398L1.18233 14.2395L1.25115 12.8268C1.26918 12.4641 1.59166 12.2035 1.964 12.2549L1.96424 12.2549C4.09806 12.547 6.30648 12.0224 8.11846 10.6316C9.93043 9.24084 11.0084 7.24303 11.2778 5.10636L11.2778 5.10615C11.3245 4.73256 11.6591 4.48818 12.0142 4.56532L12.0144 4.56536L13.3969 4.86416C13.7295 4.93638 13.9538 5.25696 13.9063 5.59031Z"
                fill="#C29D5E"
                stroke="#C29D5E"
                stroke-width="0.387933"
              />
              <path
                d="M54.4202 12.3664L54.4203 12.3664C54.7532 12.3296 54.9997 12.0362 54.9802 11.6996L54.4202 12.3664ZM54.4202 12.3664C51.6362 12.6756 48.7752 11.9791 46.3822 10.1435L46.3819 10.1432C43.9891 8.30766 42.5751 5.72468 42.1548 2.95755L42.1547 2.95731C42.104 2.62605 42.3247 2.31111 42.6534 2.24383L42.6537 2.24378L44.0347 1.95938L54.4202 12.3664ZM54.8971 10.2919L54.9802 11.6995L44.0349 1.95934C44.3905 1.8866 44.7311 2.13475 44.7817 2.50804L44.7818 2.50828C45.0731 4.63881 46.172 6.63738 47.9986 8.03857C49.8251 9.43975 52.0403 9.98344 54.1734 9.71273L54.1736 9.71271C54.548 9.66478 54.8761 9.929 54.8971 10.2917L54.8971 10.2919Z"
                fill="#C29D5E"
                stroke="#C29D5E"
                stroke-width="0.387933"
              />
            </svg>
            <h1 className="uppercase font-[700] font-inter text-[17px]">
              ADAM CURTAINS
            </h1>
          </div>
          <p className="opacity-70 text-[16px] md:text-[20px] font-urbanist font-[200] mt-[32px]">
            Jaseela junction, 2nd Floor Sigma electronics,
            <br /> Manjeri, 676521
          </p>
        </div>
        {/* 22222222222 */}
        <div className="w-full col-span-2 md:col-span-1 ">
          <h1 className="font-[700] font-inter text-[17px]">Information</h1>
          <div className="mt-[15px] md:mt-[32px] flex flex-col gap-[15px]">
            <p className="opacity-70 text-[16px] md:text-[20px] font-urbanist font-[200] ">
              Blog
            </p>
            <p
              onClick={() => navigate("/terms")}
              className="opacity-70 cursor-pointer text-[16px] md:text-[20px] font-urbanist font-[200] "
            >
              Terms & Conditions
            </p>
            <p
              onClick={() => navigate("/privacy")}
              className="opacity-70 cursor-pointer text-[16px] md:text-[20px] font-urbanist font-[200] "
            >
              Privacy Policy
            </p>
          </div>
        </div>
        {/* 33333333333 */}
        <div className="w-full col-span-2 md:col-span-1 ">
          <h1 className="font-[700] font-inter text-[17px]">Contact</h1>
          <div className="mt-[15px] md:mt-[32px] flex flex-col gap-[15px]">
            <p className="opacity-70 text-[16px] md:text-[20px] font-urbanist font-[200] ">
              adam12@gmail
            </p>

            <p className="opacity-70 text-[16px] md:text-[20px] font-urbanist font-[200] ">
              +91 7994288796
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[#4C4C4C] mt-[50px] md:mt-[70px] w-full py-[20px]">
        <div className="flex items-center gap-2">
          <button>
            <img
              src="/fb.png"
              className="w-[27px] h-[27px] md:w-[40px] md:h-[40px]"
              alt=""
            />
          </button>
          <button>
            <img
              src="/twi.png"
              className="w-[27px] h-[27px] md:w-[40px] md:h-[40px]"
              alt=""
            />
          </button>
          <button>
            <img
              src="/insta.png"
              className="w-[27px] h-[27px] md:w-[40px] md:h-[40px]"
              alt=""
            />
          </button>
          <button>
            <img
              src="/u.png"
              className="w-[27px] h-[27px] md:w-[40px] md:h-[40px]"
              alt=""
            />
          </button>
        </div>
        <p className="text-[9.5px] md:text-[17px] font-urbanist font-[100] opacity-60">
          Adam Curtains <span className="text-commonColor">©</span> 2024, All
          Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer
