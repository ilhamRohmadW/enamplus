<script setup>
    import News1 from '../assets/image/news-1.png';
    import News2 from '../assets/image/news-2.png';
    import News3 from '../assets/image/news-3.png';
    import News4 from '../assets/image/news-4.png';
</script>
<template>
    <div class="section section--recomendation">
        <div class="container">
            <div class="section--recomendation__wrapper bg-[#FFF1ED]">
                <div class="section__title">
                    <span class="section__title__text">
                        REKOMENDASI
                    </span>
                </div>
                <ul class="news-list *:*:shadow-[0_0_0_0_rgba(0,0,0,0.25)] *:*:hover:shadow-[0_0_16px_0_rgba(0,0,0,0.25)] *:*:transition-shadow">
                    <li class="news-list__item">
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
                            <div class="item__detail text-neutral-500">
                                <span class="item__tag">LIputan6 Update</span>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                <span class="item__published">1 jam lalu</span>
                            </div>
                        </a>
                    </li>
                    <li class="news-list__item">
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
                            <div class="item__detail text-neutral-500">
                                <span class="item__tag">Zeneration</span>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                <span class="item__published">1 jam lalu</span>
                            </div>
                        </a>
                    </li>
                    <li class="news-list__item">
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
                            <div class="item__detail text-neutral-500">
                                <span class="item__tag">LIputan6 Update</span>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                <span class="item__published">1 jam lalu</span>
                            </div>
                        </a>
                    </li>
                    <li class="news-list__item">
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
                            <div class="item__detail text-neutral-500">
                                <span class="item__tag">LIputan6 Update</span>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                <span class="item__published">1 jam lalu</span>
                            </div>
                        </a>
                    </li>
                    <li class="news-list__item">
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
                            <div class="item__detail text-neutral-500">
                                <span class="item__tag">LIputan6 Update</span>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                <span class="item__published">1 jam lalu</span>
                            </div>
                        </a>
                    </li>
                    <li class="news-list__item">
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
                            <div class="item__detail text-neutral-500">
                                <span class="item__tag">Zeneration</span>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                <span class="item__published">1 jam lalu</span>
                            </div>
                        </a>
                    </li>
                    <li class="news-list__item">
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
                            <div class="item__detail text-neutral-500">
                                <span class="item__tag">LIputan6 Update</span>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                <span class="item__published">1 jam lalu</span>
                            </div>
                        </a>
                    </li>
                    <li class="news-list__item">
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
                            <div class="item__detail text-neutral-500">
                                <span class="item__tag">LIputan6 Update</span>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                <span class="item__published">1 jam lalu</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
    @import '../assets/sass/components/recommend.css';
</style>