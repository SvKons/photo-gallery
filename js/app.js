gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
});

let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');

itemsL.forEach(item => {
    gsap.fromTo(
        item,
        { opacity: 0, x: -90 },
        {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
            },
        }
    );
});

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');

itemsR.forEach(item => {
    gsap.fromTo(
        item,
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: 'top 100%',
                end: 'top 80%',
                scrub: true,
            },
        }
    );
});
