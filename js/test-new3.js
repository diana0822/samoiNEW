gsap.registerPlugin(ScrollTrigger);

let timeLine_servicesALL = new gsap.timeline({
    scrollTrigger: {
        trigger: "#servicesALL",
        yoyo: true,
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "100%", // end after scrolling 500px beyond the start
        scrub: true,
        /*markers: true,
        id: "no22",*/
    },
});

let timeLine_ServicesDetail = new gsap.timeline({
    scrollTrigger: {
        trigger: "#servicesALL",
        yoyo: true,
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "100%", // end after scrolling 500px beyond the start
        scrub: true,
        /*markers: true,
        id: "p",*/
    },
});
timeLine_ServicesDetail
    .to("#ServicesDetail", { y: -800 });

var screenWidth = screen.width;
var screenHeight = screen.height;

// Get the browser window size
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// Get the size of the entire webpage
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;