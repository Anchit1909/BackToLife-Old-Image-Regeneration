import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function Proof() {
  return (
    <section className="bg-white dark:bg-gray-900 flex flex-col">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col items-center">
        <h2 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          Why{" "}
          <span className="text-blue-600 dark:text-blue-500">BackToLife</span>{" "}
          is the best choice
        </h2>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Watch the results from some of our previous renders and be amazed by
          the result!
        </p>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="max-w-[19rem]">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src="/i3.png" alt="Image one" />
              }
              itemTwo={
                <ReactCompareSliderImage src="/o3.png" alt="Image two" />
              }
            />
          </div>
          <div className="max-w-xs">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src="/i2.png" alt="Image one" />
              }
              itemTwo={
                <ReactCompareSliderImage src="/o2.png" alt="Image two" />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proof;
