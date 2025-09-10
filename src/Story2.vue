<script setup>
import Header6 from './components/HeaderNavbar.vue'
import Segment from './components/Segment.vue'
import Footer6 from './components/Footer.vue'
import Story1 from './assets/image/story-1.png';
import Story2 from './assets/image/story-2.png';
import Story3 from './assets/image/story-3.png';
import Story4 from './assets/image/story-4.png';
import Story5 from './assets/image/story-5.png';
import { ref } from 'vue'
var items = ref([
{ 
    title: 'VIDEO : Inovasi “Gila” Dari GITEX 2025', 
    image: Story1,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8926539-gibran-pasca-demo-datangi-pos-di-kwitang?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat', 
    image: Story2,
    tag: 'Zeneration',
    src: 'https://www.vidio.com/embed/8926512-momen-nadiem-makarim-pakai-rompi-tahanan?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia?',
    image: Story3,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8919544-bikin-ciut-militer-china-tak-tertandingi?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?', 
    image: Story4,
    tag: 'Zeneration',
    src: 'https://www.vidio.com/embed/8919536-uya-saat-dijarah-demi-allah-saya-gak-ke-luar-negeri?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat', 
    image: Story5,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8926512-momen-nadiem-makarim-pakai-rompi-tahanan?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO : Inovasi “Gila” Dari GITEX 2025', 
    image: Story1,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8926539-gibran-pasca-demo-datangi-pos-di-kwitang?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat', 
    image: Story2,
    tag: 'Zeneration',
    src: 'https://www.vidio.com/embed/8926512-momen-nadiem-makarim-pakai-rompi-tahanan?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia?',
    image: Story3,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8919544-bikin-ciut-militer-china-tak-tertandingi?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?', 
    image: Story4,
    tag: 'Zeneration',
    src: 'https://www.vidio.com/embed/8919536-uya-saat-dijarah-demi-allah-saya-gak-ke-luar-negeri?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat', 
    image: Story5,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8926512-momen-nadiem-makarim-pakai-rompi-tahanan?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO : Inovasi “Gila” Dari GITEX 2025', 
    image: Story1,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8926539-gibran-pasca-demo-datangi-pos-di-kwitang?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat', 
    image: Story2,
    tag: 'Zeneration',
    src: 'https://www.vidio.com/embed/8926512-momen-nadiem-makarim-pakai-rompi-tahanan?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia?',
    image: Story3,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8919544-bikin-ciut-militer-china-tak-tertandingi?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?', 
    image: Story4,
    tag: 'Zeneration',
    src: 'https://www.vidio.com/embed/8919536-uya-saat-dijarah-demi-allah-saya-gak-ke-luar-negeri?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat', 
    image: Story5,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8926512-momen-nadiem-makarim-pakai-rompi-tahanan?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO : Inovasi “Gila” Dari GITEX 2025', 
    image: Story1,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8926539-gibran-pasca-demo-datangi-pos-di-kwitang?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat', 
    image: Story2,
    tag: 'Zeneration',
    src: 'https://www.vidio.com/embed/8926512-momen-nadiem-makarim-pakai-rompi-tahanan?autoplay=true&player_only=true&mute=false',
},
{ 
    title: 'VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia?',
    image: Story3,
    tag: 'LIputan6 Update',
    src: 'https://www.vidio.com/embed/8919544-bikin-ciut-militer-china-tak-tertandingi?autoplay=true&player_only=true&mute=false',
},
]);
</script>

<template>
    <Header6/>
    <main class="main flex flex-col mb-6 lg:mb-10">
        <Segment/>
        <section class="section section--story dark:text-white">
            <div class="container">
                <div class="section__title flex-col items-start">
                    <span class="section__title__text">
                        STORY
                    </span>
                </div>
                <div class="pills *:bg-gray-100 *:hover:bg-primary *:hover:text-white *:dark:bg-neutral-800">
                    <a href="#" class="pills-btn">Vaksin</a>
                    <a href="#" class="pills-btn">Gaza</a>
                    <a href="#" class="pills-btn">Prabowo</a>
                    <a href="#" class="pills-btn">Ganjar Pranowo</a>
                    <a href="#" class="pills-btn">Ormas</a>
                    <a href="#" class="pills-btn">Bebaskan Gaza</a>
                    <a href="#" class="pills-btn">Islamophobia Prancis</a>
                    <a href="#" class="pills-btn">Bebaskan Gaza</a>
                    <a href="#" class="pills-btn">Ormas</a>
                    <a href="#" class="pills-btn">Bebaskan Gaza</a>
                </div>
                <div class="storyGrid">
                    <template v-for="item in items">
                        <a href="./vertical.html" class="item group">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="item.image" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <span class="item__title">{{ item.title }}</span>
                            <div class="item__detail text-neutral-500 dark:text-white">
                                <span class="item__tag">{{item.tag}}</span>
                            </div>
                        </a>
                    </template>
                </div>
                <!-- <div class="pagination text-gray-600 dark:text-gray-300 *:hover:bg-gray-200 *:dark:bg-white/20 *:dark:text-white">
                    <a href="#" 
                        class="pagination-btn disabled:opacity-50" 
                        aria-label="Previous page" 
                        disabled>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.2041L6 8.2041L10 4.2041" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                    <a href="#" class="pagination-btn active">1</a>
                    <a href="#" class="pagination-btn">2</a>
                    <a href="#" class="pagination-btn">3</a>
                    <span class="pagination-btn">...</span>
                    <a href="#" class="pagination-btn">10</a>
                    <a href="#" 
                        class="pagination-btn" 
                        aria-label="Next page">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12.2041L10 8.2041L6 4.2041" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </div> -->

                <div class="pagination *:text-gray-600 dark:*:text-white *:hover:text-black *:hover:bg-gray-100" aria-label="Page navigation">
                    <a href="#" class="pagination__item">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12.23L6 8.22998L10 4.22998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <a href="#" class="pagination__item --active">
                        1
                    </a>
                    <a href="#" class="pagination__item">
                        2
                    </a>
                    <a href="#" class="pagination__item">
                        3
                    </a>
                    <a href="#" class="pagination__item">
                        <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.59163 4.12771C2.24788 4.12771 1.93396 4.0439 1.64987 3.87629C1.36578 3.70583 1.13851 3.47856 0.968054 3.19447C0.80044 2.91038 0.716633 2.59646 0.716633 2.25271C0.716633 1.90612 0.80044 1.5922 0.968054 1.31095C1.13851 1.02686 1.36578 0.801003 1.64987 0.633389C1.93396 0.462935 2.24788 0.377707 2.59163 0.377707C2.93822 0.377707 3.25214 0.462935 3.53339 0.633389C3.81749 0.801003 4.04334 1.02686 4.21095 1.31095C4.38141 1.5922 4.46663 1.90612 4.46663 2.25271C4.46663 2.59646 4.38141 2.91038 4.21095 3.19447C4.04334 3.47856 3.81749 3.70583 3.53339 3.87629C3.25214 4.0439 2.93822 4.12771 2.59163 4.12771ZM9.0032 4.12771C8.65945 4.12771 8.34553 4.0439 8.06143 3.87629C7.77734 3.70583 7.55007 3.47856 7.37962 3.19447C7.212 2.91038 7.1282 2.59646 7.1282 2.25271C7.1282 1.90612 7.212 1.5922 7.37962 1.31095C7.55007 1.02686 7.77734 0.801003 8.06143 0.633389C8.34553 0.462935 8.65945 0.377707 9.0032 0.377707C9.34979 0.377707 9.66371 0.462935 9.94496 0.633389C10.229 0.801003 10.4549 1.02686 10.6225 1.31095C10.793 1.5922 10.8782 1.90612 10.8782 2.25271C10.8782 2.59646 10.793 2.91038 10.6225 3.19447C10.4549 3.47856 10.229 3.70583 9.94496 3.87629C9.66371 4.0439 9.34979 4.12771 9.0032 4.12771ZM15.4148 4.12771C15.071 4.12771 14.7571 4.0439 14.473 3.87629C14.1889 3.70583 13.9616 3.47856 13.7912 3.19447C13.6236 2.91038 13.5398 2.59646 13.5398 2.25271C13.5398 1.90612 13.6236 1.5922 13.7912 1.31095C13.9616 1.02686 14.1889 0.801003 14.473 0.633389C14.7571 0.462935 15.071 0.377707 15.4148 0.377707C15.7613 0.377707 16.0753 0.462935 16.3565 0.633389C16.6406 0.801003 16.8665 1.02686 17.0341 1.31095C17.2045 1.5922 17.2898 1.90612 17.2898 2.25271C17.2898 2.59646 17.2045 2.91038 17.0341 3.19447C16.8665 3.47856 16.6406 3.70583 16.3565 3.87629C16.0753 4.0439 15.7613 4.12771 15.4148 4.12771Z" fill="currentColor"/>
                        </svg>
                    </a>
                    <a href="#" class="pagination__item bg-transparent text-gray-600 hover:bg-gray-100">
                        10
                    </a>
                    <a href="#" class="pagination__item">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12.23L10 8.22998L6 4.22998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </main>
    <Footer6/>
</template>
<style>
@import './assets/sass/components/vertical.css';
</style>

