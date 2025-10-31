gsap.to(".page1 #box", {
    scale:1,
    delay:1,
    duration:2,
    rotation:360,
    scrollTrigger: {
        trigger: ".page1 #box",
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2,
        markers: true,
        // pin: true,
    }
})

gsap.to(".page2 h1", {
    opacity:0,
    x:500,
    duration:2,
    // scrollTrigger: ".page2 #box"
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: "body",
        start: "top 50%",
        end: "top 10%",
        markers: true,
        scrub: 2,
    }
})

gsap.from (".page2 h2", {
    opacity:0,
    x:-500,
    duration:2,
    scrollTrigger: {
        trigger: ".page2 h2",
        scroller: "body",
        start: "top 50%",
        // end: "top 10%",
        markers: true,
        scrub: 2,
    }
})

gsap.from(".page3 #box", {
    scale:3,
    duration:2,
    rotation:720,
    borderRadius: "50%",
    scrollTrigger: {
        trigger: ".page3 #box",
        scroller: "body",
        start: "top 30%",
        end: "top 10%",
        scrub: 2,
        markers: true,
    }
})

gsap.to(".page4 p", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
         end: "bottom 150%",
        scrub: 2,
        pin: true,
    }
})