<script setup>
    import Logo from '../assets/image/logo.png';
    import Avatar from '../assets/image/avatar.jpg';
    import Menu2 from '../assets/image/menu-2.png';
    import Menu3 from '../assets/image/menu-3.png';
</script>
<template>
    <header class="header bg-white dark:bg-zinc-900 dark:text-white">
        <div class="container">
            <div class="header--navbar">
                <h1 class="header--logo">
                    <meta itemprop="logo" content="https://cdn1-production-assets-kly.akamaized.net/logos/188/original/040376900_1740988466-Liputan6.png">
                    <meta itemprop="url" content="https://www.liputan6.com">
                    <a href="#" class="header--logo__link">
                        <img class="header--logo__image" :src="Logo" width="162" height="30" alt="logo">
                    </a>
                </h1>
                <div class="header--search">
                    <form id="headerSearch" class="header--search__form dark:bg-zinc-900" role="search" method="get" action="https://www.liputan6.com/search" autocomplete="off">
                        <input class="header--search__form__input border-neutral-200 placeholder:text-neutral-500 dark:placeholder:text-white dark:border-neutral-700" type="text" value="" name="q" id="q" placeholder="Video apa yang ingin anda lihat hari ini?" maxlength="100">
                        <button class="header--search__form__button from-primary to-secondary text-white" type="button">CARI</button>
                    </form>
                </div>
                <div class="header--right">
                    <a href="#" class="header__video border-primary bg-primary/10 after:border-white after:bg-primary dark:after:border-black">
                        <svg class="header__video__icon text-primary" width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.35 4.11436C8.13759 4.56908 8.53139 4.79643 8.66355 5.09326C8.77882 5.35217 8.77882 5.64783 8.66355 5.90674C8.53139 6.20357 8.13759 6.43092 7.35 6.88564L2.4 9.74352C1.61241 10.1982 1.21861 10.4256 0.895471 10.3916C0.613615 10.362 0.357566 10.2142 0.190982 9.9849C-4.3061e-07 9.72203 -4.10733e-07 9.26732 -3.70981e-07 8.35788L-1.21137e-07 2.64212C-8.1384e-08 1.73268 -6.15077e-08 1.27797 0.190983 1.0151C0.357567 0.785817 0.613615 0.637987 0.895472 0.608363C1.21861 0.5744 1.61241 0.801758 2.4 1.25647L7.35 4.11436Z" fill="currentColor"/></svg>
                        <span class="header__video__text">Video Terbaru</span>
                    </a>
                    <a href="#" class="header__live bg-primary text-white">
                        <span>LIVE</span>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33337 14.5H10.6667M8.00004 11.8333V14.5M2.66671 2.5H13.3334C14.0698 2.5 14.6667 3.09695 14.6667 3.83333V10.5C14.6667 11.2364 14.0698 11.8333 13.3334 11.8333H2.66671C1.93033 11.8333 1.33337 11.2364 1.33337 10.5V3.83333C1.33337 3.09695 1.93033 2.5 2.66671 2.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/></svg>
                    </a>
                    <span class="switch-theme" data-value="light">
                        <svg class="switch-theme__icon --dark" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3C9.00544 3.99456 8.4467 5.34348 8.4467 6.75C8.4467 8.15652 9.00544 9.50544 10 10.5C10.9946 11.4946 12.3435 12.0533 13.75 12.0533C15.1565 12.0533 16.5054 11.4946 17.5 10.5C17.5 11.9834 17.0601 13.4334 16.236 14.6668C15.4119 15.9001 14.2406 16.8614 12.8701 17.4291C11.4997 17.9968 9.99168 18.1453 8.53683 17.8559C7.08197 17.5665 5.7456 16.8522 4.6967 15.8033C3.64781 14.7544 2.9335 13.418 2.64411 11.9632C2.35472 10.5083 2.50325 9.00032 3.07091 7.62987C3.63856 6.25943 4.59986 5.08809 5.83323 4.26398C7.0666 3.43987 8.51664 3 10 3Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <svg class="switch-theme__icon --light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    </span>
                    <button class="header__menu">
                        <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3H14C14.5523 3 15 3.44772 15 4V14C15 14.5523 14.5523 15 14 15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3ZM0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V14C18 16.2091 16.2091 18 14 18H4C1.79086 18 0 16.2091 0 14V4ZM30.075 35.15C32.8778 35.15 35.15 32.8778 35.15 30.075C35.15 27.2722 32.8778 25 30.075 25C27.2722 25 25 27.2722 25 30.075C25 32.8778 27.2722 35.15 30.075 35.15ZM30.075 38.15C31.7631 38.15 33.3303 37.632 34.6261 36.7462L37.436 39.5562C38.0218 40.1419 38.9716 40.1419 39.5574 39.5562C40.1431 38.9704 40.1431 38.0206 39.5574 37.4348L36.7472 34.6247C37.6324 33.3291 38.15 31.7625 38.15 30.075C38.15 25.6153 34.5347 22 30.075 22C25.6153 22 22 25.6153 22 30.075C22 34.5347 25.6153 38.15 30.075 38.15ZM14 25H4C3.44772 25 3 25.4477 3 26V36C3 36.5523 3.44772 37 4 37H14C14.5523 37 15 36.5523 15 36V26C15 25.4477 14.5523 25 14 25ZM4 22C1.79086 22 0 23.7909 0 26V36C0 38.2091 1.79086 40 4 40H14C16.2091 40 18 38.2091 18 36V26C18 23.7909 16.2091 22 14 22H4ZM26 3H36C36.5523 3 37 3.44772 37 4V14C37 14.5523 36.5523 15 36 15H26C25.4477 15 25 14.5523 25 14V4C25 3.44772 25.4477 3 26 3ZM22 4C22 1.79086 23.7909 0 26 0H36C38.2091 0 40 1.79086 40 4V14C40 16.2091 38.2091 18 36 18H26C23.7909 18 22 16.2091 22 14V4Z" fill="currentColor"></path></svg>
                    </button>
                </div>
            </div>
            <ul class="header--submenu">
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">
                        <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9053 0C18.3786 3.04012e-05 20.3847 2.00567 20.3848 4.47949V15.9043C20.3848 18.3788 18.3787 20.3847 15.9053 20.3848H4.47754C2.00434 20.3839 0 18.378 0 15.9043V4.47949C7.43116e-05 2.00569 2.00587 6.86361e-05 4.47949 0H15.9053ZM10.1816 2.41895L6.53906 7.52539C6.23002 7.97243 5.95027 8.38535 5.7002 8.7627C5.44995 9.14006 5.2401 9.51314 5.07129 9.88281C4.90186 10.2526 4.77281 10.6308 4.68457 11.0156C4.59628 11.4008 4.55176 11.8172 4.55176 12.2637C4.55181 13.1109 4.70635 13.8812 5.01562 14.5742C5.32454 15.2674 5.73667 15.8648 6.25195 16.3652C6.76684 16.8659 7.36295 17.255 8.04004 17.5322C8.71687 17.8093 9.42392 17.9482 10.1602 17.9482C10.8809 17.9482 11.5799 17.8092 12.2568 17.5322C12.9338 17.2549 13.5341 16.87 14.0566 16.377C14.5789 15.8842 14.9947 15.2909 15.3037 14.5977C15.6129 13.9044 15.7676 13.1416 15.7676 12.3096C15.7676 11.5701 15.6424 10.8928 15.3926 10.2764C15.1421 9.66045 14.8149 9.12428 14.4102 8.66992C14.0053 8.21553 13.5376 7.84955 13.0078 7.57227C12.4781 7.295 11.9407 7.11745 11.3965 7.04004L14.6641 2.41895H10.1816ZM10.1602 10.3223C10.675 10.3224 11.113 10.5036 11.4736 10.8652C11.834 11.2274 12.0146 11.7011 12.0146 12.2861C12.0146 12.8719 11.8341 13.353 11.4736 13.7305C11.113 14.108 10.675 14.2968 10.1602 14.2969C9.64473 14.2969 9.20623 14.1041 8.8457 13.7188C8.48505 13.334 8.3057 12.8562 8.30566 12.2861C8.30566 11.7165 8.48495 11.246 8.8457 10.876C9.20623 10.5067 9.64473 10.3223 10.1602 10.3223Z" fill="url(#paint0_linear_561_13352)"/><defs><linearGradient id="paint0_linear_561_13352" x1="-133.138" y1="86.9538" x2="20.3846" y2="86.9538" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6600"/><stop offset="1" stop-color="#FF3300"/></linearGradient></defs></svg>
                    </a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">NEWS</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">BISNIS</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">BOLA</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">TV</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">SHOWBIZ</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">TEKNO</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">FOTO</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">HOT</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">CEK FAKTA</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">ISLAMI</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">CRYPTO</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">CITIZEN6</a>
                </li>
                <li class="header--submenu__item">
                    <a class="header--submenu__link hover:text-primary" href="#">SAHAM</a>
                </li>
                <li class="header--submenu__item submenu">
                    <a class="header--submenu__link hover:text-primary" href="#">
                        <span>LAINNYA</span>  
                        <svg class="submenu__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>                              
                    </a>
                    <ul class="submenu__list bg-white dark:bg-zinc-900">
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">CRYPTO</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">CITIZEN6</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">SAHAM</a>
                        </li>

                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Crypto</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Citizen6</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Regional</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Otomotif</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Opini</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Disabilitas</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Global</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">On Off</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Surabaya</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Lifestyle</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Health</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">English</a>
                        </li>
                        <li class="header--submenu__item">
                            <a class="header--submenu__link hover:text-primary hover:bg-neutral-100" href="#">Feeds</a>
                        </li>
                    </ul>
                </li>
                
            </ul>
            <div class="header--collapsed">
                <div class="header--collapsed__inner bg-white dark:bg-zinc-900">
                    <div class="header--collapsed__top">
                        <a href="#" class="header--collapsed__logo">
                            <img class="header--logo__image" :src="Logo" width="162" height="30" alt="logo">
                        </a>
                        <button class="header--collapsed__top__close dark:text-white">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 5.12191L5 15.1219M5 5.12191L15 15.1219" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <form id="headerSearch" class="header--collapsed__form bg-slate-100 dark:bg-slate-700" role="search" method="get" action="https://www.liputan6.com/search" autocomplete="off">
                            <svg class="text-slate-400 dark:text-white" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.75195 3.39421C13.073 3.56265 15.7137 6.3097 15.7139 9.67253L15.7061 9.99577C15.6426 11.2463 15.2132 12.4002 14.5234 13.3532L18.7783 17.6081C19.1688 17.9986 19.1688 18.6316 18.7783 19.0221C18.3878 19.4127 17.7548 19.4127 17.3643 19.0221L13.1094 14.7673C12.0748 15.5159 10.8034 15.9576 9.42871 15.9577L9.10449 15.9499C5.89079 15.7867 3.31339 13.2095 3.15039 9.99577L3.14258 9.67253C3.14273 6.20125 5.95743 3.38655 9.42871 3.3864L9.75195 3.39421ZM9.42871 4.6862C6.6754 4.68635 4.44253 6.91922 4.44238 9.67253C4.44261 12.4258 6.67544 14.6577 9.42871 14.6579C12.1819 14.6577 14.4138 12.4257 14.4141 9.67253C14.4139 6.91927 12.182 4.68643 9.42871 4.6862Z" fill="currentColor"/></svg>
                            <input class="header--collapsed__form__input dark:placeholder:text-white placeholder:text-neutral-500" type="text" value="" name="q" id="q" placeholder="Mau cari berita apa?" maxlength="100">
                            <svg class="header--collapsed__form__close text-white dark:text-black" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-slate-300" d="M10.9997 20.4105C16.0623 20.4105 20.1663 16.3065 20.1663 11.2438C20.1663 6.18124 16.0623 2.07718 10.9997 2.07718C5.93706 2.07718 1.83301 6.18124 1.83301 11.2438C1.83301 16.3065 5.93706 20.4105 10.9997 20.4105Z" fill="currentColor"/><path d="M13.75 8.49382L8.25 13.9938" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.25 8.49382L13.75 13.9938" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </form>
                    </div>
                    <ul class="header--collapsed__menu dark:text-white">
                        <li class="header--collapsed__menu__item --active">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.68323 1.77382C7.71245 1.71479 7.75758 1.66511 7.81353 1.63037C7.86949 1.59563 7.93404 1.57722 7.9999 1.57722C8.06576 1.57722 8.13031 1.59563 8.18626 1.63037C8.24222 1.66511 8.28735 1.71479 8.31656 1.77382L9.85656 4.89315C9.95802 5.09847 10.1078 5.27609 10.293 5.41079C10.4782 5.54549 10.6933 5.63323 10.9199 5.66649L14.3639 6.17049C14.4292 6.17994 14.4905 6.20747 14.5409 6.24995C14.5913 6.29244 14.6289 6.34819 14.6492 6.41089C14.6696 6.4736 14.6721 6.54076 14.6563 6.60478C14.6405 6.6688 14.6071 6.72712 14.5599 6.77315L12.0692 9.19849C11.905 9.35855 11.7821 9.55614 11.7111 9.77424C11.6402 9.99234 11.6233 10.2244 11.6619 10.4505L12.2499 13.8772C12.2614 13.9424 12.2544 14.0095 12.2296 14.0709C12.2048 14.1324 12.1632 14.1856 12.1096 14.2245C12.056 14.2634 11.9926 14.2865 11.9265 14.2911C11.8604 14.2957 11.7944 14.2816 11.7359 14.2505L8.65723 12.6318C8.45438 12.5253 8.22868 12.4697 7.99956 12.4697C7.77044 12.4697 7.54475 12.5253 7.3419 12.6318L4.2639 14.2505C4.20545 14.2814 4.1395 14.2953 4.07353 14.2907C4.00757 14.286 3.94424 14.2629 3.89076 14.224C3.83728 14.1851 3.79579 14.1319 3.771 14.0706C3.74622 14.0093 3.73914 13.9423 3.75056 13.8772L4.3379 10.4512C4.3767 10.225 4.35989 9.99275 4.28892 9.77452C4.21796 9.55628 4.09497 9.35859 3.93056 9.19849L1.4399 6.77382C1.39229 6.72784 1.35856 6.66942 1.34254 6.6052C1.32652 6.54099 1.32886 6.47357 1.34928 6.41061C1.36971 6.34766 1.40741 6.29171 1.45808 6.24914C1.50876 6.20657 1.57037 6.17909 1.6359 6.16982L5.07923 5.66649C5.30607 5.63349 5.52149 5.54586 5.70695 5.41114C5.89242 5.27643 6.04237 5.09867 6.1439 4.89315L7.68323 1.77382Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Berita Utama</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33333 7.57715L6.66667 8.91049L9.33333 6.24382M14 14.2438L11.1333 11.3772M12.6667 7.57715C12.6667 10.5227 10.2789 12.9105 7.33333 12.9105C4.38781 12.9105 2 10.5227 2 7.57715C2 4.63163 4.38781 2.24382 7.33333 2.24382C10.2789 2.24382 12.6667 4.63163 12.6667 7.57715Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Cek Fakta</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99967 4.24381V8.24381L10.6663 9.57715M14.6663 8.24381C14.6663 11.9257 11.6816 14.9105 7.99967 14.9105C4.31778 14.9105 1.33301 11.9257 1.33301 8.24381C1.33301 4.56192 4.31778 1.57715 7.99967 1.57715C11.6816 1.57715 14.6663 4.56192 14.6663 8.24381Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Terkini</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0994 5.57715L8.33941 10.3371L6.52608 7.61715L2.89941 11.2438" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.833 5.57715H13.0997V7.84381" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Terpopuler</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66634 6.91051V14.9105M9.99967 4.16385L9.33301 6.91051H13.2197C13.4267 6.91051 13.6308 6.95871 13.816 7.05128C14.0011 7.14385 14.1621 7.27825 14.2863 7.44385C14.4105 7.60944 14.4945 7.80168 14.5315 8.00533C14.5685 8.20899 14.5576 8.41847 14.4997 8.61718L12.9463 13.9505C12.8656 14.2275 12.6971 14.4707 12.4663 14.6438C12.2355 14.8169 11.9548 14.9105 11.6663 14.9105H2.66634C2.31272 14.9105 1.97358 14.77 1.72353 14.52C1.47348 14.2699 1.33301 13.9308 1.33301 13.5772V8.24385C1.33301 7.89022 1.47348 7.55108 1.72353 7.30104C1.97358 7.05099 2.31272 6.91051 2.66634 6.91051H4.50634C4.7544 6.91038 4.9975 6.84105 5.20831 6.71033C5.41912 6.5796 5.58929 6.39265 5.69967 6.17051L7.99967 1.57718C8.31406 1.58107 8.6235 1.65596 8.90488 1.79624C9.18625 1.93653 9.43229 2.13858 9.62461 2.38731C9.81693 2.63604 9.95055 2.92502 10.0155 3.23265C10.0804 3.54027 10.075 3.8586 9.99967 4.16385Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Rekomendasi</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__break border-neutral-200 dark:border-neutral-700"></li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99967 12.2438H6.66634M11.9997 9.57718H6.66634M2.66634 14.9105H13.333C13.6866 14.9105 14.0258 14.77 14.2758 14.52C14.5259 14.2699 14.6663 13.9308 14.6663 13.5772V2.91051C14.6663 2.55689 14.5259 2.21775 14.2758 1.9677C14.0258 1.71765 13.6866 1.57718 13.333 1.57718H5.33301C4.97939 1.57718 4.64025 1.71765 4.3902 1.9677C4.14015 2.21775 3.99967 2.55689 3.99967 2.91051V13.5772C3.99967 13.9308 3.8592 14.2699 3.60915 14.52C3.3591 14.77 3.01996 14.9105 2.66634 14.9105ZM2.66634 14.9105C2.31272 14.9105 1.97358 14.77 1.72353 14.52C1.47348 14.2699 1.33301 13.9308 1.33301 13.5772V7.57718C1.33301 7.22356 1.47348 6.88442 1.72353 6.63437C1.97358 6.38432 2.31272 6.24385 2.66634 6.24385H3.99967M7.33301 4.24385H11.333C11.7012 4.24385 11.9997 4.54232 11.9997 4.91051V6.24385C11.9997 6.61204 11.7012 6.91051 11.333 6.91051H7.33301C6.96482 6.91051 6.66634 6.61204 6.66634 6.24385V4.91051C6.66634 4.54232 6.96482 4.24385 7.33301 4.24385Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>News</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99967 8.24385H8.00634M10.6663 4.24385V2.91051C10.6663 2.55689 10.5259 2.21775 10.2758 1.9677C10.0258 1.71765 9.68663 1.57718 9.33301 1.57718H6.66634C6.31272 1.57718 5.97358 1.71765 5.72353 1.9677C5.47348 2.21775 5.33301 2.55689 5.33301 2.91051V4.24385M14.6663 8.91051C12.6882 10.2165 10.37 10.9127 7.99967 10.9127C5.62931 10.9127 3.31115 10.2165 1.33301 8.91051M2.66634 4.24385H13.333C14.0694 4.24385 14.6663 4.8408 14.6663 5.57718V12.2438C14.6663 12.9802 14.0694 13.5772 13.333 13.5772H2.66634C1.92996 13.5772 1.33301 12.9802 1.33301 12.2438V5.57718C1.33301 4.8408 1.92996 4.24385 2.66634 4.24385Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Bisnis</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2.74384H3C2.60218 2.74384 2.22064 2.90187 1.93934 3.18318C1.65804 3.46448 1.5 3.84601 1.5 4.24384V11.2438C1.5 11.6417 1.65804 12.0232 1.93934 12.3045C2.22064 12.5858 2.60218 12.7438 3 12.7438H13C13.3978 12.7438 13.7794 12.5858 14.0607 12.3045C14.342 12.0232 14.5 11.6417 14.5 11.2438V4.24384C14.5 3.84601 14.342 3.46448 14.0607 3.18318C13.7794 2.90187 13.3978 2.74384 13 2.74384ZM13.5 11.2438C13.5 11.3764 13.4473 11.5036 13.3536 11.5974C13.2598 11.6912 13.1326 11.7438 13 11.7438H3C2.86739 11.7438 2.74021 11.6912 2.64645 11.5974C2.55268 11.5036 2.5 11.3764 2.5 11.2438V4.24384C2.5 4.11123 2.55268 3.98405 2.64645 3.89028C2.74021 3.79651 2.86739 3.74384 3 3.74384H13C13.1326 3.74384 13.2598 3.79651 13.3536 3.89028C13.4473 3.98405 13.5 4.11123 13.5 4.24384V11.2438ZM10.5 14.2438C10.5 14.3764 10.4473 14.5036 10.3536 14.5974C10.2598 14.6912 10.1326 14.7438 10 14.7438H6C5.86739 14.7438 5.74021 14.6912 5.64645 14.5974C5.55268 14.5036 5.5 14.3764 5.5 14.2438C5.5 14.1112 5.55268 13.984 5.64645 13.8903C5.74021 13.7965 5.86739 13.7438 6 13.7438H10C10.1326 13.7438 10.2598 13.7965 10.3536 13.8903C10.4473 13.984 10.5 14.1112 10.5 14.2438ZM10.2775 7.32759L7.2775 5.32759C7.20218 5.27733 7.11463 5.24848 7.0242 5.2441C6.93376 5.23971 6.84383 5.25997 6.76401 5.30271C6.68418 5.34544 6.61746 5.40905 6.57097 5.48674C6.52447 5.56443 6.49994 5.65329 6.5 5.74384V9.74384C6.49994 9.83438 6.52447 9.92324 6.57097 10.0009C6.61746 10.0786 6.68418 10.1422 6.76401 10.185C6.84383 10.2277 6.93376 10.248 7.0242 10.2436C7.11463 10.2392 7.20218 10.2103 7.2775 10.1601L10.2775 8.16009C10.3461 8.11444 10.4023 8.05256 10.4412 7.97994C10.4801 7.90732 10.5005 7.82622 10.5005 7.74384C10.5005 7.66145 10.4801 7.58035 10.4412 7.50773C10.4023 7.43511 10.3461 7.37323 10.2775 7.32759ZM7.5 8.80946V6.68134L9.09875 7.74384L7.5 8.80946Z" fill="currentColor"/></svg>
                                <span>Video</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9987 8.36386C13.9994 8.32391 14.0001 8.28394 14.0001 8.24385C14.0001 6.64128 13.3761 5.13462 12.2429 4.0014C11.1097 2.86802 9.60286 2.24384 8.00007 2.24384C6.39728 2.24384 4.89045 2.86802 3.75718 4.0014C2.62402 5.13462 2 6.6413 2 8.24385C2 8.24888 2.00016 8.25387 2.00019 8.2589V8.25947C2.00424 9.85618 2.62773 11.3567 3.75718 12.4863C4.89045 13.6197 6.39728 14.2438 8.00007 14.2438C9.60286 14.2438 11.1097 13.6197 12.243 12.4863C13.3292 11.4 13.9472 9.97039 13.9965 8.44224C14.0002 8.41617 14.0008 8.3899 13.9987 8.36386ZM12.3852 11.217H10.4553L9.53954 9.81621L10.1451 7.95521L11.7818 7.47279L13.2867 8.5645C13.2298 9.52331 12.9185 10.4336 12.3852 11.217ZM5.40901 11.217H3.61494C3.05553 10.3953 2.74037 9.434 2.70691 8.42355L4.25665 7.2993L5.84098 7.93535L6.44927 9.80459L5.40901 11.217ZM3.41196 5.59339L3.79377 6.76675L2.75238 7.5222C2.84499 6.838 3.06897 6.18514 3.41196 5.59339ZM7.09522 9.51626L6.53832 7.80487L7.99629 6.74719L9.45427 7.80487L8.89736 9.51626H7.09522ZM12.2619 6.95277L12.6617 5.72431C12.9886 6.32744 13.1945 6.99005 13.267 7.68191L12.2619 6.95277ZM12.1666 4.97237L11.5711 6.80243L9.93441 7.28485L8.3471 6.13334L8.33757 4.43928L9.90896 3.29931C10.5895 3.56186 11.2138 3.96642 11.745 4.49775C11.896 4.6487 12.0365 4.80725 12.1666 4.97237ZM9.05449 3.05083L7.98475 3.82685L6.92193 3.05582C7.27283 2.98365 7.63355 2.94635 8.00007 2.94635C8.35831 2.94635 8.71108 2.98182 9.05449 3.05083ZM6.07145 3.3072L7.63397 4.44073L7.6435 6.13479L6.07544 7.27232L4.4911 6.63627L3.91633 4.86994C4.0228 4.7415 4.13563 4.61722 4.25508 4.49775C4.78121 3.97157 5.3986 3.56994 6.07145 3.3072ZM4.18634 11.9195H5.33138L5.68692 13.0121C5.16288 12.7572 4.67926 12.4142 4.2551 11.9899C4.23184 11.9667 4.20909 11.9431 4.18634 11.9195ZM6.53208 13.3359L5.97731 11.6311L7.01757 10.2188H8.96247L9.87826 11.6195L9.30539 13.3801C8.88381 13.4865 8.44616 13.5414 8.00007 13.5414C7.49628 13.5413 7.00334 13.4711 6.53208 13.3359ZM10.1384 13.0934L10.5205 11.9195H11.8138C11.7911 11.9431 11.7683 11.9667 11.7451 11.9899C11.2741 12.461 10.73 12.8323 10.1384 13.0934Z" fill="currentColor"/></svg>
                                <span>Bola</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.14595 5.08502H11.3489C13.3366 5.08502 13.8335 5.58193 13.8335 7.56398V11.0982C13.8335 13.0858 13.3366 13.5771 11.3545 13.5771H5.14595C3.1639 13.5827 2.66699 13.0858 2.66699 11.1037V7.56398C2.66699 5.58193 3.1639 5.08502 5.14595 5.08502Z" stroke="currentColor" stroke-width="0.916826" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.66699 10.9105H13.8335" stroke="currentColor" stroke-width="0.916826" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.58301 2.9105L7.54429 4.67363L10.2497 2.24384" stroke="currentColor" stroke-width="0.916826" stroke-linecap="round"/><circle cx="5.33366" cy="12.2438" r="0.666667" fill="currentColor"/></svg>
                                <span>TV</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.62971 9.69976C3.73856 9.5043 3.92206 9.36139 4.14786 9.32229C4.37364 9.28318 4.59586 9.35582 4.7662 9.50296M7.49008 11.621C7.27234 12.0119 6.90534 12.2977 6.45376 12.3759C6.00219 12.4541 5.55776 12.3088 5.21708 12.0146M7.03914 9.10929C7.14801 8.91384 7.33154 8.77086 7.55734 8.73176C7.78308 8.69265 8.00534 8.76536 8.17568 8.91243M8.71281 5.13473C7.94574 5.82981 6.78034 6.38258 5.42016 6.61816C4.05996 6.85374 2.77238 6.72581 1.80954 6.33034C1.74792 6.30504 1.68155 6.2964 1.6172 6.30754C1.42749 6.3404 1.30306 6.53059 1.33928 6.73233L1.96453 10.2153C2.43082 12.8128 4.69737 14.0602 5.74871 14.5065C6.09704 14.6544 6.48086 14.6733 6.85454 14.6086C7.22828 14.5438 7.58234 14.3971 7.85814 14.1412C8.69074 13.3686 10.3862 11.4351 9.91994 8.83749L9.29468 5.35451C9.25848 5.15275 9.07534 5.01583 8.88561 5.04869C8.82128 5.05983 8.76188 5.09025 8.71281 5.13473Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5438 11.4438C9.78613 11.4437 10.026 11.402 10.2509 11.3065C11.3023 10.8602 13.5689 9.61283 14.0351 7.01533L14.6604 3.53233C14.6966 3.33058 14.5722 3.14039 14.3825 3.10753C14.3181 3.09639 14.2517 3.10503 14.1901 3.13033C13.2273 3.52579 11.9397 3.65373 10.5795 3.41815C9.21933 3.18257 8.05393 2.62979 7.28687 1.93472C7.2378 1.89024 7.1784 1.85982 7.11407 1.84868C6.92433 1.81582 6.7412 1.95274 6.705 2.1545L6.07973 5.63749C6.02493 5.94279 5.99999 6.23891 6 6.52505" stroke="currentColor" stroke-linejoin="round"/></svg>
                                <span>Showbiz</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.74384H13V4.24384C13 3.84601 12.842 3.46448 12.5607 3.18318C12.2794 2.90187 11.8978 2.74384 11.5 2.74384H2.5C2.10218 2.74384 1.72064 2.90187 1.43934 3.18318C1.15804 3.46448 1 3.84601 1 4.24384V10.2438C1 10.6417 1.15804 11.0232 1.43934 11.3045C1.72064 11.5858 2.10218 11.7438 2.5 11.7438H9.5V12.2438C9.5 12.6417 9.65804 13.0232 9.93934 13.3045C10.2206 13.5858 10.6022 13.7438 11 13.7438H14C14.3978 13.7438 14.7794 13.5858 15.0607 13.3045C15.342 13.0232 15.5 12.6417 15.5 12.2438V6.24384C15.5 5.84601 15.342 5.46448 15.0607 5.18318C14.7794 4.90187 14.3978 4.74384 14 4.74384ZM2.5 10.7438C2.36739 10.7438 2.24021 10.6912 2.14645 10.5974C2.05268 10.5036 2 10.3764 2 10.2438V4.24384C2 4.11123 2.05268 3.98405 2.14645 3.89028C2.24021 3.79651 2.36739 3.74384 2.5 3.74384H11.5C11.6326 3.74384 11.7598 3.79651 11.8536 3.89028C11.9473 3.98405 12 4.11123 12 4.24384V4.74384H11C10.6022 4.74384 10.2206 4.90187 9.93934 5.18318C9.65804 5.46448 9.5 5.84601 9.5 6.24384V10.7438H2.5ZM14.5 12.2438C14.5 12.3764 14.4473 12.5036 14.3536 12.5974C14.2598 12.6912 14.1326 12.7438 14 12.7438H11C10.8674 12.7438 10.7402 12.6912 10.6464 12.5974C10.5527 12.5036 10.5 12.3764 10.5 12.2438V6.24384C10.5 6.11123 10.5527 5.98405 10.6464 5.89028C10.7402 5.79651 10.8674 5.74384 11 5.74384H14C14.1326 5.74384 14.2598 5.79651 14.3536 5.89028C14.4473 5.98405 14.5 6.11123 14.5 6.24384V12.2438ZM8.5 13.2438C8.5 13.3764 8.44732 13.5036 8.35355 13.5974C8.25979 13.6912 8.13261 13.7438 8 13.7438H5.5C5.36739 13.7438 5.24021 13.6912 5.14645 13.5974C5.05268 13.5036 5 13.3764 5 13.2438C5 13.1112 5.05268 12.984 5.14645 12.8903C5.24021 12.7965 5.36739 12.7438 5.5 12.7438H8C8.13261 12.7438 8.25979 12.7965 8.35355 12.8903C8.44732 12.984 8.5 13.1112 8.5 13.2438ZM13.5 7.24384C13.5 7.37644 13.4473 7.50362 13.3536 7.59739C13.2598 7.69116 13.1326 7.74384 13 7.74384H12C11.8674 7.74384 11.7402 7.69116 11.6464 7.59739C11.5527 7.50362 11.5 7.37644 11.5 7.24384C11.5 7.11123 11.5527 6.98405 11.6464 6.89028C11.7402 6.79651 11.8674 6.74384 12 6.74384H13C13.1326 6.74384 13.2598 6.79651 13.3536 6.89028C13.4473 6.98405 13.5 7.11123 13.5 7.24384Z" fill="currentColor"/></svg>
                                <span>Tekno</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.0808 13.3505H11.2271C13.1091 13.3505 13.8592 12.4759 13.9478 11.4098L14.3024 7.13504C14.3979 6.01718 13.225 5.07011 11.7453 5.07011C11.3294 5.07011 10.9475 4.88898 10.7566 4.60951L10.2656 3.8591C9.95193 3.38815 9.13365 3 8.43812 3H6.87657C6.17422 3 5.35594 3.38815 5.04227 3.8591L4.5513 4.60951C4.36037 4.88898 3.97851 5.07011 3.56255 5.07011C2.08284 5.07011 0.909976 6.01718 1.00544 7.13504L1.36003 11.4098C1.44186 12.4759 2.19876 13.3505 4.0808 13.3505Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.56836 5.21796H8.50909" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.53801 11.6869C8.69598 11.6869 9.64046 10.7424 9.64046 9.58445C9.64046 8.42648 8.69598 7.48199 7.53801 7.48199C6.38004 7.48199 5.43555 8.42648 5.43555 9.58445C5.43555 10.7424 6.38004 11.6869 7.53801 11.6869Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Foto</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66634 9.9105C6.10837 9.9105 6.53229 9.73491 6.84485 9.42235C7.15741 9.10979 7.33301 8.68586 7.33301 8.24384C7.33301 7.32384 6.99967 6.9105 6.66634 6.24384C5.95167 4.81517 6.51701 3.54117 7.99967 2.24384C8.33301 3.9105 9.33301 5.5105 10.6663 6.57717C11.9997 7.64384 12.6663 8.9105 12.6663 10.2438C12.6663 10.8567 12.5456 11.4635 12.3111 12.0297C12.0766 12.5959 11.7328 13.1103 11.2995 13.5437C10.8662 13.977 10.3517 14.3208 9.78553 14.5553C9.21934 14.7898 8.61251 14.9105 7.99967 14.9105C7.38684 14.9105 6.78 14.7898 6.21382 14.5553C5.64763 14.3208 5.13318 13.977 4.69984 13.5437C4.2665 13.1103 3.92276 12.5959 3.68824 12.0297C3.45371 11.4635 3.33301 10.8567 3.33301 10.2438C3.33301 9.47517 3.62167 8.7145 3.99967 8.24384C3.99967 8.68586 4.17527 9.10979 4.48783 9.42235C4.80039 9.73491 5.22431 9.9105 5.66634 9.9105Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Hot</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.53087 8.39019C6.53085 7.01733 7.07427 5.70029 8.04237 4.72688C9.01047 3.75347 10.3245 3.20286 11.6974 3.19537C10.7685 2.61036 9.69983 2.28508 8.60258 2.25341C7.50533 2.22174 6.41966 2.48484 5.45863 3.01531C4.49761 3.54578 3.69639 4.32421 3.13842 5.26953C2.58044 6.21485 2.28613 7.29248 2.28613 8.39019C2.28613 9.4879 2.58044 10.5655 3.13842 11.5109C3.69639 12.4562 4.49761 13.2346 5.45863 13.7651C6.41966 14.2955 7.50533 14.5586 8.60258 14.527C9.69983 14.4953 10.7685 14.17 11.6974 13.585C10.3245 13.5775 9.01047 13.0269 8.04237 12.0535C7.07427 11.0801 6.53085 9.76305 6.53087 8.39019Z" stroke="currentColor" stroke-width="0.944513" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5928 5.59442L12.4523 7.30399H14.1619L12.8774 8.62631L13.2835 10.5153L11.5928 9.57082L9.97772 10.5153L10.3177 8.62631L9.0332 7.30399H10.7428L11.5928 5.59442Z" stroke="currentColor" stroke-width="0.944513" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Islami</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33301 10.2438H8.66634C9.01996 10.2438 9.3591 10.1033 9.60915 9.85329C9.8592 9.60324 9.99967 9.2641 9.99967 8.91048C9.99967 8.55686 9.8592 8.21772 9.60915 7.96767C9.3591 7.71762 9.01996 7.57715 8.66634 7.57715H6.66634C6.26634 7.57715 5.93301 7.71048 5.73301 7.97715L1.99967 11.5771M4.66634 14.2438L5.73301 13.3105C5.93301 13.0438 6.26634 12.9105 6.66634 12.9105H9.33301C10.0663 12.9105 10.733 12.6438 11.1997 12.1105L14.2663 9.17715C14.5236 8.93403 14.6737 8.59868 14.6837 8.24486C14.6938 7.89104 14.5628 7.54774 14.3197 7.29048C14.0766 7.03322 13.7412 6.88308 13.3874 6.87307C13.0336 6.86307 12.6903 6.99403 12.433 7.23715L9.63301 9.83715M1.33301 10.9105L5.33301 14.9105M12.5997 6.24381C12.5997 7.31157 11.7341 8.17715 10.6663 8.17715C9.59859 8.17715 8.73301 7.31157 8.73301 6.24381C8.73301 5.17606 9.59859 4.31048 10.6663 4.31048C11.7341 4.31048 12.5997 5.17606 12.5997 6.24381ZM5.99967 3.57715C5.99967 4.68172 5.10424 5.57715 3.99967 5.57715C2.89511 5.57715 1.99967 4.68172 1.99967 3.57715C1.99967 2.47258 2.89511 1.57715 3.99967 1.57715C5.10424 1.57715 5.99967 2.47258 5.99967 3.57715Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Saham</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.893 7.93506L8.39296 0.935064C8.34618 0.875533 8.28648 0.827404 8.21838 0.794309C8.15028 0.761215 8.07556 0.744019 7.99984 0.744019C7.92412 0.744019 7.8494 0.761215 7.7813 0.794309C7.7132 0.827404 7.6535 0.875533 7.60671 0.935064L2.10671 7.93506C2.03758 8.02313 2 8.13185 2 8.24381C2 8.35578 2.03758 8.4645 2.10671 8.55256L7.60671 15.5526C7.6535 15.6121 7.7132 15.6602 7.7813 15.6933C7.8494 15.7264 7.92412 15.7436 7.99984 15.7436C8.07556 15.7436 8.15028 15.7264 8.21838 15.6933C8.28648 15.6602 8.34618 15.6121 8.39296 15.5526L13.893 8.55256C13.9621 8.4645 13.9997 8.35578 13.9997 8.24381C13.9997 8.13185 13.9621 8.02313 13.893 7.93506ZM8.49984 2.68944L12.7136 8.05194L8.49984 9.96756V2.68944ZM7.49984 9.96756L3.28609 8.05194L7.49984 2.68944V9.96756ZM7.49984 11.0657V13.7982L4.16046 9.54819L7.49984 11.0657ZM8.49984 11.0657L11.8392 9.54756L8.49984 13.7976V11.0657Z" fill="currentColor"/></svg>
                                <span>Crypto</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0736 8.64581C12.042 8.64054 12.0052 8.64054 11.9735 8.64581C11.2465 8.61947 10.667 8.02415 10.667 7.28659C10.667 6.53322 11.2729 5.92737 12.0262 5.92737C12.7796 5.92737 13.3855 6.53849 13.3855 7.28659C13.3802 8.02415 12.8007 8.61947 12.0736 8.64581Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5314 12.4812C12.2532 12.6024 13.0487 12.476 13.6072 12.1019C14.35 11.6067 14.35 10.7954 13.6072 10.3002C13.0434 9.9261 12.2374 9.79966 11.5156 9.9261" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.35674 8.6458C3.38835 8.64054 3.42523 8.64054 3.45684 8.6458C4.18387 8.61946 4.76338 8.02415 4.76338 7.28659C4.76338 6.53322 4.15753 5.92737 3.40415 5.92737C2.65078 5.92737 2.04492 6.53849 2.04492 7.28659C2.05019 8.02415 2.62971 8.61946 3.35674 8.6458Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.89945 12.4812C3.17769 12.6023 2.38217 12.4759 1.82373 12.1018C1.08089 11.6066 1.08089 10.7953 1.82373 10.3001C2.38744 9.92604 3.19349 9.7996 3.91525 9.92604" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.65834 7.11417C7.61722 7.10732 7.56923 7.10732 7.5281 7.11417C6.58215 7.0799 5.82812 6.30532 5.82812 5.34566C5.82812 4.36544 6.61642 3.57715 7.59665 3.57715C8.57688 3.57715 9.36518 4.37229 9.36518 5.34566C9.35833 6.30532 8.6043 7.08675 7.65834 7.11417Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.66337 9.27346C4.69685 9.9178 4.69685 10.9734 5.66337 11.6178C6.76013 12.3512 8.55607 12.3512 9.65284 11.6178C10.6194 10.9734 10.6194 9.9178 9.65284 9.27346C8.56293 8.54687 6.76013 8.54687 5.66337 9.27346Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Citizen6</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9901 15.4713L13.6468 13.9516C13.6007 13.7476 13.4047 13.6014 13.1776 13.6014H12.994V12.5211C12.994 12.2784 12.7795 12.0816 12.5149 12.0816H12.3312V8.71441C12.3312 7.25484 11.4684 5.9768 10.1862 5.28624L10.035 3.62499C10.0142 3.39727 9.80668 3.22211 9.5575 3.22211H9.39329L9.24109 1.40576C9.22196 1.17681 9.01379 1 8.76341 1H7.2367C6.98635 1 6.77818 1.17681 6.75899 1.40579L6.60679 3.22213H6.44258C6.19343 3.22213 5.98585 3.3973 5.96512 3.62502L5.81391 5.28627C4.53165 5.9768 3.66885 7.25484 3.66885 8.71444V12.0817H3.48522C3.22062 12.0817 3.0061 12.2784 3.0061 12.5211V13.6014H2.82247C2.59533 13.6014 2.3994 13.7477 2.35331 13.9517L2.00997 15.4714C1.98072 15.6008 2.01659 15.7355 2.10756 15.838C2.19852 15.9405 2.33501 16 2.47913 16H13.521C13.6651 16 13.8016 15.9405 13.8926 15.838C13.9836 15.7354 14.0194 15.6008 13.9901 15.4713ZM4.62712 9.44493H11.373V12.0816H4.62712V9.44493ZM7.68043 1.8789H8.31971L8.43227 3.22213H7.56787L7.68043 1.8789ZM6.88337 4.10104H9.11674L9.1889 4.89405C8.811 4.79496 8.41215 4.74185 8.00004 4.74185C7.58793 4.74185 7.18908 4.79496 6.81118 4.89405L6.88337 4.10104ZM8.00007 5.62075C9.80569 5.62075 11.2843 6.92883 11.3691 8.56605H4.63108C4.71579 6.92883 6.19446 5.62075 8.00007 5.62075ZM3.96437 12.9605H12.0358V13.6014H3.96437V12.9605ZM3.06771 15.1211L3.2125 14.4803H12.7876L12.9324 15.1211H3.06771Z" fill="currentColor"/><path d="M10.0835 10.2002H9.82666C9.64599 10.2002 9.49951 10.3793 9.49951 10.6002C9.49951 10.8211 9.64599 11.0002 9.82666 11.0002H10.0835C10.2642 11.0002 10.4106 10.8211 10.4106 10.6002C10.4106 10.3793 10.2642 10.2002 10.0835 10.2002Z" fill="currentColor"/><path d="M7.95849 10.2002H7.70166C7.52099 10.2002 7.37451 10.3793 7.37451 10.6002C7.37451 10.8211 7.52099 11.0002 7.70166 11.0002H7.95849C8.13917 11.0002 8.28564 10.8211 8.28564 10.6002C8.28564 10.3793 8.13917 10.2002 7.95849 10.2002Z" fill="currentColor"/><path d="M5.83398 10.2002H5.57715C5.39647 10.2002 5.25 10.3793 5.25 10.6002C5.25 10.8211 5.39647 11.0002 5.57715 11.0002H5.83398C6.01465 11.0002 6.16112 10.8211 6.16112 10.6002C6.16112 10.3793 6.01465 10.2002 5.83398 10.2002Z" fill="currentColor"/><path d="M8.99511 7.8H9.25195C9.43262 7.8 9.57909 7.62091 9.57909 7.4C9.57909 7.17909 9.43262 7 9.25195 7H8.99511C8.81444 7 8.66797 7.17909 8.66797 7.4C8.66797 7.62091 8.81444 7.8 8.99511 7.8Z" fill="currentColor"/><path d="M6.87109 7.8H7.12792C7.30859 7.8 7.45507 7.62091 7.45507 7.4C7.45507 7.17909 7.30859 7 7.12792 7H6.87109C6.69042 7 6.54395 7.17909 6.54395 7.4C6.54395 7.62091 6.69042 7.8 6.87109 7.8Z" fill="currentColor"/></svg>
                                <span>Regional</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66699 8.24384L3.00033 8.9105" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.3333 8.57715L13 8.91048" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.33301 11.9105L5.49679 11.501C5.74035 10.8922 5.86213 10.5877 6.11608 10.4158C6.37003 10.2438 6.69794 10.2438 7.35374 10.2438H8.64561C9.30141 10.2438 9.62934 10.2438 9.88327 10.4158C10.1372 10.5877 10.259 10.8922 10.5025 11.501L10.6663 11.9105" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.33301 11.5771V13.4985C1.33301 13.7509 1.49351 13.9818 1.74759 14.0947C1.91246 14.168 2.06993 14.2438 2.26006 14.2438H3.40595C3.59609 14.2438 3.75355 14.168 3.91842 14.0947C4.17251 13.9818 4.33301 13.7509 4.33301 13.4985V12.2438" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.667 12.2438V13.4985C11.667 13.7509 11.8275 13.9818 12.0816 14.0947C12.2465 14.168 12.4039 14.2438 12.5941 14.2438H13.7399C13.9301 14.2438 14.0875 14.168 14.2524 14.0947C14.5065 13.9818 14.667 13.7509 14.667 13.4985V11.5771" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.333 5.91048L13.9997 5.57715" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.66667 5.91048L2 5.57715" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 6.24384L3.72553 4.06723C4.01888 3.1872 4.16555 2.74719 4.51473 2.49552C4.86391 2.24384 5.32773 2.24384 6.25536 2.24384H9.74467C10.6723 2.24384 11.1361 2.24384 11.4853 2.49552C11.8345 2.74719 11.9811 3.1872 12.2745 4.06723L13 6.24384" stroke="currentColor" stroke-linejoin="round"/><path d="M2.99967 6.24384H12.9997C13.6378 6.9195 14.6663 7.86044 14.6663 8.91024V11.224C14.6663 11.6043 14.4133 11.9244 14.0775 11.9688L11.9997 12.2438H3.99967L1.92178 11.9688C1.58604 11.9244 1.33301 11.6043 1.33301 11.224V8.91024C1.33301 7.86044 2.36153 6.9195 2.99967 6.24384Z" stroke="currentColor" stroke-linejoin="round"/></svg>
                                <span>Otomotif</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9209 1.68091C9.10653 1.68105 9.85411 2.21186 10.2812 2.90942C10.6341 3.48592 10.7546 4.15246 10.7744 4.67407C10.9502 4.7871 11.0969 4.92174 11.1729 5.09399C11.2328 5.23012 11.2431 5.37594 11.2031 5.51392C11.1659 5.6422 11.0926 5.73985 11.0264 5.80884C10.8997 5.94087 10.7297 6.03563 10.6123 6.09692C10.5515 6.12869 10.4893 6.15906 10.4434 6.18188C10.3088 6.48447 10.13 6.76326 9.90723 7.00317C9.64912 7.28112 9.34122 7.50331 9 7.65552C8.65883 7.8077 8.29215 7.8869 7.9209 7.88696C7.54947 7.88696 7.18214 7.80777 6.84082 7.65552C6.4996 7.50331 6.1917 7.28113 5.93359 7.00317C5.71533 6.76812 5.53894 6.49589 5.40527 6.20044C5.35323 6.17883 5.29335 6.15688 5.23438 6.12817C5.10564 6.06551 4.93069 5.96767 4.7998 5.82837C4.65892 5.67831 4.51881 5.41463 4.65332 5.10474C4.72857 4.93153 4.873 4.79449 5.04883 4.68091C5.0375 4.17068 5.13741 3.51172 5.48047 2.93579C5.9054 2.2226 6.67857 1.68091 7.9209 1.68091Z" stroke="currentColor" stroke-width="0.8"/><path d="M8.37933 6.08929C8.37907 6.38305 8.14615 6.62114 7.85878 6.62141C7.57141 6.62114 7.3385 6.38305 7.33824 6.08929H6.99121C6.99121 6.5791 7.37962 6.97615 7.85878 6.97615C8.33794 6.97615 8.72635 6.5791 8.72635 6.08929H8.37933Z" fill="currentColor"/><ellipse cx="6.89441" cy="5.09253" rx="0.308473" ry="0.30847" fill="currentColor"/><ellipse cx="8.92175" cy="5.09253" rx="0.308473" ry="0.30847" fill="currentColor"/><path d="M5.36914 3.43265L6.80231 2.85939C6.96366 2.79485 7.14649 2.80981 7.2955 2.89922V2.89922C8.24334 3.46792 9.33155 3.7705 10.4369 3.7705V3.7705" stroke="currentColor" stroke-width="0.8"/><path d="M9.42404 8.52029C10.6841 8.49751 12.7645 9.46081 12.3931 13.2872H9.07715" stroke="currentColor" stroke-width="0.8"/><path d="M6.20407 8.52027C4.944 8.49717 3.00894 9.40567 3.38033 13.2872H6.69629" stroke="currentColor" stroke-width="0.8"/><path d="M7.85254 8.80402C8.21499 8.80424 8.50879 9.09875 8.50879 9.46124C8.50856 9.82354 8.21485 10.1173 7.85254 10.1175C7.49004 10.1175 7.19554 9.82368 7.19531 9.46124C7.19531 9.09861 7.4899 8.80402 7.85254 8.80402Z" stroke="currentColor" stroke-width="0.6"/><rect x="6.92207" y="10.9907" width="1.85987" height="1.31321" rx="0.31496" stroke="currentColor" stroke-width="0.6"/><path d="M7.30566 12.5356L7.44232 14.2438H8.05233L8.26228 12.489" stroke="currentColor" stroke-width="0.6"/></svg>
                                <span>Opini</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.20048 12.1742C7.82636 12.7309 7.29462 13.1648 6.67249 13.421C6.05036 13.6773 5.36578 13.7443 4.70533 13.6137C4.04488 13.4831 3.43822 13.1606 2.96206 12.6872C2.4859 12.2137 2.16164 11.6105 2.03027 10.9538C1.89889 10.2972 1.96632 9.61648 2.22401 8.9979C2.48171 8.37931 2.9181 7.85059 3.478 7.47861C4.03791 7.10663 4.69617 6.90808 5.36956 6.90808" stroke="currentColor" stroke-width="0.902754" stroke-linecap="round"/><path d="M5.36914 2.69501C6.12515 2.69501 6.73438 3.30406 6.73438 4.0495C6.73429 4.79487 6.1251 5.40302 5.36914 5.40302C4.61338 5.40279 4.00497 4.79473 4.00488 4.0495C4.00488 3.3042 4.61332 2.69523 5.36914 2.69501Z" stroke="currentColor" stroke-width="0.902754"/><path d="M5.36914 5.59155V9.02641C5.36914 9.3322 5.61703 9.5801 5.92282 9.5801H10.072C10.2684 9.5801 10.45 9.68407 10.5494 9.85336L12.5865 13.3215C12.7109 13.5333 12.9599 13.6378 13.1982 13.5782L14 13.3778" stroke="currentColor" stroke-width="0.902754" stroke-linecap="round"/><path d="M8.28252 6.90808H5.36914" stroke="currentColor" stroke-width="0.902754" stroke-linecap="round"/></svg>
                                <span>Disabilitas</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00006 14.2438C11.3138 14.2438 14.0001 11.5575 14.0001 8.24384C14.0001 4.93013 11.3138 2.24384 8.00006 2.24384C4.68632 2.24384 2 4.93013 2 8.24384C2 11.5575 4.68632 14.2438 8.00006 14.2438Z" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 8.24384H14.0001" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00061 2.24384C9.50139 3.88685 10.3543 6.01906 10.4006 8.24384C10.3543 10.4686 9.50139 12.6008 8.00061 14.2438C6.49983 12.6008 5.64693 10.4686 5.60059 8.24384C5.64693 6.01906 6.49983 3.88685 8.00061 2.24384V2.24384Z" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Global</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70726 11.9817L9.70726 12.6597C9.70726 12.9944 9.43591 13.2657 9.10119 13.2657L6.65611 13.2657C6.3214 13.2657 6.05005 12.9944 6.05005 12.6597L6.05005 11.9817M9.70726 11.9817L9.70725 10.6977C10.3828 10.2749 10.9003 9.64131 11.1797 8.89494C11.4592 8.14856 11.4851 7.33093 11.2533 6.56838C11.0216 5.80583 10.5453 5.14081 9.89781 4.67608C9.25036 4.21135 8.46788 3.97277 7.67128 3.99722C6.87468 4.02167 6.1083 4.30778 5.49057 4.81135C4.87283 5.31491 4.43813 6.00789 4.25363 6.78322C4.06913 7.55854 4.14509 8.37305 4.46979 9.10088C4.79449 9.82871 5.34985 10.4294 6.05005 10.81L6.05005 11.9817M9.70726 11.9817L7.87865 11.9817M6.05005 11.9817L7.87865 11.9817M7.87865 11.9817L7.87865 8.89494M9.21257 8.89494L6.43899 8.89494" stroke="currentColor" stroke-width="0.787879" stroke-linecap="round"/><path d="M3.21387 3.32385L3.88562 4.26431" stroke="currentColor" stroke-width="0.787879" stroke-linecap="round"/><path d="M7.91699 1.57727V2.92078" stroke="currentColor" stroke-width="0.787879" stroke-linecap="round"/><path d="M12.0809 3.45813L11.4092 4.26424" stroke="currentColor" stroke-width="0.787879" stroke-linecap="round"/><path d="M1.33301 7.89172H2.67652" stroke="currentColor" stroke-width="0.787879" stroke-linecap="round"/><path d="M12.6191 7.75732H14.2314" stroke="currentColor" stroke-width="0.787879" stroke-linecap="round"/></svg>
                                <span>On Off</span>
                            </a>
                        </li>
                        <li class="header--collapsed__menu__item">
                            <a class="header--collapsed__menu__link hover:text-primary" href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1367 7.77395C11.1685 7.57748 10.9837 7.10489 9.9897 6.78629C9.42897 6.42946 9.21445 6.13848 9.17728 6.03759M9.17728 6.03759C9.18259 5.85174 9.28879 5.4896 9.6711 5.52783C10.0534 5.56606 10.0853 5.96856 10.0534 6.16502L10.9933 6.64292C11.2375 6.49955 11.7898 6.32751 12.0447 6.78629C12.2995 7.24507 12.1509 7.63589 12.0447 7.77395C12.1895 8.03594 12.3463 8.38178 12.48 8.77753M9.17728 6.03759C9.32064 6.29246 9.62013 6.84682 9.6711 7.02524C9.7236 7.20899 10.0356 8.20376 10.6428 8.29894M11.8854 13.0149C11.8323 12.7812 11.4871 12.4318 10.5313 12.9034M11.8854 13.0149C11.9827 13.3289 11.9157 13.8736 11.0729 13.9437M11.8854 13.0149C12.7043 12.2221 12.8847 11.1511 12.7837 10.1475M10.4676 13.9229C10.7038 13.9527 10.904 13.9577 11.0729 13.9437M11.0729 8.21998C10.9159 8.29852 10.7726 8.31928 10.6428 8.29894M11.0729 13.9437C11.1791 14.0589 11.2954 14.3415 10.8818 14.4167C9.45977 14.6753 8.78895 14.2215 9.48825 13.4291M9.76668 13.1583C9.65705 13.2522 9.56451 13.3427 9.48825 13.4291M9.48825 13.4291C9.03945 13.4981 8.00802 13.4259 7.47278 12.5848C6.80372 11.5334 3.37879 13.2538 6.74 14.9105C5.45499 14.8521 3.30233 14.0949 4.97178 11.5334L4.97629 11.5282C5.16015 11.3153 5.44544 11.2196 5.72049 11.2785V11.2785L5.90264 11.1305C5.94851 11.0933 6.00905 11.0793 6.06662 11.0927L6.45326 11.1829L6.72182 11.0487C6.7736 11.0228 6.83433 11.0217 6.88696 11.0459L7.18604 11.1829L7.38184 11.1068C7.43896 11.0846 7.50326 11.0911 7.55476 11.1243L7.9666 11.39M7.9666 11.39L8.65159 11.5812M7.9666 11.39L8.40111 10.8242C8.50014 10.6952 8.70473 10.7409 8.73948 10.8997L8.7631 11.0077C8.97019 10.7157 9.47676 10.2048 9.84633 10.498C10.2159 10.7911 9.7616 11.2573 9.48825 11.4538C9.82001 11.2414 10.5154 10.6254 10.6428 9.86076C10.3667 9.99882 9.73482 10.1666 9.41622 9.73332C9.32595 9.62181 9.11993 9.35419 9.01798 9.17578C8.96311 9.07977 9.03188 9.01328 9.13442 8.96986C9.28943 8.90422 9.44134 9.03127 9.54825 9.16131C9.62097 9.24977 9.72063 9.31375 9.84633 9.28729C10.0885 9.23631 10.5738 8.92621 10.7862 8.77753L10.6428 8.29894M12.48 8.77753C12.7756 8.90497 13.3637 9.22994 13.3509 9.5103C13.3382 9.79067 12.9675 10.0519 12.7837 10.1475M12.48 8.77753C12.6201 9.19238 12.7348 9.66207 12.7837 10.1475" stroke="currentColor" stroke-width="0.533333" stroke-linecap="round"/><ellipse cx="11.5356" cy="7.13678" rx="0.127439" ry="0.175229" fill="currentColor"/><path d="M7.67692 2.69153C7.58665 2.85083 7.50806 3.22996 7.91587 3.47209" stroke="currentColor" stroke-width="0.533333" stroke-linecap="round"/><path d="M6.73786 2.86658C6.68476 3.03119 6.67096 3.42094 7.04053 3.66307" stroke="currentColor" stroke-width="0.533333" stroke-linecap="round"/><path d="M6.60974 2.11802C8.13901 1.21001 10.9108 1.68791 11.6117 1.83128C12.1725 1.94597 10.8647 3.34244 10.3337 3.9106L9.33366 3.24394M6.60974 2.11802L5.89289 2.59592M6.60974 2.11802C5.70374 1.79144 3.8018 1.36035 3.38575 2.22428C3.37978 2.23667 3.38256 2.25142 3.39275 2.26065C3.8439 2.66882 4.71073 3.45279 4.69815 3.4402C4.68222 3.42427 3.16888 4.36414 3.79014 6.75362C3.50871 7.00319 3.05737 7.54056 3.5034 7.69349C3.94944 7.84641 4.27335 7.64039 4.37954 7.51826L4.93709 8.13952C4.86275 8.6068 4.98807 9.60189 6.08404 9.84402C6.16369 9.92367 5.54243 8.34661 6.24334 8.13952C6.80408 7.97385 7.42216 7.65632 7.66111 7.51826C7.24693 7.24745 6.21467 6.83009 5.39906 7.3271C5.18666 7.16249 4.85107 6.67079 5.2079 6.02085" stroke="currentColor" stroke-width="0.533333" stroke-linecap="round"/><path d="M5.86082 4.17285C5.87675 4.40118 5.8194 4.95023 5.46257 5.3198C5.1767 5.61588 5.15121 5.84994 5.18787 5.97773C5.20185 6.02647 5.25545 6.04472 5.30468 6.03257L5.98638 5.86424C6.33642 5.77782 6.68076 5.65218 6.95662 5.42003C7.31949 5.11465 7.71104 4.65822 7.77241 4.14099" stroke="currentColor" stroke-width="0.533333" stroke-linecap="round"/><path d="M7.3584 5.04918C8.13365 4.88988 9.77656 4.4757 10.1461 4.09338" stroke="currentColor" stroke-width="0.533333" stroke-linecap="round"/><ellipse cx="10.1275" cy="2.41914" rx="0.127439" ry="0.175229" transform="rotate(25.7628 10.1275 2.41914)" fill="currentColor"/><path d="M11.6663 8.91052L11.9997 9.57719L11.6663 9.91052V10.5772L11.333 10.9105V11.5772" stroke="currentColor" stroke-width="0.333333"/></svg>
                                <span>Surabaya</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

    <!-- <header class="header bg-white dark:bg-zinc-900 dark:text-white">
        <div class="container">
            <div class="header--wrapper">
                <h1 class="header--logo">
                    <meta itemprop="logo" content="https://cdn1-production-assets-kly.akamaized.net/logos/188/original/040376900_1740988466-Liputan6.png">
                    <meta itemprop="url" content="https://www.liputan6.com">
                    <a href="#" class="header--logo__link">
                        <img class="header--logo__image" :src="Logo" width="80" height="23" alt="logo">
                    </a>
                </h1>
                <div class="header--search">
                    <form id="headerSearch" class="header--search__form" role="search" method="get" action="https://www.liputan6.com/search" autocomplete="off">
                        <input class="header--search__form__input border-neutral-200 placeholder:text-neutral-500 dark:placeholder:text-white dark:border-neutral-700" type="text" value="" name="q" id="q" placeholder="Berita apa yang ingin anda baca hari ini?" maxlength="100">
                        <button class="header--search__form__button text-white from-primary to-secondary hover:bg-primary" type="button">CARI</button>
                    </form>
                </div>
                <div class="header--right">
                    <a href="#" class="header__video border-primary bg-primary/10 after:border-white after:bg-primary dark:after:border-black">
                        <svg class="header__video__icon text-primary" width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.35 4.11436C8.13759 4.56908 8.53139 4.79643 8.66355 5.09326C8.77882 5.35217 8.77882 5.64783 8.66355 5.90674C8.53139 6.20357 8.13759 6.43092 7.35 6.88564L2.4 9.74352C1.61241 10.1982 1.21861 10.4256 0.895471 10.3916C0.613615 10.362 0.357566 10.2142 0.190982 9.9849C-4.3061e-07 9.72203 -4.10733e-07 9.26732 -3.70981e-07 8.35788L-1.21137e-07 2.64212C-8.1384e-08 1.73268 -6.15077e-08 1.27797 0.190983 1.0151C0.357567 0.785817 0.613615 0.637987 0.895472 0.608363C1.21861 0.5744 1.61241 0.801758 2.4 1.25647L7.35 4.11436Z" fill="currentColor"/></svg>
                        <span class="header__video__text">Video Terbaru</span>
                    </a>
                    <a href="#" class="header__live text-white bg-primary">
                        <span>LIVE</span>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33337 14.5H10.6667M8.00004 11.8333V14.5M2.66671 2.5H13.3334C14.0698 2.5 14.6667 3.09695 14.6667 3.83333V10.5C14.6667 11.2364 14.0698 11.8333 13.3334 11.8333H2.66671C1.93033 11.8333 1.33337 11.2364 1.33337 10.5V3.83333C1.33337 3.09695 1.93033 2.5 2.66671 2.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/></svg>
                    </a>
                    <span class="switch-theme dark:text-white" data-value="light">
                        <svg class="switch-theme__icon --dark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.8108C20.8424 14.5166 20.2022 16.1423 19.1543 17.4975C18.1065 18.8528 16.6944 19.8816 15.0832 20.4636C13.4719 21.0456 11.7283 21.1566 10.0563 20.7838C8.38425 20.411 6.85298 19.5697 5.64164 18.3584C4.43031 17.147 3.589 15.6157 3.21618 13.9437C2.84336 12.2717 2.95443 10.5281 3.53641 8.91685C4.11839 7.30564 5.1472 5.8935 6.50246 4.84567C7.85772 3.79783 9.48337 3.15764 11.1892 3C10.1905 4.35113 9.7099 6.01585 9.83485 7.69137C9.95979 9.36689 10.682 10.9419 11.87 12.13C13.0581 13.318 14.6331 14.0402 16.3086 14.1652C17.9842 14.2901 19.6489 13.8095 21 12.8108Z" stroke="currentColor" stroke-width="1.92" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8711 6.26226C14.9782 5.58797 15.7079 4.43635 15.8449 3.14732L15.8623 2.98378C15.8855 2.76511 16.1867 2.72499 16.2664 2.92995L16.2846 2.97691C16.8 4.30283 18.0816 5.17187 19.5041 5.15994L19.5612 5.15946C19.7797 5.15763 19.8359 5.46136 19.6311 5.5378L19.4724 5.59708C18.1204 6.10183 17.3078 7.48573 17.5259 8.91231C17.5568 9.11447 17.2831 9.20714 17.1848 9.02778L17.0703 8.81879C16.407 7.60807 15.1318 6.85993 13.7514 6.87151L13.6941 6.87199C13.4599 6.87395 13.3722 6.56614 13.5722 6.44434L13.8711 6.26226Z" stroke="currentColor" stroke-width="1.68"/></svg>
                        <svg class="switch-theme__icon --light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    </span>
                    <button class="header__menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7891 13.5303C18.8483 13.5303 19.8672 13.9241 20.6494 14.6309L20.8027 14.7764L20.9375 14.917C22.2793 16.3863 22.3967 18.5714 21.3076 20.1768L22.8154 21.6846C22.9654 21.8346 23.0498 22.0379 23.0498 22.25C23.0498 22.4621 22.9654 22.6654 22.8154 22.8154C22.7414 22.8898 22.6535 22.9489 22.5566 22.9893C22.4596 23.0296 22.3551 23.0508 22.25 23.0508C22.1449 23.0508 22.0404 23.0296 21.9434 22.9893C21.8465 22.9489 21.7586 22.8898 21.6846 22.8154L20.1777 21.3096C19.567 21.7267 18.8629 21.9806 18.1172 22.0381L17.7891 22.0508C17.2293 22.0522 16.6744 21.9428 16.1572 21.7285C15.6403 21.5143 15.171 21.1995 14.7764 20.8027C13.9787 20.0028 13.5303 18.9187 13.5303 17.7891C13.5304 16.6595 13.9788 15.5762 14.7764 14.7764C15.5761 13.9786 16.6594 13.5304 17.7891 13.5303ZM9.17188 13.5273C10.44 13.5273 11.4727 14.56 11.4727 15.8281V20.75C11.4727 22.0181 10.44 23.0498 9.17188 23.0498H4.25C2.98189 23.0498 1.9502 22.0181 1.9502 20.75V15.8281C1.9502 14.56 2.98189 13.5273 4.25 13.5273H9.17188ZM4.25 15.1279C3.86436 15.1279 3.5498 15.4425 3.5498 15.8281V20.75C3.5498 21.1364 3.86433 21.4502 4.25 21.4502H9.17188C9.55683 21.4502 9.87207 21.1363 9.87207 20.75V15.8281C9.87207 15.4425 9.55679 15.1279 9.17188 15.1279H4.25ZM17.79 15.1289C17.1082 15.1289 16.4262 15.389 15.9072 15.9072C15.409 16.4067 15.129 17.0836 15.1289 17.7891C15.1289 18.4945 15.4091 19.1713 15.9072 19.6709C16.9107 20.6736 18.6603 20.6755 19.666 19.6758L19.6729 19.6689C19.6737 19.6682 19.6739 19.6667 19.6748 19.666C20.1709 19.1661 20.45 18.4904 20.4492 17.7861C20.4484 17.0818 20.1682 16.406 19.6709 15.9072C19.1528 15.3893 18.4716 15.129 17.79 15.1289ZM9.17188 1.9502C10.44 1.9502 11.4727 2.98189 11.4727 4.25V9.17188C11.4727 10.44 10.44 11.4727 9.17188 11.4727H4.25C2.98189 11.4727 1.9502 10.44 1.9502 9.17188V4.25C1.9502 2.98189 2.98189 1.9502 4.25 1.9502H9.17188ZM20.75 1.9502C22.0181 1.9502 23.0498 2.98189 23.0498 4.25V9.17188C23.0498 10.44 22.0181 11.4727 20.75 11.4727H15.8281C14.56 11.4727 13.5273 10.44 13.5273 9.17188V4.25C13.5273 2.98189 14.56 1.9502 15.8281 1.9502H20.75ZM4.25 3.5498C3.86433 3.5498 3.5498 3.86365 3.5498 4.25V9.17188C3.5498 9.55751 3.86436 9.87207 4.25 9.87207H9.17188C9.55679 9.87207 9.87207 9.55748 9.87207 9.17188V4.25C9.87207 3.86368 9.55683 3.5498 9.17188 3.5498H4.25ZM15.8281 3.5498C15.4432 3.5498 15.1279 3.86368 15.1279 4.25V9.17188C15.1279 9.55748 15.4432 9.87207 15.8281 9.87207H20.75C21.1356 9.87207 21.4502 9.55751 21.4502 9.17188V4.25C21.4502 3.86365 21.1357 3.5498 20.75 3.5498H15.8281Z" fill="currentColor" stroke="currentColor" stroke-width="0.1"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <div class="navbar bg-white dark:bg-zinc-900">
        <div class="container">
            <ul class="navbar--list dark:text-white">
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">
                        <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9053 0C18.3786 3.04012e-05 20.3847 2.00567 20.3848 4.47949V15.9043C20.3848 18.3788 18.3787 20.3847 15.9053 20.3848H4.47754C2.00434 20.3839 0 18.378 0 15.9043V4.47949C7.43116e-05 2.00569 2.00587 6.86361e-05 4.47949 0H15.9053ZM10.1816 2.41895L6.53906 7.52539C6.23002 7.97243 5.95027 8.38535 5.7002 8.7627C5.44995 9.14006 5.2401 9.51314 5.07129 9.88281C4.90186 10.2526 4.77281 10.6308 4.68457 11.0156C4.59628 11.4008 4.55176 11.8172 4.55176 12.2637C4.55181 13.1109 4.70635 13.8812 5.01562 14.5742C5.32454 15.2674 5.73667 15.8648 6.25195 16.3652C6.76684 16.8659 7.36295 17.255 8.04004 17.5322C8.71687 17.8093 9.42392 17.9482 10.1602 17.9482C10.8809 17.9482 11.5799 17.8092 12.2568 17.5322C12.9338 17.2549 13.5341 16.87 14.0566 16.377C14.5789 15.8842 14.9947 15.2909 15.3037 14.5977C15.6129 13.9044 15.7676 13.1416 15.7676 12.3096C15.7676 11.5701 15.6424 10.8928 15.3926 10.2764C15.1421 9.66045 14.8149 9.12428 14.4102 8.66992C14.0053 8.21553 13.5376 7.84955 13.0078 7.57227C12.4781 7.295 11.9407 7.11745 11.3965 7.04004L14.6641 2.41895H10.1816ZM10.1602 10.3223C10.675 10.3224 11.113 10.5036 11.4736 10.8652C11.834 11.2274 12.0146 11.7011 12.0146 12.2861C12.0146 12.8719 11.8341 13.353 11.4736 13.7305C11.113 14.108 10.675 14.2968 10.1602 14.2969C9.64473 14.2969 9.20623 14.1041 8.8457 13.7188C8.48505 13.334 8.3057 12.8562 8.30566 12.2861C8.30566 11.7165 8.48495 11.246 8.8457 10.876C9.20623 10.5067 9.64473 10.3223 10.1602 10.3223Z" fill="url(#paint0_linear_561_13352)"/><defs><linearGradient id="paint0_linear_561_13352" x1="-133.138" y1="86.9538" x2="20.3846" y2="86.9538" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6600"/><stop offset="1" stop-color="#FF3300"/></linearGradient></defs></svg>
                    </a>
                </li>
                <li class="navbar--list__item --active">
                    <a class="navbar--list__link hover:text-primary" href="#">HOME</a>
                </li>
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">SHOWBIZ</a>
                </li>
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">BOLA</a>
                </li>
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">HEALTH</a>
                </li>
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">BISNIS</a>
                </li>
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">CITIZEN6</a>
                </li>
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">MUSIK</a>
                </li>
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">GLOBAL</a>
                </li>
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">TEKNO</a>
                </li>
                <li class="navbar--list__item">
                    <a class="navbar--list__link hover:text-primary" href="#">LIFESTYLE</a>
                </li>
                <li class="navbar--list__item submenu">
                    <a class="navbar--list__link hover:text-primary" href="#">
                        <span>LAINNYA</span>  
                        <svg class="submenu__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>                              
                    </a>
                    <ul class="submenu__list bg-white dark:bg-zinc-900">
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">CRYPTO</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">CITIZEN6</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">SAHAM</a>
                        </li>

                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Crypto</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Citizen6</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Regional</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Otomotif</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Opini</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Disabilitas</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Global</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">On Off</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Surabaya</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Lifestyle</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Health</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">English</a>
                        </li>
                        <li class="navbar--list__item">
                            <a class="navbar--list__link hover:text-primary hover:bg-neutral-100" href="#">Feeds</a>
                        </li>
                    </ul>
                </li>
                
            </ul>
            <div class="navbar--collapsed bg-white dark:bg-zinc-900 dark:text-white">
                <div class="navbar--collapsed__top">
                    <form id="headerSearch" class="navbar--collapsed__form" role="search" method="get" action="https://www.liputan6.com/search" autocomplete="off">
                        <input class="navbar--collapsed__form__input border-neutral-200 placeholder:text-neutral-500 dark:placeholder:text-white dark:border-neutral-700" type="text" value="" name="q" id="q" placeholder="Berita apa yang ingin anda baca hari ini?" maxlength="100">
                    </form>
                    <button class="navbar--collapsed__top__close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>
                <ul class="navbar--collapsed__menu">
                    <li class="navbar--collapsed__menu__item --active">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>HOME</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu2" alt="">
                            </span>
                            <span>NEWS</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu3" alt="">
                            </span>
                            <span>BISNIS</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>BOLA</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu2" alt="">
                            </span>
                            <span>TV</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu3" alt="">
                            </span>
                            <span>SHOWBIZ</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>TEKNO</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu2" alt="">
                            </span>
                            <span>FOTO</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu3" alt="">
                            </span>
                            <span>HOT</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>CEK FAKTA</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>ISLAMI</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>CRYPTO</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>CITIZEN6</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>SAHAM</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Crypto</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Citizen6</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Regional</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Otomotif</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Opini</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Disabilitas</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Global</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>On Off</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Surabaya</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Lifestyle</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Health</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>English</span>                                
                        </a>
                    </li>
                    <li class="navbar--collapsed__menu__item">
                        <a class="navbar--collapsed__menu__link hover:text-primary" href="#">
                            <span class="navbar--collapsed__menu__icon">
                                <img :src="Menu1" alt="">
                            </span>
                            <span>Feeds</span>                                
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div> -->
    <!--end.navbar-->
</template>
<style>
    @import '../assets/sass/components/header-navbar.css';
</style>