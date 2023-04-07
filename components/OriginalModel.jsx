import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Toggle from "./Toggle";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function OriginalModel() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [restoredLoaded, setRestoredLoaded] = useState(true);
  const [sideBySide, setSideBySide] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);
    setOldImage(e.target.prompt.value);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction });
      setPrediction(prediction);
    }
  };
  return (
    <section className="flex flex-col gap-4 pt-5 mt-4" id="originalmodel">
      {/* <form className="mx-[28rem]" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Submit
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
          </div>
          <input
            type="text"
            id="default-search"
            name="prompt"
            className="block font-poppins font-semibold w-full p-3 pl-10 text-base text-[#767575] border border-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter URL of image"
            required
          />
          <button
            type="submit"
            className="text-white font-poppins absolute right-2.5 bottom-2.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Submit
          </button>
        </div>
      </form> */}
      <form onSubmit={handleSubmit} className="mx-auto font-poppins">
        <label
          for="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            name="prompt"
            className="block w-[324px] sm:w-[512px] p-4 pl-10 text-sm text-[#767575] border border-gray-900 rounded-lg bg-gray-50 font-semibold focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Enter URL of image"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Submit
          </button>
        </div>
      </form>

      {error && <div>{error}</div>}
      <div className="mt-8 mb-10 flex flex-col items-center">
        {prediction && (
          <Toggle
            className={`${restoredLoaded ? "visible mb-6" : "invisible"}`}
            sideBySide={sideBySide}
            setSideBySide={(newVal) => setSideBySide(newVal)}
          />
        )}
        {prediction && (
          <div className="flex items-center flex-col">
            <div
              className={`${
                !sideBySide ? "flex flex-col sm:flex-row gap-x-6" : "hidden"
              }`}
            >
              <div className="flex flex-col items-center space-y-4">
                <p className="font-poppins font-medium text-lg">
                  Original Photo
                </p>
                <Image src={oldImage} width={280} height={280} alt="input" />
              </div>

              {prediction.output && (
                <div className="flex flex-col items-center space-y-4">
                  <p className="font-poppins font-medium text-lg">
                    Restored Photo
                  </p>
                  <Image
                    src={prediction.output}
                    width={280}
                    height={280}
                    alt="output"
                  />
                </div>
              )}
            </div>
            {/* Second */}
            <div
              className={`${sideBySide ? "flex flex-row gap-x-6" : "hidden"}`}
            >
              {prediction.output && (
                <div className="flex flex-col items-center space-y-4 w-96">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage src={oldImage} alt="Image one" />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={prediction.output}
                        alt="Image two"
                      />
                    }
                  />
                </div>
              )}
            </div>
            {/* Second-end */}
            <div className="text-black text-lg mt-4 font-medium font-poppins">
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold">
                Status:{" "}
              </span>
              {prediction.status}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default OriginalModel;
