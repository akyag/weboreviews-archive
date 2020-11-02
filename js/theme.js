    // Select the button
    const toggle = document.querySelector(".theme-toggle");
    // Select the theme preference from localStorage
    const currentTheme = localStorage.getItem("theme");

    // If the current theme in localStorage is "dark"...
    if (currentTheme == "dark") {
      // ...then use the .dark-theme class
      var root = document.documentElement;
      root.classList.add("dark-mode");
    }

    // Listen for a click on the button 
    toggle.addEventListener("click", function () {
      // Toggle the .dark-theme class on each click
      var root = document.documentElement;
      root.classList.toggle("dark-mode");

      // Let's say the theme is equal to light
      let theme = "light";
      // If the body contains the .dark-theme class...
      if (root.classList.contains("dark-mode")) {
        // ...then let's make the theme dark
        theme = "dark";
      }
      // Then save the choice in localStorage
      localStorage.setItem("theme", theme);
    });