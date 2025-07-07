document.addEventListener('DOMContentLoaded', () => {
    
    var checkMode = localStorage.getItem("mode");
    
    function setTheme(param) {
        if(param === 'dark'){
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        } else if (param === 'light'){
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        }
    }
    setTheme(checkMode)

    document.querySelectorAll('.switch-theme').forEach((item)=>{
        item.addEventListener('click',(e)=>{
            let value = e.target.dataset.value;
            if (value == 'dark') {
                // console.log('dark');
                e.target.dataset.value = 'light'
                value = 'light'
            }else if(value == 'light'){
                // console.log('light');
                e.target.dataset.value = 'dark'
                value = 'dark'
            }
            setTheme(value)
            localStorage.setItem("mode", value);
            // console.log({checkMode}, value);
        })
    })
    const header = document.querySelector('.header')
    if (header) {
        const headerMenu = header.querySelector('.header__menu'),
        navbarCollapsed = document.querySelector('.navbar--collapsed'),
        navbarCollapsedClose = document.querySelector('.navbar--collapsed__top__close')

        headerMenu.addEventListener('click',()=>{
            navbarCollapsed.classList.add('--active')
        })
        navbarCollapsedClose.addEventListener('click',()=>{
            navbarCollapsed.classList.remove('--active')
        })
    }

    let lastScrollTop = 0, lastHeaderPosition = 0;
    window.addEventListener('scroll', function() {
        //unsticky header
        let scrollHeaderTop = window.pageYOffset || document.documentElement.scrollTop,
            limitHeader = document.querySelector('.navbar').offsetHeight + document.querySelector('.header').offsetHeight;
        if (scrollHeaderTop  > limitHeader){
            if (scrollHeaderTop  > lastHeaderPosition) {
                document.querySelector('.header').classList.add('--unsticky')
            } else {
                document.querySelector('.header').classList.remove('--unsticky')
            }
        }
        lastHeaderPosition = scrollHeaderTop;
    })

    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    let floating = '<iframe class="vidio-embed bg-neutral-700" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>'
    let floatingParent = document.querySelector('.story__swiper')
    let parentRect = floatingParent.getBoundingClientRect()

    document.querySelectorAll(".item").forEach(item => {
        if (item.classList.contains('item--story')) {
            if (mediaQuery.matches) {
                let newElement
                item.addEventListener("mouseenter", () => {
                    newElement = document.createElement('div');
                    let itemRect = item.getBoundingClientRect()

                    newElement.classList.add('story__floating')
                    newElement.innerHTML = floating;
                    floatingParent.after(newElement)

                    newElement.querySelector('iframe').src = item.dataset.src
                    newElement.style.left = itemRect.left.toFixed() - parentRect.left.toFixed() + (itemRect.width.toFixed() / 2) + 'px'
                    setTimeout(() => {
                        newElement.classList.add('--active')
                    }, 500);
                    
                })
                item.addEventListener("mouseleave", () => {
                    newElement.classList.remove('--active')
                    setTimeout(() => {
                        newElement.remove()
                    }, 500);

                    // floating.classList.remove('--active')
                    // floating.querySelector('iframe').removeAttribute("src");
                });
            }
            
        }else{
            const iframe = item.querySelector("iframe");
            const dataSrc = iframe.getAttribute("data-src");
            item.addEventListener("mouseenter", () => {
                iframe.src = dataSrc
            });
            
            item.addEventListener("mouseleave", () => {
                iframe.removeAttribute("src");
            });
        }
    });

    const storySwiper = new Swiper('.story__swiper', {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        mousewheel: true,
        freeMode: true,
        navigation: {
            nextEl: '.story .swiper-button-next',
            prevEl: '.story .swiper-button-prev',
        },
        breakpoints: {
            1024: {
                spaceBetween: 24,
            },
        },
    });
    
    document.querySelectorAll('.section--video').forEach(container => {
        const videoSwiper = new Swiper(container.querySelector('.section--video__swiper'), {
            slidesPerView: 'auto',
            mousewheel: true,
        // freeMode: true,
            // spaceBetween: 16,
            navigation: {
                nextEl: container.querySelector('.swiper-button-next'),
                prevEl: container.querySelector('.swiper-button-prev'),
            },
        });
    });

    document.querySelectorAll('.section--trending .swiper').forEach(el =>  {
        const trendingSwiper = new Swiper(el, {
            slidesPerView: 'auto',
            mousewheel: true,
            // spaceBetween: 16,
            freeMode: true,
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: el.closest('.section--trending')?.querySelector('.swiper-button-next'),
                prevEl: el.closest('.section--trending')?.querySelector('.swiper-button-prev'),
            },
            on: {
                progress: function (trendingSwiper , progress) {
                    const customRowTitle = el.closest('.section--trending')

                    if (customRowTitle) {
                        trendingSwiper.progress === 0 ? customRowTitle.classList.remove('bla')  : customRowTitle.classList.add('bla') ;
                    }
                },
            }
        });
    });
})