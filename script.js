window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    const btn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');
    const navigationItems = document.querySelectorAll('.navigation a');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        navigation.classList.toggle('active')
    })


    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            btn.classList.remove('active');
            navigation.classList.remove('active');
        })
    })


    const scrollBtn = document.querySelector('.scrollToTop-btn');
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500);
    })  
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })


    

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++){
            let wh = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < wh - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    })

})