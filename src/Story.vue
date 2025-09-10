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
                <div class="section__title">
                    <span class="section__title__text">
                        STORY
                    </span>
                    <div class="tab-filter *:border-gray-200 *:hover:bg-[#FFF0E6] *:dark:border-neutral-700">
                        <button class="tab-btn  active" data-filter="*">Semua</button>
                        <button class="tab-btn" data-filter=".terkini">Terkini</button>
                        <button class="tab-btn" data-filter=".terpopuler">Terpopuler</button>
                    </div>
                </div>
                <div class="tab-grid *:*:dark:hover:shadow-white/20">
                <!-- <div class="story grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"> -->
                    <div class="card terkini">
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
                        <a href="./vertical.html" class="item group">
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
    <Footer6/>
</template>
<style>
@import './assets/sass/components/vertical.css';
</style>

