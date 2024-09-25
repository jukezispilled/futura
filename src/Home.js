import React from 'react';

function Home() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className="mt-[3.5%] leading-[.8] z-10 text-[180px] tracking-tight font-custom font-semibold text-center text-balance xl:px-[30%]">
        Not Your Average Agency
        <div className="flex justify-center mt-1">
          {/* Added flexbox container */}
          <a
            className="pt-[4%] rounded-full text-2xl w-min flex justify-center"
            href="/scheduleacall"
          >
            <div className="tracking-tight font-custom1 bg-black py-3 px-4 hover:scale-[105%] transition ease-in-out duration-200 w-min whitespace-nowrap rounded-full text-white flex justify-center">
                Let's Talk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-full flex align-middle w-7 ml-1 pb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25Z"
                  />
                </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

/*
            <div className="tracking-tight font-custom1 bg-black py-3 px-4 hover:scale-[105%] transition ease-in-out duration-200 w-min whitespace-nowrap rounded-full text-white flex justify-center">
                Let's Talk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-full flex align-middle w-7 ml-1 pb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25Z"
                  />
                </svg>
            </div>
*/