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
        const headerCollapsed = document.querySelector('.header--collapsed')
    let search = header.querySelector('.header--collapsed__form__input'),
        searchParent = search.closest('.header--collapsed__form')

    header.querySelector('.header__menu').addEventListener('click',()=>{
        headerCollapsed.classList.add('--active')
        document.documentElement.classList.add('overflow-hidden')
    })
    function headerClose() {
        headerCollapsed.classList.remove('--active')
        document.documentElement.classList.remove('overflow-hidden')
        search.value = ''
    }
    header.querySelector('.header--collapsed__top__close').addEventListener('click',()=>{
        headerClose()
    })

    search.addEventListener('input',(e)=>{
        if(e.target.value.length > 0){
            searchParent.classList.add('--active')
        }else{
            searchParent.classList.remove('--active')
        }
    })
    header.querySelector('.header--collapsed__form__close').addEventListener('click',(e)=>{
        searchParent.classList.remove('--active')
        search.value = ''
    })
        // const headerMenu = header.querySelector('.header__menu'),
        // navbarCollapsed = document.querySelector('.header--collapsed'),
        // navbarCollapsedClose = document.querySelector('.header--collapsed__top__close')

        // headerMenu.addEventListener('click',()=>{
        //     navbarCollapsed.classList.add('--active')
        // })
        // navbarCollapsedClose.addEventListener('click',()=>{
        //     navbarCollapsed.classList.remove('--active')
        // })
    }

    let lastScrollTop = 0, lastHeaderPosition = 0;
    window.addEventListener('scroll', function() {
        //unsticky header
        let scrollHeaderTop = window.pageYOffset || document.documentElement.scrollTop,
            limitHeader = document.querySelector('.header').offsetHeight;
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
    
    document.querySelectorAll(".item").forEach(item => {
        if (item.classList.contains('item--story')) {
            let parentRect = floatingParent.getBoundingClientRect()
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

    // Isotope filter
    const grid = document.querySelector('.video-tab-grid');
    if (grid) {
        setTimeout(() => {
            const iso = new Isotope(grid, {
                itemSelector: '.video-card',
                layoutMode: 'fitRows'
            });
            
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const filterValue = this.getAttribute('data-filter');
                    iso.arrange({ filter: filterValue });
                });
            });
        }, 100);
    }
    
    function hoverMouseSwiper(container,func) {
        func.mousewheel.disable();
        container.addEventListener('mouseenter', () => {
            func.mousewheel.enable();
        });
        container.addEventListener('mouseleave', () => {
            func.mousewheel.disable();
        });
    }

    let storySwiper = document.querySelector('.story__swiper');
    if(storySwiper){
        const swiper = new Swiper(storySwiper, {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 10,
            mousewheel: {
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1,
            },
            freeMode: true,
            navigation: {
                nextEl: storySwiper.closest('.story')?.querySelector('.swiper-button-next'),
                prevEl: storySwiper.closest('.story')?.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                1024: {
                    spaceBetween: 24,
                },
            },
        });
        hoverMouseSwiper(storySwiper, swiper)

    }
    let sectVideo = document.querySelectorAll('.section--video')
    if (sectVideo) {
        sectVideo.forEach(container => {
            const swiper = new Swiper(container.querySelector('.section--video__swiper'), {
                slidesPerView: 'auto',
                mousewheel: {
                    forceToAxis: true,
                    releaseOnEdges: true,
                    sensitivity: 1,
                },
                navigation: {
                    nextEl: container.querySelector('.swiper-button-next'),
                    prevEl: container.querySelector('.swiper-button-prev'),
                },
            });
            hoverMouseSwiper(container, swiper)
        });
    }

    let sectTrend = document.querySelectorAll('.section--trending .swiper')
    if (sectTrend) {
        sectTrend.forEach(el =>  {
            const swiper = new Swiper(el, {
                slidesPerView: 'auto',
                mousewheel: {
                    forceToAxis: true,
                    releaseOnEdges: true,
                    sensitivity: 1,
                },
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
            hoverMouseSwiper(el, swiper)
        });
    }

    console.group('article share')
    var shareParent = document.querySelectorAll('.readpage__share'),
        shareUrl = window.location.href,
        shareTitle = document.title
        
    if (shareParent) {

        shareParent.forEach(item => {   
            var shareButton = item.querySelector('.readpage__share__button'),
                shareCopy = item.querySelector('.readpage__share__copy'),
                shareCancel = item.querySelector('.readpage__share__cancel')
            // expand dropdown
            shareButton.addEventListener('click', async (e) => {
                if (navigator.share) {
                    console.log('native');
                    try {
                        await navigator.share({
                        title: shareTitle,
                        url: shareUrl,
                        });
                        console.log('Shared successfully');
                    } catch (err) {
                        console.error('Error sharing:', err);
                    }
                } else {
                    console.log('collapsed');
                    item.classList.toggle('--collapsed')
                }
                e.preventDefault()
            })
            // social media share
            console.log('socmed');
            item.querySelector('.readpage__share__social__button--facebook').href = "https://www.facebook.com/sharer/sharer.php?u="+ encodeURIComponent(shareUrl) +"%2F&amp;src=sdkpreparse"
            item.querySelector('.readpage__share__social__button--x').href = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(shareUrl) + "&text=" + encodeURIComponent(shareTitle)
            item.querySelector('.readpage__share__social__button--whatsapp').href = "https://wa.me/?text="+ encodeURIComponent(shareTitle + " " + shareUrl)
            item.querySelector('.readpage__share__social__button--telegram').href = "https://t.me/share/url?url=" + encodeURIComponent(shareUrl) + "&text="+ encodeURIComponent(shareTitle)
            item.querySelector('.readpage__share__social__button--linkedin').href = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(shareUrl)

            // copy link
            shareCopy.addEventListener('click', (e) => {
                console.log('copy');
                navigator.clipboard.writeText(shareUrl);
                shareCopy.querySelector('span').textContent = 'Link Copied!';
                setTimeout(() => {
                    shareCopy.querySelector('span').textContent = 'Copy Link';
                }, 2000);
                e.preventDefault()
            });
            // click close
            shareCancel.addEventListener('click', (e) => {
                item.classList.remove('--collapsed')
                e.preventDefault()
            })
            // click outside
            document.addEventListener('click', (e) => {
                if (!item.contains(e.target)) {
                    item.classList.remove('--collapsed')
                }
            });
        });
        console.groupEnd(); 

        let readpageAuthor = document.querySelector('.readpage__author')
        readpageAuthor?.addEventListener('click', (e) => {
            readpageAuthor.classList.toggle('--collapsed')
        })
    }
    const readpageReaction = document.querySelector('.readpage__share__reaction');
    if (readpageReaction) {
        const likeBtn = readpageReaction.querySelector('.readpage__share__reaction__like');
        const dislikeBtn = readpageReaction.querySelector('.readpage__share__reaction__dislike');
        const likeCount = likeBtn.querySelector('.readpage__share__reaction__count');

        let liked = false;
        let disliked = false;
        let count = parseInt(likeCount.textContent, 10);

        likeBtn.addEventListener('click', () => {
            if (liked) {
                // Remove like
                liked = false;
                count--;
                likeBtn.classList.remove('--active');
            } else {
                // Add like
                liked = true;
                count++;
                likeBtn.classList.add('--active');

                // If dislike was active, remove it
                if (disliked) {
                    disliked = false;
                    dislikeBtn.classList.remove('--active');
                }
            }
            likeCount.textContent = count;
        });

        dislikeBtn.addEventListener('click', () => {
            if (disliked) {
                // Remove dislike
                disliked = false;
                dislikeBtn.classList.remove('--active');
            } else {
                // Add dislike
                disliked = true;
                dislikeBtn.classList.add('--active');

                // If liked, remove like and decrement
                if (liked) {
                    liked = false;
                    count--;
                    likeBtn.classList.remove('--active');
                }
            }
            likeCount.textContent = count;
        });
    }
})

