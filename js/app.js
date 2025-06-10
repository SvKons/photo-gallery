gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.3,
    effects: true,
});

if (window.innerWidth <= 600) {
    let allItems = gsap.utils.toArray('.gallery__item');

    allItems.forEach((item, index) => {
        let fromX = index % 2 === 0 ? -90 : 90;

        gsap.fromTo(
            item,
            { opacity: 0, x: fromX },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            }
        );
    });
} else {
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
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 130%',
                    end: 'top 40%',
                    scrub: true,
                },
            }
        );
    });
}
