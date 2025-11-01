let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#imgae")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.3,
        ease: "power3.out",
    })
})

image.addEventListener("mouseenter", function(){
    cursor.innerHTML="view more"
    gsap.to(cursor, {
        scale: 3,
        backgroundColor: "rgba(243, 238, 238, 0.4)",
        borderWidth: "0px",
        duration: 0.5,
        ease: "power3.out",
    })
})

image.addEventListener("mouseleave", function(){
    cursor.innerHTML=""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
        borderWidth: "2px",
        duration: 0.5,
        ease: "power3.out",
    })
})