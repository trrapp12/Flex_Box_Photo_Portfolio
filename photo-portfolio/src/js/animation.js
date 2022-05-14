(() => {
  console.log("animation sequence loaded");
  window.addEventListener('DOMContentLoaded', function() {
    let cycleCount = 10;

    const screen = document.getElementById('screen');

    const all = document.getElementById('triangle1');
    const china = document.getElementById('triangle2');
    const paris = document.getElementById('triangle3');
    const elSalvador = document.getElementById('triangle4');
    const spain = document.getElementById('triangle5');
    const us = document.getElementById('triangle6');

    let collect = [all, china, paris, elSalvador, spain, us];

    let setAnimation = function(collect, screen) {
      console.log("setAnimation ran")
      let count = 0;
      for (let i = 0; i < collect.length; i++) {
        setTimeout((element) => {
          count++;
          console.log(count);
          collect[i].classList.add("animation"+count);
         }, i * 250)
       }
    }

   let resetAnimation = function(collect, screen) {
      console.log("resetAnimation fired.  collect is " + collect)
      let count = 0;
      for (let i = 0; i < collect.length; i++) {
        setTimeout((element) => {
          count++;
          console.log(count);
          collect[i].classList.remove("animation"+count);
         }, i * 250)
       }
    }

    function setFiringOrder (setAnimation, resetAnimation) {
      setAnimation(collect, screen);
      const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
      wait(3000).then(() => resetAnimation(collect, screen)).catch(failureCallback);
    }

      setFiringOrder(setAnimation, resetAnimation);
  })
})();
