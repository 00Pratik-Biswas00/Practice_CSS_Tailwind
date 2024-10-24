import { React, useEffect } from "react";

const AppLogic = () => {
  useEffect(() => {
    const themeSwitch = () => {
      const sunIcon = document.querySelector(".sun");
      const moonIcon = document.querySelector(".moon");

      if (!sunIcon || !moonIcon) return; // Check if elements are found

      const userTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const iconToggle = () => {
        moonIcon.classList.toggle("display-none");
        sunIcon.classList.toggle("display-none");
      };

      const themeCheck = () => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
          document.documentElement.classList.add("dark");
          moonIcon.classList.add("display-none");
          return;
        }
        sunIcon.classList.add("display-none");
      };

      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconToggle();
      }

      sunIcon.addEventListener("click", themeSwitch);
      moonIcon.addEventListener("click", themeSwitch);

      themeCheck();

      return () => {
        sunIcon.removeEventListener("click", themeSwitch);
        moonIcon.removeEventListener("click", themeSwitch);
      };
    };

    themeSwitch();
  }, []);

  return null;
};

export default AppLogic;
