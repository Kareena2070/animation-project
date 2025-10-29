gsap.to("#box1", {
    x: 1600, 
    duration: 2, 
    rotation: 360, 
    delay: 1,
    repeat: -1, // infinite time animation run
    yoyo: true, // animation will reverse on every alternate cycle
});

gsap.to("#box2", {
    duration: 2, 
    x: 1700, 
    rotation: 360, 
    delay:3,
    backgroundColor: "lightblue",
    borderRadius: "20%"
});

gsap.to("#box3", {
    duration: 2, 
    x: 1900, 
    rotation: 360, 
    delay: 5,
    borderRadius: "50%",
    scale:2  // size will increase
});

gsap.from("#box4", {
    duration: 2, //how much time it run
    x: 1900, 
    rotation: 360, 
    delay: 5, //after how many second it start
    borderRadius: "50%",
    scale:2
});


gsap.from("h1", {
    duration: 2,
    y: 200,
    opacity: 0,
    stagger: 1,
});

gsap.from("p", {
    color: "red",
    opacity: 0,
    duration: 2,
    delay: 5,
    repeat: -1,
    yoyo: true
});