<script setup>
    import LogoKly from '../assets/image/kly-color.png';
    import News1 from '../assets/image/news-1.png';
    import News2 from '../assets/image/news-2.png';
    import News3 from '../assets/image/news-3.png';
    import News4 from '../assets/image/news-4.png';
    defineProps(['logo'])
    
</script>
<template>
    <div class="section section--trending">
        <div class="container">
            <div class="section--trending__box bg-gradient-to-b from-[#FFDDC5] to-transparent">
                <!-- <div class="section--trending__box__title">
                    <span>Liputan 6 Update</span>
                    <a href="#" class="section--trending__box__title__more">
                        <span>Selengkapnya</span>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0985 6.00013L1.7333 10.2661C1.41411 10.578 0.896478 10.578 0.577285 10.2661C0.258092 9.95412 0.258092 9.44826 0.577285 9.13533L4.39618 5.43528L0.642758 1.73523C0.437132 1.42532 0.474986 1.01941 0.733808 0.750472C0.99263 0.482534 1.40592 0.422569 1.73329 0.604511L6.09849 4.87043C6.41768 5.18236 6.41769 5.6882 6.0985 6.00013Z" fill="currentColor"></path><path d="M0.822266 0.835938C1.03896 0.611607 1.3837 0.558854 1.66113 0.706055L6.0127 4.95801C6.2827 5.22187 6.28262 5.64821 6.0127 5.91211L1.64746 10.1787C1.37591 10.4438 0.93463 10.4438 0.663086 10.1787C0.393426 9.91518 0.392701 9.48869 0.662109 9.22363L4.48145 5.52344L4.57129 5.43652L4.48242 5.34766L0.741211 1.66016C0.572633 1.39941 0.604967 1.06188 0.822266 0.835938Z" stroke="currentColor" stroke-opacity="0.2" stroke-width="0.244917"></path></svg>
                    </a>
                </div> -->
                <div class="section--trending__box__row">
                    <div class="section--trending__box__row__title">
                        <figure class="section--trending__box__row__title__kly">
                            <img class="section--trending__box__row__title__kly-logo" :src="LogoKly" width="50" height="30" alt="logo">
                        </figure>
                        <a href="/">
                            <figure class="section--trending__box__row__title__program">
                                <img :src="logo" width="220" height="50" alt="logo">
                            </figure>
                        </a>
                        <a href="#" class="section--trending__box__row__title__more text-primary">
                            <span>Selengkapnya</span>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0985 6.00013L1.7333 10.2661C1.41411 10.578 0.896478 10.578 0.577285 10.2661C0.258092 9.95412 0.258092 9.44826 0.577285 9.13533L4.39618 5.43528L0.642758 1.73523C0.437132 1.42532 0.474986 1.01941 0.733808 0.750472C0.99263 0.482534 1.40592 0.422569 1.73329 0.604511L6.09849 4.87043C6.41768 5.18236 6.41769 5.6882 6.0985 6.00013Z" fill="currentColor"></path><path d="M0.822266 0.835938C1.03896 0.611607 1.3837 0.558854 1.66113 0.706055L6.0127 4.95801C6.2827 5.22187 6.28262 5.64821 6.0127 5.91211L1.64746 10.1787C1.37591 10.4438 0.93463 10.4438 0.663086 10.1787C0.393426 9.91518 0.392701 9.48869 0.662109 9.22363L4.48145 5.52344L4.57129 5.43652L4.48242 5.34766L0.741211 1.66016C0.572633 1.39941 0.604967 1.06188 0.822266 0.835938Z" stroke="currentColor" stroke-opacity="0.2" stroke-width="0.244917"></path></svg>
                        </a>
                    </div>

                    <div class="section--trending__box__row__swiper">
                        <div class="swiper text-black dark:text-white mask-x-from-95% mask-x-to-100%">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News1" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO : Inovasi “Gila” Dari GITEX 2025</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News2" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">Zeneration</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News3" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News4" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News1" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO : Inovasi “Gila” Dari GITEX 2025</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News2" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">Zeneration</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News3" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News4" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News1" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO : Inovasi “Gila” Dari GITEX 2025</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News2" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">Zeneration</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News3" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="#" class="item group">
                                        <figure class="item__figure">
                                            <img class="item__figure__img" :src="News4" alt="">
                                            <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                            <span class="item__time bg-black/70 text-white">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                                <span>05:30</span>
                                            </span>
                                        </figure>
                                        <span class="item__title">VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-button swiper-button-prev">
                            <span class="swiper-button-icon text-primary bg-white">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.846149 8.91354L9.05194 0.707752C9.65196 0.107729 10.625 0.107729 11.225 0.707752C11.8251 1.30778 11.8251 2.28082 11.225 2.88277L4.0462 10.0001L11.102 17.1174C11.4885 17.7135 11.4173 18.4943 10.9308 19.0116C10.4443 19.527 9.66734 19.6424 9.05195 19.2924L0.84617 11.0866C0.246146 10.4866 0.246125 9.51356 0.846149 8.91354Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </div>
                        <div class="swiper-button swiper-button-next">
                            <span class="swiper-button-icon text-primary bg-white">
                                <svg  width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1537 11.0865L2.94794 19.2922C2.34792 19.8923 1.37487 19.8923 0.774848 19.2922C0.174823 18.6922 0.174823 17.7192 0.774848 17.1172L7.95368 9.99994L0.897925 2.88264C0.511385 2.28651 0.582543 1.50571 1.06908 0.988392C1.55562 0.472995 2.33254 0.357649 2.94792 0.707625L11.1537 8.91341C11.7537 9.51344 11.7538 10.4864 11.1537 11.0865Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    @import '../assets/sass/components/trending.css';
</style>