<script setup>
    import Story1 from '../assets/image/story-1.png';
    import Story2 from '../assets/image/story-2.png';
    import Story3 from '../assets/image/story-3.png';
    import Story4 from '../assets/image/story-4.png';
    import Story5 from '../assets/image/story-5.png';
</script>
<template>
    <div class="story">
        <div class="section__title">
            <span class="section__title__text">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8643 15.1169C16.1304 15.086 16.3995 15.1416 16.6318 15.2751C16.7995 15.3719 16.9429 15.5062 17.0498 15.6676C17.1567 15.8291 17.2244 16.0135 17.248 16.2057C17.2717 16.3978 17.25 16.5926 17.1855 16.7751C17.121 16.9576 17.0151 17.1229 16.876 17.2575C15.7345 18.3394 14.3551 19.1387 12.8486 19.5905C12.662 19.6449 12.4647 19.6557 12.2734 19.6208C12.0821 19.5859 11.9015 19.5062 11.7461 19.3893C11.5908 19.2725 11.4645 19.121 11.3779 18.9469C11.2914 18.7729 11.2466 18.5808 11.2471 18.3864C11.2475 18.1189 11.3339 17.8582 11.4932 17.6432C11.6524 17.4285 11.8762 17.2703 12.1318 17.1921C13.2624 16.8571 14.2983 16.2589 15.1533 15.4469C15.3488 15.2637 15.5981 15.1478 15.8643 15.1169ZM7.1416 0.411785C7.32796 0.356973 7.52463 0.346192 7.71582 0.380535C7.90728 0.414996 8.0884 0.494426 8.24414 0.611004C8.39978 0.727546 8.52629 0.878513 8.61328 1.05241C8.7003 1.2264 8.74526 1.41842 8.74512 1.61296C8.74456 1.88092 8.65792 2.14205 8.49805 2.3571C8.3382 2.57189 8.11366 2.72962 7.85742 2.80729C6.30859 3.26896 4.95033 4.2186 3.98438 5.51432C3.01843 6.81018 2.49612 8.38342 2.49609 9.99968C2.49609 11.616 3.01841 13.1891 3.98438 14.485C4.95034 15.7808 6.30853 16.7304 7.85742 17.1921C8.11387 17.2698 8.33817 17.4282 8.49805 17.6432C8.65787 17.8582 8.74451 18.1185 8.74512 18.3864C8.74526 18.5809 8.70026 18.773 8.61328 18.9469C8.52626 19.1209 8.39988 19.2727 8.24414 19.3893C8.08844 19.5058 7.90721 19.5844 7.71582 19.6188C7.52459 19.6532 7.32799 19.6424 7.1416 19.5876C5.07797 18.9708 3.26803 17.7045 1.98145 15.9772C0.694895 14.2499 0 12.1535 0 9.99968C2.83593e-05 7.84589 0.694887 5.74943 1.98145 4.02214C3.26803 2.29486 5.07801 1.02852 7.1416 0.411785ZM8.07422 6.24772C8.2058 6.24688 8.33599 6.28002 8.4502 6.34538L13.5391 9.31511C13.65 9.38076 13.7425 9.47381 13.8066 9.58561C13.8707 9.69737 13.9046 9.82398 13.9053 9.9528V10.0466C13.9046 10.1753 13.8707 10.302 13.8066 10.4137C13.7425 10.5255 13.65 10.6186 13.5391 10.6842L8.4502 13.654C8.33599 13.7193 8.2058 13.7534 8.07422 13.7526C7.87908 13.7525 7.69171 13.6748 7.55371 13.5368C7.41572 13.3988 7.338 13.2114 7.33789 13.0163V6.98405C7.33789 6.78874 7.4156 6.60067 7.55371 6.46257C7.6917 6.32462 7.87911 6.24785 8.07422 6.24772ZM18.4336 6.73796C18.6266 6.72586 18.8199 6.75951 18.998 6.83464C19.1762 6.90979 19.3349 7.02489 19.4609 7.17155C19.5869 7.31816 19.6771 7.492 19.7246 7.67936C20.0915 9.21502 20.0914 10.8156 19.7246 12.3512C19.6771 12.5386 19.5869 12.7124 19.4609 12.8591C19.3349 13.0057 19.1762 13.1218 18.998 13.1969C18.82 13.272 18.6265 13.3047 18.4336 13.2926C18.2407 13.2805 18.053 13.2234 17.8857 13.1266C17.6509 12.9908 17.4664 12.7826 17.3604 12.5329C17.2543 12.2831 17.2323 12.0052 17.2979 11.7419C17.4325 11.171 17.5006 10.5862 17.501 9.99968C17.4999 9.41838 17.4309 8.83926 17.2949 8.27409C17.2333 8.01259 17.2578 7.73757 17.3643 7.49089C17.4707 7.24438 17.6534 7.03848 17.8857 6.90397C18.053 6.80722 18.2407 6.7501 18.4336 6.73796ZM12.2734 0.379559C12.4647 0.344655 12.662 0.354408 12.8486 0.408855C14.3551 0.860605 15.7345 1.65989 16.876 2.74186C17.0152 2.87645 17.121 3.04174 17.1855 3.22429C17.2501 3.40674 17.2716 3.60155 17.248 3.79362C17.2244 3.9858 17.1567 4.17025 17.0498 4.33171C16.9429 4.49318 16.7995 4.62746 16.6318 4.72429C16.3995 4.85785 16.1305 4.9134 15.8643 4.88249C15.5981 4.85153 15.3488 4.73568 15.1533 4.55241C14.2979 3.741 13.2621 3.14294 12.1318 2.80729C11.8762 2.72902 11.6524 2.57092 11.4932 2.35612C11.3339 2.14112 11.2474 1.88052 11.2471 1.61296C11.2466 1.41852 11.2913 1.22649 11.3779 1.05241C11.4646 0.878353 11.5907 0.726885 11.7461 0.610027C11.9015 0.493177 12.0822 0.414469 12.2734 0.379559Z" fill="currentColor"/>
                </svg> STORY
            </span>
            <a href="#" class="section__title__more text-primary">
                <span>Selengkapnya</span>
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0985 6.00013L1.7333 10.2661C1.41411 10.578 0.896478 10.578 0.577285 10.2661C0.258092 9.95412 0.258092 9.44826 0.577285 9.13533L4.39618 5.43528L0.642758 1.73523C0.437132 1.42532 0.474986 1.01941 0.733808 0.750472C0.99263 0.482534 1.40592 0.422569 1.73329 0.604511L6.09849 4.87043C6.41768 5.18236 6.41769 5.6882 6.0985 6.00013Z" fill="currentColor"></path><path d="M0.822266 0.835938C1.03896 0.611607 1.3837 0.558854 1.66113 0.706055L6.0127 4.95801C6.2827 5.22187 6.28262 5.64821 6.0127 5.91211L1.64746 10.1787C1.37591 10.4438 0.93463 10.4438 0.663086 10.1787C0.393426 9.91518 0.392701 9.48869 0.662109 9.22363L4.48145 5.52344L4.57129 5.43652L4.48242 5.34766L0.741211 1.66016C0.572633 1.39941 0.604967 1.06188 0.822266 0.835938Z" stroke="currentColor" stroke-opacity="0.2" stroke-width="0.244917"></path></svg>
            </a>
        </div>
        <div class="story__wrapper">
            <div class="swiper story__swiper after:from-neutral-950">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story2" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story3" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story4" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story5" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story1" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story2" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story3" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story4" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story5" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#" class="item item--story group" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false">
                            <figure class="item__figure">
                                <img class="item__figure__img" :src="Story1" alt="">
                                <span class="item__time bg-black/70 text-white">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93777 5.13033L1.52473 0.747786C0.922419 0.391876 0 0.737256 0 1.61756V10.3805C0 11.1703 0.857133 11.6462 1.52473 11.2503L8.93777 6.86986C9.59905 6.48026 9.60116 5.51993 8.93777 5.13033Z" fill="currentColor"/></svg>
                                    <span>05:30</span>
                                </span>
                            </figure>
                            <!-- <iframe class="item__video vidio-embed" data-src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="swiper-button swiper-button-prev">
                <span class="swiper-button-icon bg-zinc-800 text-white">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8459 18.6619L22.0517 10.5653C22.6517 9.97327 23.6248 9.97327 24.2248 10.5653C24.8248 11.1574 24.8248 12.1175 24.2248 12.7114L17.046 19.734L24.1017 26.7566C24.4882 27.3448 24.4171 28.1152 23.9306 28.6257C23.444 29.1342 22.6671 29.248 22.0517 28.9027L13.8459 20.8061C13.2459 20.214 13.2459 19.254 13.8459 18.6619Z" fill="currentColor"/>
                    </svg>
                </span>
            </div>
            <div class="swiper-button swiper-button-next bg-gradient-to-r from-transparent to-50% to-zinc-950">
                <span class="swiper-button-icon bg-zinc-800 text-white">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.1541 20.8058L17.9483 28.9025C17.3483 29.4945 16.3752 29.4945 15.7752 28.9025C15.1752 28.3104 15.1752 27.3503 15.7752 26.7564L22.954 19.7338L15.8983 12.7111C15.5118 12.1229 15.5829 11.3525 16.0694 10.8421C16.556 10.3335 17.3329 10.2197 17.9483 10.5651L26.1541 18.6617C26.7541 19.2537 26.7541 20.2138 26.1541 20.8058Z" fill="currentColor"/>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>
<style>
    @import '../assets/sass/components/story.css';
</style>