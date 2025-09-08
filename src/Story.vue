<script setup>
import Header6 from './components/HeaderNavbar.vue'
import Footer6 from './components/Footer.vue'
import Story1 from './assets/image/story-1.png';
import Story2 from './assets/image/story-2.png';
import Story3 from './assets/image/story-3.png';
import Story4 from './assets/image/story-4.png';
import Story5 from './assets/image/story-5.png';
</script>

<template>
    <Header6/>
    <main class="main flex flex-col mb-6 lg:mb-10">
        <section class="section section--story dark:text-white">
            <div class="container">
                <div class="section__title flex-col items-start">
                    <span class="section__title__text">
                        STORY
                    </span>
                    <div class="tab-filter *:bg-gray-100 *:hover:bg-primary *:hover:text-white whitespace-nowrap overflow-x-auto w-full">
                        <button class="tab-btn active" data-filter="*">Semua</button>
                        <!-- <button class="tab-btn" data-filter=".terkini">Terkini</button>
                        <button class="tab-btn" data-filter=".terpopuler">Terpopuler</button> -->
                        <button class="tab-btn" data-filter="">Vaksin</button>
                        <button class="tab-btn" data-filter="">Gaza</button>
                        <button class="tab-btn" data-filter="">Prabowo</button>
                        <button class="tab-btn" data-filter="">Ormas</button>
                        <button class="tab-btn" data-filter="">Ganjar Pranowo</button>
                        <button class="tab-btn" data-filter="">Bebaskan Gaza</button>
                        <button class="tab-btn" data-filter="">Islamophobia Prancis</button>
                        <button class="tab-btn" data-filter="">Bebaskan Gaza</button>
                        <button class="tab-btn" data-filter="">Ormas</button>
                        <button class="tab-btn" data-filter="">Bebaskan Gaza</button>
                    </div>
                </div>
                <div class="tab-grid *:*:dark:hover:shadow-white/20">
                <!-- <div class="story grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"> -->
                    <div class="card terkini">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story2" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO : Inovasi “Gila” Dari GITEX 2025</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terpopuler">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story3" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">Zeneration</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terkini">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story4" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terpopuler">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story5" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terkini">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story1" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO : Inovasi “Gila” Dari GITEX 2025</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terpopuler">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story2" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">Zeneration</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terkini">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story3" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terpopuler">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story4" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terkini">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story2" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO : Inovasi “Gila” Dari GITEX 2025</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terpopuler">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story3" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">Zeneration</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terkini">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story4" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terpopuler">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story5" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terkini">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story2" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO : Inovasi “Gila” Dari GITEX 2025</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terpopuler">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story3" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">Zeneration</span>
                            </div>
                        </a>
                    </div>
                    <div class="card terkini">
                        <a href="./vertical.html" class="item group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story4" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">LIputan6 Update</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div class="vertical absolute inset-0 w-full h-full overflow-hidden z-50 bg-black transition-opacity opacity-0 pointer-events-none">
        <div class="vertical-screen relative max-w-screen-md h-full mx-auto">
            <div class="vertical-body relative overflow-y-auto flex flex-col max-w-screen-md mx-auto h-full snap-y snap-mandatory scroll-smooth" data-scroller>
                <div data-section="video" class="shrink-0 transition bg-black/20 h-full snap-always snap-start">
                    <iframe class="vidio-embed w-full h-full" data-src="https://www.vidio.com/embed/2071287-timi-dan-mimi-suka-es-krim-rasa-sayur-dan-buah?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                </div>
                <div data-section="video" class="sect shrink-0 transition bg-black/20 h-full snap-always snap-start">
                    <iframe class="vidio-embed w-full h-full" data-video-type="vertical" data-src="https://www.vidio.com/embed/8906271-massa-buruh-di-depan-dpr-bubar-siang-ini" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                    <div class="lg:relative">
                        <div class="sect-overlay absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent text-white pt-10 pl-4 pb-4 pr-16">
                            <svg width="42" height="12" viewBox="0 0 42 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.09511 1.71429H5.71394V0H0V12H5.71394V10.2857H2.09511V6.77143H4.97113V5.05714H2.09511V1.71429Z" fill="currentColor"/><path d="M12.0595 12H14.2118V0H12.3452V7.18286L10.193 0H7.56458V12H9.45018V3.30857L12.0595 12Z" fill="currentColor"/><path d="M20.9306 0H17.8641L15.7309 12H17.6546L18.0165 9.82286H20.5878L20.9496 12H23.0638L20.9306 0ZM19.2926 2.12571L20.3021 8.19429H18.2831L19.2926 2.12571Z" fill="currentColor"/><path d="M27.5059 0H24.5918V12H26.4203V3.51429L27.9821 12H29.9629L31.4105 3.39429V12H33.3913V0H30.4772L29.0487 8.52L27.5059 0Z" fill="currentColor"/><path d="M39.2137 0H37.7345V2.5601H35.1934V4.03927H37.7345V6.63729H39.2137V4.03927H41.7548V2.5601H39.2137V0Z" fill="currentColor"/></svg>
                            <span>VIDEO: Revolusi Medis! Klinik Australia Uji AI Untuk Deteksi Kanker Kulit Tanpa Biopsi</span>
                            <p>Sebuah klinik kulit di Australia tengah menguji teknologi AI canggih yang mampu mendeteksi kanker kulit tanpa operasi dan tanpa biopsi. Alat ini diklaim bisa melihat sel kanker secara real time, tanpa jarum, tanpa darah, dan tanpa bekas luka.</p>
                            <p>Sebuah klinik kulit di Australia tengah menguji teknologi AI canggih yang mampu mendeteksi kanker kulit tanpa operasi dan tanpa biopsi. Alat ini diklaim bisa melihat sel kanker secara real time.kulit tanpa operasi dan tanpa biopsi. Alat ini diklaim bisa melihat sel kanker secara real time, tanpa jarum, tanpa darah.</p>
                        </div>
                        <div class="sect-comment">
                            <p>komentar</p>
                        </div>
                    </div>
                </div>
                <div data-section="video" class="shrink-0 transition bg-black/10 h-full snap-always snap-start">
                    <iframe class="vidio-embed w-full h-full"data-video-type="vertical" data-src="https://www.vidio.com/embed/8908249-kondisi-terkini-sekitar-kwitang-ada-bangkai-mobil-terbakar-aparat-tni-diterjunkan" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                </div>
                <div data-section="video" class="shrink-0 transition bg-black/10 h-full snap-always snap-start">
                    <iframe class="vidio-embed w-full h-full"data-video-type="vertical" data-src="https://www.vidio.com/embed/8907884-anies-baswedan-melayat-ke-rumah-duka-ojol-korban-brutal-polisi" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                </div>
            </div>
            <div class="btn-group absolute right-0 bottom-0 flex flex-col gap-3 p-3">
                <a href="#" aria-label="like" class="btn btn--like flex flex-col items-center gap-0.5">
                    <!-- <i class="flex items-center justify-center size-10 bg-black/20 rounded-full backdrop-blur"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.49994 19.3333H13.4999V10H19.1466L9.99994 0.853336L0.853271 10H6.49994V19.3333Z" fill="currentColor"></path></svg></i> -->
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1094 5.63191C18.7961 5.64045 19.4723 5.80401 20.0869 6.11043C20.7015 6.41687 21.2391 6.85818 21.6592 7.40144C22.0792 7.94474 22.3708 8.5762 22.5127 9.24812C22.6542 9.91849 22.642 10.6121 22.4785 11.2774L22.4795 11.2784L21.6416 14.7266H26.998C27.5062 14.7266 28.0074 14.8451 28.4619 15.0723C28.9165 15.2996 29.3123 15.6296 29.6172 16.0362C29.9219 16.4426 30.1278 16.9144 30.2188 17.4141C30.3097 17.9142 30.2829 18.4292 30.1406 18.9171L27.4922 28.0108V28.0118C27.2938 28.6916 26.88 29.289 26.3135 29.7139C25.7469 30.1388 25.0578 30.3682 24.3496 30.3682H9.00195C8.1338 30.3682 7.30138 30.0231 6.6875 29.4093C6.07363 28.7953 5.72853 27.963 5.72852 27.0948V18.0001C5.72854 17.1319 6.07363 16.2995 6.6875 15.6856C7.30138 15.0717 8.1338 14.7267 9.00195 14.7266H12.1396L12.3154 14.7139C12.4902 14.6894 12.6585 14.6289 12.8096 14.5352C13.0109 14.4104 13.1739 14.2318 13.2793 14.0196L13.2803 14.0167L17.2021 6.18465C17.3736 5.84216 17.7264 5.62717 18.1094 5.63191ZM15.0693 14.9122L15.0684 14.9112C14.7973 15.4557 14.3812 15.9149 13.8643 16.2354C13.7199 16.325 13.5684 16.4012 13.4131 16.4669V28.3682H24.3496C24.6251 28.3682 24.8929 28.2786 25.1133 28.1134C25.3337 27.948 25.4951 27.7158 25.5723 27.4512L28.2207 18.3575V18.3565C28.276 18.1668 28.2863 17.967 28.251 17.7725C28.2156 17.578 28.1352 17.3946 28.0166 17.2364C27.898 17.0782 27.7442 16.9498 27.5674 16.8614C27.3906 16.773 27.1957 16.7266 26.998 16.7266H20.3701C20.0635 16.7265 19.7735 16.5858 19.584 16.3448C19.3944 16.1037 19.3261 15.7884 19.3984 15.4903L20.5352 10.8067L20.5361 10.8028C20.6285 10.4286 20.6353 10.0383 20.5557 9.66121C20.476 9.28415 20.3119 8.92995 20.0762 8.62508C19.8404 8.32026 19.5392 8.07242 19.1943 7.90047C19.0285 7.81778 18.8544 7.75392 18.6758 7.70906L15.0693 14.9122ZM7.72852 27.0948C7.72853 27.4325 7.86277 27.7564 8.10156 27.9952C8.34037 28.234 8.66424 28.3682 9.00195 28.3682H11.4131V16.7266H9.00195C8.66424 16.7267 8.34037 16.8609 8.10156 17.0997C7.86277 17.3385 7.72854 17.6623 7.72852 18.0001V27.0948Z" fill="currentColor"/></svg>
                </a>
                <a href="#" aria-label="prevpage" class="btn btn--page btn--page-prev flex flex-col items-center gap-0.5">
                    <i class="flex items-center justify-center size-10 bg-black/20 rounded-full backdrop-blur"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.49994 19.3333H13.4999V10H19.1466L9.99994 0.853336L0.853271 10H6.49994V19.3333Z" fill="currentColor"></path></svg></i>
                </a>
                <a href="#" aria-label="nextpage" class="btn btn--page btn--page-next flex flex-col items-center gap-0.5">
                    <i class="flex items-center justify-center size-10 bg-black/20 rounded-full backdrop-blur"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.49994 0.666668H13.4999V10H19.1466L9.99994 19.1467L0.853271 10H6.49994V0.666668Z" fill="currentcolor"></path></svg></i>
                </a>
            </div>
            <div class="indicator absolute right-2 bottom-1/2 transform translate-y-1/2 flex flex-col snap-y snap-mandatory scroll-smooth overflow-hidden dark:indicator-white hidden" data-indicator></div>
        </div>
    </div>
    <Footer6/>
</template>
<style>
@import './assets/sass/components/vertical.css';
</style>

