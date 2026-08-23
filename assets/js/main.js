gsap.registerPlugin(ScrollTrigger, SplitText);

/* ========================================
   LENIS
======================================== */

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/* ========================================
   TEXT REVEAL
   SCROLL = PROGRESS
======================================== */

/* ========================================
   TEXT REVEAL SYSTEM
======================================== */

document.querySelectorAll(".copy").forEach((copy, copyIndex) => {
    const elements = copy.querySelectorAll("h1, h2, p");

    elements.forEach((element) => {
        const split = SplitText.create(element, {
            type: "lines",
            linesClass: "reveal-line",
        });

        split.lines.forEach((line) => {
            const wrapper = document.createElement("div");
            wrapper.className = "line-wrapper";

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);

            const mask = document.createElement("div");
            mask.className = "reveal-mask";

            wrapper.appendChild(mask);

            gsap.set(line, {
                opacity: 0,
                yPercent: 35,
                filter: "blur(10px)",
            });

            gsap.set(mask, {
                scaleX: 1,
                transformOrigin: "left center",
            });
        });

        const lines = copy.querySelectorAll(".reveal-line");
        const masks = copy.querySelectorAll(".reveal-mask");

        /* ========================================
           FIRST HERO — PLAY ON PAGE ENTER
        ======================================== */

        if (copyIndex === 0) {
            const tl = gsap.timeline({
                delay: 0.4,
            });

            lines.forEach((line, index) => {
                const mask = masks[index];

                const offset = index * 0.12;

                tl.to(
                    mask,
                    {
                        scaleX: 0,
                        duration: 0.75,
                        ease: "power4.inOut",
                    },
                    offset,
                );

                tl.to(
                    line,
                    {
                        opacity: 1,
                        yPercent: 0,
                        filter: "blur(0px)",
                        duration: 0.65,
                        ease: "power3.out",
                    },
                    offset + 0.08,
                );
            });

            return;
        }

        /* ========================================
           OTHER SECTIONS — SCROLL CONTROLLED
        ======================================== */

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: copy,
                start: "top 88%",
                end: "bottom 42%",
                scrub: 1.2,
            },
        });

        lines.forEach((line, index) => {
            const mask = masks[index];

            const offset = index * 0.08;

            tl.to(
                mask,
                {
                    scaleX: 0,
                    duration: 0.65,
                    ease: "power3.inOut",
                },
                offset,
            );

            tl.to(
                line,
                {
                    opacity: 1,
                    yPercent: 0,
                    filter: "blur(0px)",
                    duration: 0.55,
                    ease: "power3.out",
                },
                offset + 0.08,
            );
        });
    });
});

/* ========================================
   IMAGE REVEAL
   EVERYTHING IS SCROLL CONTROLLED
======================================== */

document.querySelectorAll(".image-wrap").forEach((image) => {
    const img = image.querySelector("img");
    const info = image.querySelector(".image-info");
    const caption = image.querySelector(".image-caption");
    const description = image.querySelector(".image-description");

    /*
     * Initial image state
     */

    gsap.set(img, {
        scale: 1.18,
        yPercent: 8,
        filter: "grayscale(100%) contrast(1.2) brightness(0.55)",
    });

    gsap.set(info, {
        y: 40,
        opacity: 0,
    });

    /*
     * Cinematic image timeline
     */

    const imageTl = gsap.timeline({
        scrollTrigger: {
            trigger: image,
            start: "top 90%",
            end: "bottom 15%",
            scrub: 1.4,
        },
    });

    imageTl.to(
        img,
        {
            scale: 1,
            yPercent: -8,
            filter: "grayscale(100%) contrast(1.1) brightness(0.9)",
            ease: "none",
            duration: 1,
        },
        0,
    );

    imageTl.to(
        info,
        {
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
        },
        0.25,
    );

    imageTl.to(
        caption,
        {
            x: 0,
            opacity: 1,
            duration: 0.25,
        },
        0.3,
    );

    imageTl.to(
        description,
        {
            y: 0,
            opacity: 1,
            duration: 0.3,
        },
        0.38,
    );

    /*
     * Reverse automatically when scrolling up.
     */
});

/* ========================================
   IMAGE SCAN LINE
======================================== */

document.querySelectorAll(".image-wrap").forEach((image) => {
    const scan = document.createElement("div");

    scan.className = "image-scan";

    image.appendChild(scan);

    gsap.fromTo(
        scan,
        {
            top: "-10%",
            opacity: 0,
        },
        {
            top: "110%",
            opacity: 1,
            ease: "none",

            scrollTrigger: {
                trigger: image,
                start: "top 90%",
                end: "bottom 15%",
                scrub: 1,
            },
        },
    );
});

/* ========================================
   SECTION NUMBERS
======================================== */

document.querySelectorAll(".section-number").forEach((number) => {
    gsap.fromTo(
        number,
        {
            opacity: 0.15,
            x: -20,
        },
        {
            opacity: 1,
            x: 0,
            ease: "none",

            scrollTrigger: {
                trigger: number.closest("section"),
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
            },
        },
    );
});

/* ========================================
   HERO GLOW
======================================== */

document.querySelectorAll(".hero-glow").forEach((glow) => {
    gsap.to(glow, {
        scale: 1.25,
        xPercent: 8,
        yPercent: -5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });
});

/* ========================================
   RED SIGNAL
======================================== */

const signal = document.createElement("div");

signal.className = "scroll-signal";

document.body.appendChild(signal);

gsap.to(signal, {
    scaleY: 1,
    ease: "none",

    scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 0.2,
    },
});

/* ========================================
   NAV META
======================================== */

const navMeta = document.querySelector(".nav-meta");

ScrollTrigger.create({
    start: 0,
    end: "max",

    onUpdate: (self) => {
        const progress = Math.round(self.progress * 100);

        navMeta.querySelector("span:first-child").textContent =
            `TEXT / ${String(progress).padStart(3, "0")}`;
    },
});

/* ========================================
   ACTIVE SECTION
======================================== */

document.querySelectorAll("section").forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",

        onEnter: () => {
            section.classList.add("is-active");
        },

        onLeave: () => {
            section.classList.remove("is-active");
        },

        onEnterBack: () => {
            section.classList.add("is-active");
        },

        onLeaveBack: () => {
            section.classList.remove("is-active");
        },
    });
});

/* ========================================
   REFRESH
======================================== */

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});
