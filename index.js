document.addEventListener('DOMContentLoaded', (event) => {
    let pagedata = document.querySelector('.page2');
    let main = document.querySelector('.main');
    let cursor = document.querySelector('.cursor');
    let cursor2 = document.querySelector('.cursor2');

    // Cursor Movement Function
    function cursorMovement() {
        if (pagedata && cursor) {
            pagedata.addEventListener('mousemove', (e) => {
                gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.5,
                });
            });

            pagedata.addEventListener('mouseleave', (e) => {
                gsap.to(cursor, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                });
            });

            pagedata.addEventListener('mouseenter', (e) => {
                gsap.to(cursor, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                });
            });
        }
    }
    cursorMovement();

    // Locomotive Scroll Animation
    function scroll() {
        gsap.registerPlugin(ScrollTrigger);
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".container"),
            smooth: true
        });
        locoScroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(".container", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
        });
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
    }
    scroll();

    // Pera Animation
    function peraAppear() {
        gsap.from(".left-pannel", {
            x: -150,
            stagger: 2,
            duration: 1,
            scrollTrigger: {
                trigger: ".rest",
                scroller: ".container",
                start: "top 47%",
                end: "top 46%",
                scrub: 2,
            }
        });
        gsap.from(".right-pannel", {
            x: 150,
            stagger: 2,
            duration: 1,
            scrollTrigger: {
                trigger: ".rest",
                scroller: ".container",
                start: "top 47%",
                end: "top 46%",
                scrub: 2,
            }
        });
        gsap.from(".pera", {
            y: 120,
            stagger: 5,
            duration: 10,
            scrollTrigger: {
                trigger: ".rest",
                scroller: ".container",
                start: "top 47%",
                end: "top 46%",
                scrub: 2,
            }
        });
    }
    peraAppear();

    //Cursor2 Movement
    function secondCursor() {
        if (pagedata && cursor2) {
            pagedata.addEventListener('mousemove', (e) => {
                gsap.to(cursor2, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.5,
                });
            });

            pagedata.addEventListener('mouseleave', (e) => {
                gsap.to(cursor2, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                });
            });

            pagedata.addEventListener('mouseenter', (e) => {
                gsap.to(cursor2, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                });
            });
        }
    }
    secondCursor();

    //Second Div data
    gsap.from('.text-heading', {
        x: -30,
        stagger: 2,
        duration: 1,
        scrollTrigger: {
            trigger: ".text-content",
            scroller: ".container",
            start: "top 47%",
            end: "top 46%",
            scrub: 2,
        }
    })
    gsap.from(".text-written", {
        y: 20,
        stagger: 2,
        duration: 1,
        scrollTrigger: {
            trigger: ".text-content",
            scroller: ".container",
            start: "top 47%",
            end: "top 46%",
            scrub: 2,
        }
    });
});

let tl = gsap.timeline();
tl.from(".loader h3",{
    x: 40,
    duration: 0.50,
    opacity: 0,
    stagger: 0.5
})

tl.to(".loader h3", {
    x: -10,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
})

tl.to(".loader", {
    display: "none"
})

t1.to(".name", {
    y: -10,
    stagger: 0.5,
    opacity: 0,
    duration: 5
})