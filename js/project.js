gsap.registerPlugin(ScrollTrigger);

/*ScrollTrigger.create({
    trigger: "#vedio",
    start: "top top",
    pin: true,
    pinSpacing: false,
});*/

/*let timeLine_ProjectDetail = new gsap.timeline({
    scrollTrigger: {
        trigger: "#ProjectDetail",
        yoyo: true,
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "100%", // end after scrolling 500px beyond the start
        scrub: true,
        markers: true,
        id: "p",
    },
});*/



/*timeLine_ProjectDetailAll
    .fromTo("#ProjectDetailAll", { backgroundColor: "rgba(25, 19, 17, 0)" }, { backgroundColor: "rgba(25, 19, 17, 1)" });
*/

ScrollTrigger.create({
    trigger: "#vedio",
    start: "top top",
    pin: true,
    pinSpacing: false,
});

// set GSAP Timeline with Pin
let timeLine_ProjectDetailAll = new gsap.timeline({
    scrollTrigger: {
        trigger: ".vediovedio",
        yoyo: true,
        pin: true, // pin the trigger element while active
        start: "bottom bottom", // when the top of the trigger hits the top of the viewport
        end: "100%", // end after scrolling 500px beyond the start
        scrub: true,
        /* markers: true,
         id: "ProjectDetailBox",*/
    },
});

let timeLine_ProjectDetail = new gsap.timeline({
    scrollTrigger: {
        trigger: "#ProjectDetailAll",
        yoyo: true,
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "0%", // end after scrolling 500px beyond the start
        scrub: true,
        /*markers: true,
        id: "p",*/
    },
});

/*timeLine_ProjectDetail
//.fromTo("#ProjectDetailAll", { backgroundColor: "rgba(25, 19, 17, 0)" }, { backgroundColor: "rgba(25, 19, 17, 0)" })
    .fromTo(".cover-box", { backgroundColor: "rgba(25, 19, 17, 0)" }, { backgroundColor: "rgba(25, 19, 17, 1)" })
*/
timeLine_ProjectDetailAll
//.fromTo("#ProjectDetailAll", { backgroundColor: "rgba(25, 19, 17, 0)" }, { backgroundColor: "rgba(25, 19, 17, 0)" })
    .to(".project-detail-box", { display: "block" })
    .fromTo("#ProjectDetailAll", { backgroundColor: "rgba(25, 19, 17, 0)" }, { backgroundColor: "rgba(25, 19, 17, 1)" });