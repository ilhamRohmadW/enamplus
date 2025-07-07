<script setup>
    import Logo from '../assets/image/logo.png';
    import Menu1 from '../assets/image/menu-1.png';
    import Menu2 from '../assets/image/menu-2.png';
    import Menu3 from '../assets/image/menu-3.png';
</script>
<template>
    
    <header class="header bg-white dark:bg-zinc-900 dark:text-white">
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

    <!--navbar-->
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
    </div>
    <!--end.navbar-->
</template>
<style>
    @import '../assets/sass/components/header-navbar.css';
</style>