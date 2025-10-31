let initialPath = "M 10 100 Q 500 100 990 100";
let finalPath = "M 10 100 Q 500 100 990 100";
let string = document.querySelector("#string");

string.addEventListener("mouseenter", (dets) => {
    path =`M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to("svg path", {
        duration: 0.5,
        attr: { d: path },
        ease: "power3.out",
    })
})

string.addEventListener("mouseleave", (dets) => {
    gsap.to("svg path", {
        duration: 0.5,
        attr: { d: finalPath },
        ease: "power3.out",
    })
})


