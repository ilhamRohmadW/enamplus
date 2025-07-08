<script setup>
  import Header6 from './components/HeaderNavbar.vue'
  import Segment from './components/Segment.vue'
  import Footer6 from './components/Footer.vue'
  import Author from './assets/image/author.png';
  import News1 from './assets/image/news-1.png';
  import News2 from './assets/image/news-2.png';
  import News3 from './assets/image/news-3.png';
  import News4 from './assets/image/news-4.png';
</script>

<template>
  <Header6/>
    <main class="main flex flex-col mb-6 lg:mb-10">
      <Segment/>

        <div class="section section--readpage dark:text-white">
            <div class="container">
                <div class="section--row">
                    <div class="section--main">
                        <div class="readpage">
                            <div class="readpage__video">
                                <iframe class="vidio-embed" src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                            </div>
                            <h1 class="readpage__title">VIDEO: Kementerian Agama Gelar Nikah Massal di Masjid Istiqal, Jakarta</h1>
                            <div class="readpage__detail text-neutral-500 dark:text-white">
                                <a href class="readpage__detail__tag">LIputan6 Update</a>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3.33362" r="3" fill="currentColor"/></svg>
                                <span class="readpage__detail__published">1 jam lalu</span>
                                <div class="readpage__detail__seen">
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99316 0C11.5063 2.03236e-05 14.5445 2.04001 15.9863 5C14.5443 7.96005 11.5063 9.99998 7.99316 10C4.48005 10 1.44184 7.96 0 5C1.442 2.03993 4.48005 0 7.99316 0ZM7.99316 1.66699C6.1529 1.66699 4.66016 3.15973 4.66016 5C4.66016 6.84027 6.1529 8.33301 7.99316 8.33301C9.83341 8.33298 11.3262 6.84025 11.3262 5C11.3262 3.15975 9.83341 1.66702 7.99316 1.66699ZM7.99316 2.55566C9.34289 2.55578 10.4375 3.65025 10.4375 5C10.4375 6.34974 9.34288 7.44422 7.99316 7.44434C6.64335 7.44434 5.54884 6.34982 5.54883 5C5.54883 3.65018 6.64334 2.55566 7.99316 2.55566Z" fill="currentColor"/></svg>
                                    <span>1,320 views</span>
                                </div>
                            </div>
                            <p class="readpage__desc">Gubernur Jawa Barat Dedi Mulyadi buka suara terkait bencana yang melanda kawasan Lembang. Dedi Mulyadi menilai pembangunan vila hingga kafe di tempat wisata jadi pemicu bencana di Lembang.</p>
                            <div class="readpage__bottom lg:bg-zinc-100 dark:lg:bg-black">
                                <a href="#" class="readpage__bottom__link">
                                    <img class="readpage__bottom__image" :src="Author" width="26" height="26" alt="">
                                </a>
                                <div class="readpage__author text-neutral-500 dark:text-white group">
                                    <div class="readpage__author__show">
                                        <span>Oleh</span>
                                        <a href="#" class="readpage__author__name text-primary">Cintya</a>
                                        <span>Diperbaharui 24 Mar 2025, 08:30 WIB</span>
                                        <svg class="readpage__author__icon text-primary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <div class="readpage__author__hide">
                                        <span class="readpage__author__release">Diterbitkan </span>
                                        <span>08 Jul 2025, 08:15 WIB</span>
                                    </div>
                                </div>
                                <div class="readpage__share readpage__share-top bg-zinc-100 dark:bg-black">
                                    <div class="readpage__share__reaction text-gray-500 dark:text-white">
                                        <button class="readpage__share__reaction__like group">
                                            <svg class="group-[.--active]:fill-green-500 group-[.--active]:text-green-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.83268 8.33342V18.3334M12.4993 4.90008L11.666 8.33342H16.5243C16.7831 8.33342 17.0383 8.39366 17.2697 8.50937C17.5011 8.62508 17.7024 8.79309 17.8577 9.00008C18.0129 9.20708 18.1178 9.44737 18.1641 9.70194C18.2104 9.95651 18.1968 10.2184 18.1243 10.4667L16.1827 17.1334C16.0817 17.4796 15.8712 17.7837 15.5827 18.0001C15.2942 18.2165 14.9433 18.3334 14.5827 18.3334H3.33268C2.89065 18.3334 2.46673 18.1578 2.15417 17.8453C1.84161 17.5327 1.66602 17.1088 1.66602 16.6667V10.0001C1.66602 9.55805 1.84161 9.13413 2.15417 8.82157C2.46673 8.50901 2.89065 8.33342 3.33268 8.33342H5.63268C5.94275 8.33325 6.24663 8.24659 6.51014 8.08318C6.77366 7.91977 6.98637 7.68609 7.12435 7.40842L9.99935 1.66675C10.3923 1.67161 10.7791 1.76522 11.1309 1.94058C11.4826 2.11593 11.7901 2.3685 12.0305 2.67942C12.2709 2.99033 12.4379 3.35155 12.5191 3.73608C12.6003 4.12062 12.5936 4.51853 12.4993 4.90008Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                            <span class="readpage__share__reaction__count text-sm group-[.--active]:text-green-500">1827</span>
                                        </button>
                                        <button class="readpage__share__reaction__dislike group">
                                            <svg class="group-[.--active]:fill-red-500 group-[.--active]:text-red-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1669 11.6667V1.66675M7.50026 15.1001L8.33359 11.6667H3.47526C3.21652 11.6667 2.96133 11.6065 2.7299 11.4908C2.49848 11.3751 2.29717 11.2071 2.14193 11.0001C1.98668 10.7931 1.88176 10.5528 1.83548 10.2982C1.78919 10.0437 1.80281 9.78181 1.87526 9.53341L3.81693 2.86675C3.9179 2.52056 4.12843 2.21645 4.41693 2.00008C4.70542 1.78371 5.05631 1.66675 5.41693 1.66675H16.6669C17.109 1.66675 17.5329 1.84234 17.8454 2.1549C18.158 2.46746 18.3336 2.89139 18.3336 3.33341V10.0001C18.3336 10.4421 18.158 10.866 17.8454 11.1786C17.5329 11.4912 17.109 11.6667 16.6669 11.6667H14.3669C14.0569 11.6669 13.753 11.7536 13.4895 11.917C13.2259 12.0804 13.0132 12.3141 12.8753 12.5917L10.0003 18.3334C9.60728 18.3285 9.22048 18.2349 8.86876 18.0596C8.51704 17.8842 8.20949 17.6317 7.96909 17.3207C7.72869 17.0098 7.56166 16.6486 7.48048 16.2641C7.3993 15.8795 7.40606 15.4816 7.50026 15.1001Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                        </button>
                                    </div>
                                    <a href="#" class="readpage__share__button">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.15841 11.2584L12.8501 14.575M12.8417 5.42503L7.15841 8.7417M17.5 4.16669C17.5 5.5474 16.3807 6.66669 15 6.66669C13.6193 6.66669 12.5 5.5474 12.5 4.16669C12.5 2.78598 13.6193 1.66669 15 1.66669C16.3807 1.66669 17.5 2.78598 17.5 4.16669ZM7.5 10C7.5 11.3807 6.38071 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61931 3.61929 7.50002 5 7.50002C6.38071 7.50002 7.5 8.61931 7.5 10ZM17.5 15.8334C17.5 17.2141 16.3807 18.3334 15 18.3334C13.6193 18.3334 12.5 17.2141 12.5 15.8334C12.5 14.4526 13.6193 13.3334 15 13.3334C16.3807 13.3334 17.5 14.4526 17.5 15.8334Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        <span>Share</span>
                                    </a>
                                    <div class="readpage__share__dropdown bg-white dark:bg-black">
                                        <div class="readpage__share__dropdown__content">
                                            <div class="readpage__share__social">
                                                <a href="#" target="_blank" class="readpage__share__social__button readpage__share__social__button--facebook">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.665 17.9166H10.9983V11.2416H14.0017L14.3317 7.92498H10.9983V6.24998C10.9983 6.02897 11.0861 5.817 11.2424 5.66072C11.3987 5.50444 11.6107 5.41665 11.8317 5.41665H14.3317V2.08331H11.8317C10.7266 2.08331 9.66679 2.5223 8.88539 3.3037C8.10399 4.0851 7.665 5.14491 7.665 6.24998V7.92498H5.99833L5.66833 11.2416H7.665V17.9166Z" fill="currentColor"></path></svg>
                                                </a>
                                                <a href="#" target="_blank" class="readpage__share__social__button readpage__share__social__button--whatsapp">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 1.66669C5.39746 1.66669 1.66663 5.39752 1.66663 10C1.66663 11.575 2.10413 13.05 2.86496 14.3067L2.12163 16.8334C2.07895 16.9784 2.07614 17.1323 2.1135 17.2788C2.15085 17.4254 2.227 17.5591 2.33393 17.6661C2.44085 17.773 2.57461 17.8491 2.72114 17.8865C2.86767 17.9238 3.02156 17.921 3.16663 17.8784L5.69329 17.135C6.99224 17.9208 8.48183 18.3353 9.99996 18.3334C14.6025 18.3334 18.3333 14.6025 18.3333 10C18.3333 5.39752 14.6025 1.66669 9.99996 1.66669ZM8.11496 11.8859C9.80079 13.5709 11.41 13.7934 11.9783 13.8142C12.8425 13.8459 13.6841 13.1859 14.0116 12.42C14.0526 12.3247 14.0674 12.2201 14.0545 12.1171C14.0417 12.0142 14.0015 11.9165 13.9383 11.8342C13.4816 11.2509 12.8641 10.8317 12.2608 10.415C12.1349 10.3277 11.98 10.2927 11.8288 10.3172C11.6776 10.3418 11.5418 10.424 11.45 10.5467L10.95 11.3092C10.9235 11.35 10.8826 11.3793 10.8354 11.391C10.7882 11.4028 10.7383 11.3962 10.6958 11.3725C10.3566 11.1784 9.86246 10.8484 9.50746 10.4934C9.15246 10.1384 8.84246 9.66669 8.66829 9.34919C8.64722 9.30873 8.64127 9.26209 8.6515 9.21764C8.66174 9.1732 8.68749 9.13385 8.72413 9.10669L9.49413 8.53502C9.60433 8.43968 9.67548 8.30703 9.69393 8.16248C9.71239 8.01793 9.67685 7.87165 9.59413 7.75169C9.22079 7.20502 8.78579 6.51002 8.15496 6.04919C8.07337 5.99057 7.97803 5.95401 7.87817 5.94306C7.77831 5.93211 7.67731 5.94714 7.58496 5.98669C6.81829 6.31502 6.15496 7.15669 6.18663 8.02252C6.20746 8.59085 6.42996 10.2 8.11496 11.8859Z" fill="currentColor"></path></svg>
                                                </a>
                                                <a href="#" target="_blank" class="readpage__share__social__button readpage__share__social__button--x">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.74004 12.2092L12.7084 17.5H18.5417L11.9934 8.76833L17.4417 2.5H15.2334L10.9692 7.405L7.29171 2.5H1.45837L7.71671 10.8458L1.93337 17.5H4.14171L8.74004 12.2092ZM13.5417 15.8333L4.79171 4.16667H6.45837L15.2084 15.8333H13.5417Z" fill="currentColor"></path></svg>
                                                </a>
                                                <a href="#" target="_blank" class="readpage__share__social__button readpage__share__social__button--telegram">
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5696 1.00093C11.7577 1.01024 12.9323 1.25474 14.0255 1.72032C15.1187 2.18589 16.1088 2.86333 16.9389 3.71354C17.7699 4.56405 18.4241 5.5708 18.8637 6.67563C19.3034 7.78045 19.5197 8.96144 19.5003 10.1504C18.8901 22.0232 1.89982 21.9224 1.50022 10.0109C1.49191 8.8197 1.72134 7.63884 2.17506 6.53743C2.62879 5.43603 3.2977 4.43622 4.14263 3.59654C4.98707 2.75771 5.99057 2.09602 7.09421 1.6503C8.19786 1.20457 9.37943 0.983796 10.5696 1.00093ZM12.2058 8.53936C12.2058 8.53936 12.2202 8.54836 12.1095 8.68876C11.9738 8.85257 11.8268 9.00656 11.6694 9.14956L9.37975 11.3726C8.89015 11.8622 8.90005 12.1628 9.46975 12.5732C10.1997 13.0934 10.9395 13.574 11.6901 14.0852C12.4398 14.5955 13.3596 15.3452 13.7403 14.2445C13.8369 13.9505 13.9101 13.6505 13.9599 13.3445C14.1201 12.4625 14.2803 11.5823 14.4198 10.6913C14.6097 9.44026 14.7897 8.18926 14.9499 6.92745C15.03 6.30645 14.6997 6.02655 14.0796 6.17685C13.8238 6.23699 13.5732 6.31703 13.3299 6.41625L6.79944 9.17026C6.18024 9.42947 5.56014 9.71027 4.94993 10.0109C4.79963 10.0901 4.60973 10.3106 4.61963 10.4609C4.62953 10.6112 4.84013 10.7813 5.01023 10.8515C5.42964 11.0216 5.87964 11.1413 6.31974 11.2817C6.65444 11.396 7.01223 11.4257 7.36119 11.368C7.71014 11.3104 8.03939 11.1672 8.31955 10.9514C9.15024 10.3592 9.99375 9.78512 10.8495 9.22966C11.25 8.95966 11.5299 8.80936 11.9205 8.53846C12.1203 8.43946 12.1653 8.39266 12.2058 8.45296V8.53936Z" fill="currentColor"></path></svg>
                                                </a>
                                                <a href="#" target="_blank" class="readpage__share__social__button readpage__share__social__button--linkedin">
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.05511 3.77844C6.05487 4.24988 5.86737 4.70191 5.53385 5.0351C5.20032 5.36829 4.7481 5.55535 4.27667 5.55511C3.80523 5.55487 3.35319 5.36737 3.02001 5.03385C2.68682 4.70032 2.49976 4.2481 2.5 3.77667C2.50024 3.30523 2.68774 2.85319 3.02126 2.52001C3.35479 2.18682 3.80701 1.99976 4.27844 2C4.74988 2.00024 5.20191 2.18774 5.5351 2.52126C5.86829 2.85479 6.05535 3.30701 6.05511 3.77844ZM6.10844 6.87139H2.55333V17.9989H6.10844V6.87139ZM11.7255 6.87139H8.18817V17.9989H11.69V12.1596C11.69 8.90669 15.9294 8.60451 15.9294 12.1596V17.9989H19.4401V10.9509C19.4401 5.46712 13.1653 5.67154 11.69 8.36453L11.7255 6.87139Z" fill="currentColor"></path></svg>
                                                </a>
                                            </div>
                                            <a href="#" target="_blank" class="readpage__share__copy text-primary border-primary hover:bg-primary hover:text-white">
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.50004 8.50002C9.50004 10.62 7.78671 12.3334 5.66671 12.3334C3.54671 12.3334 1.83337 10.62 1.83337 8.50002C1.83337 6.38002 3.54671 4.66669 5.66671 4.66669" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.16663 8.5C7.16663 6.29333 8.95996 4.5 11.1666 4.5C13.3733 4.5 15.1666 6.29333 15.1666 8.5C15.1666 10.7067 13.3733 12.5 11.1666 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                <span>Copy Link</span>
                                            </a>
                                        </div>
                                        <div class="readpage__share__dropdown__bottom border-neutral-200 dark:border-neutral-700">
                                            <a href="#" class="readpage__share__cancel hover:text-primary">Batalkan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="topik-list dark:text-black">
                                <li class="topik-list__item"><a class="topik-list__link bg-gray-200 hover:bg-primary hover:text-white" href="/">Vaksin</a></li>
                                <li class="topik-list__item"><a class="topik-list__link bg-gray-200 hover:bg-primary hover:text-white" href="/">Gaza</a></li>
                                <li class="topik-list__item"><a class="topik-list__link bg-gray-200 hover:bg-primary hover:text-white" href="/">Prabowo</a></li>
                                <li class="topik-list__item"><a class="topik-list__link bg-gray-200 hover:bg-primary hover:text-white" href="/">Ormas</a></li>
                                <li class="topik-list__item"><a class="topik-list__link bg-gray-200 hover:bg-primary hover:text-white" href="/">Ganjar Pranowo</a></li>
                                <li class="topik-list__item"><a class="topik-list__link bg-gray-200 hover:bg-primary hover:text-white" href="/">Bebaskan Gaza</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="section--aside">
                        <ul class="news-list-row">
                            <li class="news-list-row__item">
                                <a href="#" class="item item--row group">
                                    <figure class="item__figure">
                                        <img class="item__figure__img" :src="News1" alt="">
                                        <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                        <span class="item__time bg-black/70 text-white">
                                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                            <span>05:30</span>
                                        </span>
                                    </figure>
                                    <div class="item__box">
                                        <span class="item__title">VIDEO : Inovasi “Gila” Dari GITEX 2025</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="news-list-row__item">
                                <a href="#" class="item item--row group">
                                    <figure class="item__figure">
                                        <img class="item__figure__img" :src="News2" alt="">
                                        <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                        <span class="item__time bg-black/70 text-white">
                                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                            <span>05:30</span>
                                        </span>
                                    </figure>
                                    <div class="item__box">
                                        <span class="item__title">VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">Zeneration</span>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="news-list-row__item">
                                <a href="#" class="item item--row group">
                                    <figure class="item__figure">
                                        <img class="item__figure__img" :src="News3" alt="">
                                        <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                        <span class="item__time bg-black/70 text-white">
                                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                            <span>05:30</span>
                                        </span>
                                    </figure>
                                    <div class="item__box">
                                        <span class="item__title">VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="news-list-row__item">
                                <a href="#" class="item item--row group">
                                    <figure class="item__figure">
                                        <img class="item__figure__img" :src="News4" alt="">
                                        <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                        <span class="item__time bg-black/70 text-white">
                                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                            <span>05:30</span>
                                        </span>
                                    </figure>
                                    <div class="item__box">
                                        <span class="item__title">VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="news-list-row__item">
                                <a href="#" class="item item--row group">
                                    <figure class="item__figure">
                                        <img class="item__figure__img" :src="News1" alt="">
                                        <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                        <span class="item__time bg-black/70 text-white">
                                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                            <span>05:30</span>
                                        </span>
                                    </figure>
                                    <div class="item__box">
                                        <span class="item__title">VIDEO : Inovasi “Gila” Dari GITEX 2025</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="news-list-row__item">
                                <a href="#" class="item item--row group">
                                    <figure class="item__figure">
                                        <img class="item__figure__img" :src="News2" alt="">
                                        <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                        <span class="item__time bg-black/70 text-white">
                                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                            <span>05:30</span>
                                        </span>
                                    </figure>
                                    <div class="item__box">
                                        <span class="item__title">VIDEO ZENERATION: Bahan Dapur Bikin Bye Jerawat</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">Zeneration</span>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="news-list-row__item">
                                <a href="#" class="item item--row group">
                                    <figure class="item__figure">
                                        <img class="item__figure__img" :src="News3" alt="">
                                        <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                        <span class="item__time bg-black/70 text-white">
                                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                            <span>05:30</span>
                                        </span>
                                    </figure>
                                    <div class="item__box">
                                        <span class="item__title">VIDEO JOURNAL: KKN di Desa Penari dan Selera Horor Penonton Indonesia</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="news-list-row__item">
                                <a href="#" class="item item--row group">
                                    <figure class="item__figure">
                                        <img class="item__figure__img" :src="News4" alt="">
                                        <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                                        <span class="item__time bg-black/70 text-white">
                                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                            <span>05:30</span>
                                        </span>
                                    </figure>
                                    <div class="item__box">
                                        <span class="item__title">VIDEO Liputan6 Update: Truk Muatan Dilarang Inflasi Datang?</span>
                                        <div class="item__detail text-neutral-500 dark:text-white">
                                            <span class="item__tag">LIputan6 Update</span>
                                            <span class="item__published">1 jam lalu</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer6/>
</template>
<style>
    @import './assets/sass/components/readpage.css';
</style>