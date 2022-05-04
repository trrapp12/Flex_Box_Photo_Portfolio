(() => {
  window.addEventListener('DOMContentLoaded', function () {

    // create options to pass in as parameters
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }
    // create callback
    function visibililtyCallCack (entries, observer) {
      console.log("call back called")
      entries.forEach(entry => {
        console.log("entry is " + entry)
        if (entry.isIntersecting) {
          console.log(`entry target src is ${entry.target.src} and dataset src is ${entry.target.dataset.src}`)
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.remove('lazy');
            observer.unobserve(entry.target);
        } else {
          console.log('nothing happened')
        }
      });
    };

    let observer = new IntersectionObserver(visibililtyCallCack, options);
    // create new InstersectionObserver instance

    // create target
    document.querySelectorAll('.lazy').forEach(element => {observer.observe(element); });

  })
})();
