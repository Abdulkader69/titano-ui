import Head from 'next/head';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 4,
    label: 'one Week',
  },
  {
    value: 20,
    label: 'Four Weeks',
  },
  {
    value: 45,
    label: 'Two Months',
  },
  {
    value: 100,
    label: 'Four Months',
  },
];

function valuetext(value) {
    return `${value}°C`;
  }

const Calculator = () => {
  return (
    <div className="site-container relative z-10">
      <Head>
        <title>Sphere Finance | The S&P 500 of Crypto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-siteContainer m-auto px-4">
        <div className="calculator py-8 lg:py-16 flex gap-[30px] flex-col lg:flex-row text-white max-w-[400px] lg:max-w-full my-0 mx-auto">
          <div className="calculator-column flex-none py-5 w-full lg:w-[calc(50%-15px)]">
            <h1 className="text-xl sm:text-2xl text-white font-extrabold leading-8 mb-8">
              Estimated Inputs
            </h1>
            <div className="calculator-container p-[45px] lg:grid grid-cols-2 gap-y-8 gap-x-10 bg-[rgba(4,7,31,.6)] border-[1px] border-solid border-[hsla(0,0%,100%,.07)] rounded-[20px] shadow-[0_8px_12px_0px_rgba(0,0,0,0.3)] min-h-[200px] overflow-visible w-full">
              <div className="calculator-field">
                <div className="sphereInput w-full flex flex-col gap-2.5">
                  <label
                    htmlFor="placeholder"
                    className="sphereInput-info text-sm text-[#a7c9ee] font-normal whitespace-nowrap"
                  >
                    SPHERE Amount
                  </label>
                  <div className="sphereInput-field w-full min-h-[40px] bg-transparent relative cursor-pointer flex flex-row items-center justify-between	max-w-full h-fit">
                    <input
                      className="input w-full min-h-[40px] py-[7px] px-[15px] outline-[0px] rounded-[5px] bg-[hsla(0,0%,100%,.1)] border-[1px] border-solid border-transparent duration-[.4s] text-white text-base appearance-none"
                      type="number"
                      placeholder="0"
                    />
                    <button className="btn sphereInput-max text-[hsla(0,0%,100%,.6)] absolute right-0 cursor-pointer m-0 p-0 border-none bg-transparent outline-[0px] text-[11px] leading-[15px] text-center uppercase">
                      Max
                    </button>
                  </div>
                  <div className="sphereInput-note text-[hsla(0,0%,100%,.6)] mt-2.5 font-normal text-xs text-right"></div>
                </div>
              </div>
              <div className="calculator-field">
                <div className="sphereInput w-full flex flex-col gap-2.5">
                  <label
                    htmlFor="placeholder"
                    className="sphereInput-info text-sm text-[#a7c9ee] font-normal whitespace-nowrap"
                  >
                    APY
                  </label>
                  <div className="sphereInput-field w-full min-h-[40px] bg-transparent relative cursor-pointer flex flex-row items-center justify-between	max-w-full h-fit">
                    <input
                      className="input w-full min-h-[40px] py-[7px] px-[15px] outline-[0px] rounded-[5px] bg-[hsla(0,0%,100%,.1)] border-[1px] border-solid border-transparent duration-[.4s] text-white text-base appearance-none"
                      type="number"
                      placeholder="99900"
                    />
                    <button className="btn sphereInput-max text-[hsla(0,0%,100%,.6)] absolute right-0 cursor-pointer m-0 p-0 border-none bg-transparent outline-[0px] text-[11px] leading-[15px] text-center uppercase">
                      Current
                    </button>
                  </div>
                  <div className="sphereInput-note text-[hsla(0,0%,100%,.6)] mt-2.5 font-normal text-xs text-right"></div>
                </div>
              </div>
              <div className="calculator-field">
                <div className="sphereInput w-full flex flex-col gap-2.5">
                  <label
                    htmlFor="placeholder"
                    className="sphereInput-info text-sm text-[#a7c9ee] font-normal whitespace-nowrap"
                  >
                    SPHERE Price at Purchase($)
                  </label>
                  <div className="sphereInput-field w-full min-h-[40px] bg-transparent relative cursor-pointer flex flex-row items-center justify-between	max-w-full h-fit">
                    <input
                      className="input w-full min-h-[40px] py-[7px] px-[15px] outline-[0px] rounded-[5px] bg-[hsla(0,0%,100%,.1)] border-[1px] border-solid border-transparent duration-[.4s] text-white text-base appearance-none"
                      type="number"
                      placeholder="0.023421"
                    />
                    <button className="btn sphereInput-max text-[hsla(0,0%,100%,.6)] absolute right-0 cursor-pointer m-0 p-0 border-none bg-transparent outline-[0px] text-[11px] leading-[15px] text-center uppercase">
                      Current
                    </button>
                  </div>
                  <div className="sphereInput-note text-[hsla(0,0%,100%,.6)] mt-2.5 font-normal text-xs text-right"></div>
                </div>
              </div>
              <div className="calculator-field">
                <div className="sphereInput w-full flex flex-col gap-2.5">
                  <label
                    htmlFor="placeholder"
                    className="sphereInput-info text-sm text-[#a7c9ee] font-normal whitespace-nowrap"
                  >
                    Future SPHERE Price($)
                  </label>
                  <div className="sphereInput-field w-full min-h-[40px] bg-transparent relative cursor-pointer flex flex-row items-center justify-between	max-w-full h-fit">
                    <input
                      className="input w-full min-h-[40px] py-[7px] px-[15px] outline-[0px] rounded-[5px] bg-[hsla(0,0%,100%,.1)] border-[1px] border-solid border-transparent duration-[.4s] text-white text-base appearance-none"
                      type="number"
                      placeholder="0.023421"
                    />
                    <button className="btn sphereInput-max text-[hsla(0,0%,100%,.6)] absolute right-0 cursor-pointer m-0 p-0 border-none bg-transparent outline-[0px] text-[11px] leading-[15px] text-center uppercase">
                      Current
                    </button>
                  </div>
                  <div className="sphereInput-note text-[hsla(0,0%,100%,.6)] mt-2.5 font-normal text-xs text-right"></div>
                </div>
              </div>
              <div className="calculator-full-field col-[1_/_span_2]">
                <label
                  htmlFor="smth"
                  className="text-[hsla(0,0%,100%,.6)] text-sm font-normal tracking-normal leading-[19px]"
                >
                  Staking duration
                </label>
                <Box sx={{ width: 300 }}>
                  <Slider
                    aria-label="Custom marks"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className="calculator-column flex-none py-5 w-full lg:w-[calc(50%-15px)]">
            <h1 className="text-xl sm:text-2xl text-white font-extrabold leading-8 mb-8">
              Estimated Returns
            </h1>
            <div className="calculator-returns grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-8 h-[calc(100%-56px)]">
              <div className="spherebox spherebox-bordered bg-[rgba(4,7,31,.6)] border-[1px] border-solid border-[hsla(0,0%,100%,.07)] rounded-[20px] shadow-[0_8px_12px_0px_rgba(0,0,0,0.3)] flex justify-center items-center flex-col text-center min-h-[132px]">
                <h6 className="spherebox-text text-[13px] text-[#a7c9ee] font-normal px-5 w-full">
                  YOUR INITIAL INVESTMENT
                </h6>
                <h3 className="spherebox-value text-xl sm:text-2xl text-white font-extrabold px-5 pt-2 pb-[3px] w-full">
                  0.0000
                </h3>
                <p className="spherebox-text"></p>
              </div>
              <div className="spherebox spherebox-bordered bg-[rgba(4,7,31,.6)] border-[1px] border-solid border-[hsla(0,0%,100%,.07)] rounded-[20px] shadow-[0_8px_12px_0px_rgba(0,0,0,0.3)] flex justify-center items-center flex-col text-center min-h-[132px]">
                <h6 className="spherebox-text text-[13px] text-[#a7c9ee] font-normal px-5 w-full">
                  YOUR CURRENT WEALTH
                </h6>
                <h3 className="spherebox-value text-xl sm:text-2xl text-white font-extrabold px-5 pt-2 pb-[3px] w-full">
                  $0
                </h3>
                <p className="spherebox-text"></p>
              </div>
              <div className="spherebox spherebox-bordered bg-[rgba(4,7,31,.6)] border-[1px] border-solid border-[hsla(0,0%,100%,.07)] rounded-[20px] shadow-[0_8px_12px_0px_rgba(0,0,0,0.3)] flex justify-center items-center flex-col text-center min-h-[132px]">
                <h6 className="spherebox-text text-[13px] text-[#a7c9ee] font-normal px-5 w-full">
                  SPHERE REWARDS EST.
                </h6>
                <h3 className="spherebox-value text-xl sm:text-2xl text-white font-extrabold px-5 pt-2 pb-[3px] w-full">
                  0 SPHERE
                </h3>
                <p className="spherebox-text"></p>
              </div>
              <div className="spherebox spherebox-bordered bg-[rgba(4,7,31,.6)] border-[1px] border-solid border-[hsla(0,0%,100%,.07)] rounded-[20px] shadow-[0_8px_12px_0px_rgba(0,0,0,0.3)] flex justify-center items-center flex-col text-center min-h-[132px]">
                <h6 className="spherebox-text text-[13px] text-[#a7c9ee] font-normal px-5 w-full">
                  POTENTIAL RETURN
                </h6>
                <h3 className="spherebox-value text-xl sm:text-2xl text-white font-extrabold px-5 pt-2 pb-[3px] w-full">
                  $0
                </h3>
                <p className="spherebox-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
