let initialPath = "M 10 100 Q 500 100 990 100";
let finalPath = "M 10 100 Q 500 100 1990 100";
let string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
    path =`M 10 100 Q ${dets.x} ${dets.y} 1990 100`
    gsap.to("svg path", {
        duration: 0.3,
        attr: { d: path },
        ease: "power3.out",
    })
})

string.addEventListener("mouseleave", (dets) => {
    gsap.to("svg path", {
        duration: 1.5,
        attr: { d: finalPath },
        ease: "elastic.out(1, 0.2)",
    })
})


