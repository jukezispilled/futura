import Trusted from "./Trusted";
import Globe from "./components/magicui/globe";

function About() {

    return (
        <div>
            <div><div className="h-min w-screen grid overflow-clip">
                <div className="flex justify-center font-custom">
                    <div className="mt-[170px]">
                        <div className="text-[115px] lg:text-[128px] leading-[.9] tracking-tight font-custom text-center">Elevating your <span className="block">online presence</span></div>
                        <div className="mt-6 text-[16px] font-custom1 text-center md:px-[25%] text-gray-600 text-balance">Dominate your digital side utilizing our perfect mix of creativity and modern tools</div>
                    </div>
                </div>
                <Globe /></div>
            </div>
            <Trusted />
            <section class="bg-white dark:bg-gray-900 py-[10%]">
                <div class="container px-[10%] py-10 mx-auto">
                    <div class="">
                        <div class="">
                            <h1 class="text-4xl font-semibold text-black capitalize md:text-5xl dark:text-white font-custom">Meet the Team</h1>
                        </div>

                        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                            <div>
                                <img class="object-cover rounded-xl aspect-square w-[30vw]" src="/jack.png" alt="Jack Anderson"></img>
                                <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-white font-custom">Jack Anderson</h1>
                                <p class="mt-.5 text-black capitalize dark:text-gray-300 font-custom1">Co-Founder, Full stack developer</p>
                                <p class="mt-.5 text-black dark:text-gray-300 font-custom2 text-sm">With a love for product and pushing boundaries, Jack has helped countless businesses and passion projects reach their full potential</p>
                            </div>

                            <div>
                                <img class="object-cover rounded-xl aspect-square w-[30vw]" src="/wyatt.png" alt="Wyatt Barnard"></img>
                                <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-white font-custom">Wyatt Barnard</h1>
                                <p class="mt-.5 text-black capitalize dark:text-gray-300 font-custom1">Co-Founder, Ads Expert</p>
                                <p class="mt-.5 text-black dark:text-gray-300 font-custom2 text-sm">An optimist at heart with a modern skillset, Wyatt helps businesses scale like never before with modern and efficient tools</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-white h-min w-screen border-y border-slate-200">
                <div className="flex items-start text-[30px] leading-none md:text-4xl lg:h-auto font-custom mx-12 my-3">
                    <div className="flex flex-wrap justify-center items-start text-center my-6 w-1/3">
                        <div className="grid text-left px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mb-2 bg-slate-100 border rounded-lg p-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                            Creativity
                            <div className="mt-1 text-lg font-custom2">Using a mix of creative thinking and rich tools we bring your vision to reality</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-start text-center border-l border-r border-gray-200 w-1/3 my-6">
                        <div className="grid text-left px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mb-2 bg-slate-100 border rounded-lg p-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg>
                            Quality
                            <div className="mt-1 text-lg font-custom2">We use proven methods to uphold industry-leading quality while still pushing boundaries</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-start text-center w-1/3 my-6">
                        <div className="grid text-left px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mb-2 bg-slate-100 border rounded-lg p-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                            </svg>
                            Technology
                            <div className="mt-1 text-lg font-custom2">We utilize the most modern tooling to put you lightyears ahead of the competition</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-min py-[10%] w-screen flex justify-center items-center">
                <div className="grid">
                    <div className="text-6xl md:text-8xl font-semibold text-left font-custom px-[15%]">Our Drive</div>
                    <div className="text-left px-[15%] mt-[2%] text-3xl font-custom2">
                        Steve Jobs once said, “The people who are crazy enough to think they can change the world are the ones who do.” Futura was built for these visionaries—the ones chasing tomorrow, the ones who refuse to settle for the ordinary.
                    <br /><br />
                        Achieving greatness is no small feat. It’s almost always accomplished by a team of dedicated individuals, not just one person. We want to join your team. From what we do to how we do it, we are pushing limits to help you dominate your digital presence.
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default About;