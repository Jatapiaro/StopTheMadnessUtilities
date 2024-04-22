document.addEventListener("DOMContentLoaded", () => {
  //Function definition
  function removePromotedTweets() {
    const target = "M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"
    const svgs = document.querySelectorAll('svg > g > path');
    svgs.forEach((svg) => {
      const dValue = svg.getAttribute("d");
      if (dValue !== target) {
        return;
      }

      const elementToHide = svg.closest("article");
      elementToHide.style.display = "none";
    });
  }

  setInterval(function () {
    removePromotedTweets();
  }, 1000);
});
