document.addEventListener("DOMContentLoaded", function() {
    const myVideo = document.getElementById('myVideo');
    myVideo.play();
});

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
     target.innerText = Math.floor(progress * (end - start) + start);
     if (progress < 1) {
      window.requestAnimationFrame(step);
     }
    };
    window.requestAnimationFrame(step);
   };

   
   document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#count1", 10, 20, 1500);
    counterAnim("#count2", 1700, 1500, 1500);
    counterAnim("#count3", -50, 12, 1500);
    counterAnim("#count4", 50, 6, 1500);
   });
