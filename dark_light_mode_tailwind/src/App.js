import React from "react";
import "./App.css";
import AppLogic from "./AppLogic";

function App() {
  return (
    <section className=" h-screen flex items-center justify-center px-8 bg-slate-100 dark:bg-black">
      <div class="max-w-[600px] shadow-md p-6 rounded-md dark:bg-slate-600">
        <div class="flex items-start sm:items-center mb-4">
          <h1 class="text-4xl flex-1">Portfolio Website</h1>
          <img alt="ee" class="moon w-7 cursor-pointer" src="./Moon.svg" />
          <img
            alt="ee"
            class="sun w-7 cursor-pointer display-none"
            src="./Sun.svg"
          />
        </div>
        <p class="text-md mb-4 dark:text-white">
          Hi I am Pratik Biswas. Click on the below link to check my portfolio
          website
        </p>
        <a
          href="https://pratikbiswas-2004.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="py-2 px-4 bg-black text-white rounded-md dark:text-cyan-50">
            Learn More!
          </button>
        </a>
      </div>
      <AppLogic />
    </section>
  );
}

export default App;
