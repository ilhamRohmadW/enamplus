<script setup>
  import LogoFooter from '../assets/image/logo-footer.png';
</script>
<template>
    <footer class="footer bg-gray-100 dark:bg-black">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__logo">
                    <div class="footer__logo__inner">
                        <a href="#" aria-label="logo footer" class="footer__logo__link dark:brightness-0 dark:invert">
                            <img :src="LogoFooter" alt="logo" class="footer__logo__image" width="80" height="23">                             
                        </a>
                        <a href="#" aria-label="logo brand">
                            <img class="logo-brand" src="https://preview-kly.akamaized.net/liputan6/trustworthy.svg" width="50" height="68px" alt="Trustworthy">
                        </a>
                        <a href="#" aria-label="logo brand">
                            <img class="logo-brand" src="https://preview-kly.akamaized.net/liputan6/ifcn.png" width="50" height="68px" alt="IFCN">
                        </a>
                    </div>
                </div>
                <nav class="footer__list border-neutral-200 text-neutral-400 dark:text-white dark:border-white/20">
                    <a href="#" class="footer__list__link">Redaksi</a>
                    <a href="#" class="footer__list__link">Disclaimer</a>
                    <a href="#" class="footer__list__link">Kode Etik</a>
                    <a href="#" class="footer__list__link">Provacy Policy</a>
                    <a href="#" class="footer__list__link">Pedoman Media Siber</a>
                    <a href="#" class="footer__list__link">Sitemap</a>
                </nav>
                <div class="footer__bottom">
                    <ul class="footer__network text-neutral-400 dark:text-white">
                        <li class="footer__network__item">
                            <a href="http://liputan6.com" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --liputan6"></i>
                                <span>Liputan6</span>
                            </a>
                        </li>
                        <li class="footer__network__item">
                            <a href="http://kapanlagi.com/" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --kapanlagi"></i>
                                <span>Kapanlagi.com</span>
                            </a>
                        </li>
                        <!-- <li class="footer__network__item">
                            <a href="https://www.otosia.com" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --otosia"></i>
                                <span>Otosia</span>
                            </a>
                        </li> -->
                        <li class="footer__network__item">
                            <a href="http://fimela.com" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --fimela"></i>
                                <span>Fimela</span>
                            </a>
                        </li>
                        <li class="footer__network__item">
                            <a href="http://bola.net" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --bolanet"></i>
                                <span>Bola.net</span>
                            </a>
                        </li>
                        <li class="footer__network__item">
                            <a href="http://brilio.net" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --brilio"></i>
                                <span>Brilio</span>
                            </a>
                        </li>
                        <li class="footer__network__item">
                            <a href="http://bola.com" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --bolacom"></i>
                                <span>Bola.com</span>
                            </a>
                        </li>
                        <li class="footer__network__item">
                            <a href="http://merdeka.com" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --merdeka"></i>
                                <span>Merdeka</span>
                            </a>
                        </li>
                        <li class="footer__network__item">
                            <a href="https://www.dream.co.id" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --dream"></i>
                                <span>Dream.co.id</span>
                            </a>
                        </li>
                        <li class="footer__network__item">
                            <a href="https://www.trstdly.com" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --trstdly"></i>
                                <span>Trstdly.com</span>
                            </a>
                        </li>
                        <li class="footer__network__item">
                            <a href="https://manisdansedap.com" target="_blank" class="footer__network__item__link">
                                <i class="footer__network__icon --manisdansedap"></i>
                                <span>Manisdansedap.com</span>
                            </a>
                        </li>
                    </ul>
                    <div class="footer__socmed">
                        <span class="footer__socmed__title text-gray-400 dark:text-white">Connect with us</span>
                        <ul class="footer__socmed__list">
                            <li class="footer__socmed__list__item">
                                <a href="#" target="_blank" class="footer__socmed__list__item__link">
                                    <i class="footer__socmed__icon --threads"></i>
                                </a>
                            </li>
                            <li class="footer__socmed__list__item">
                                <a href="#" target="_blank" class="footer__socmed__list__item__link">
                                    <i class="footer__socmed__icon --whatsapp"></i>
                                </a>
                            </li>
                            <li class="footer__socmed__list__item">
                                <a href="#" target="_blank" class="footer__socmed__list__item__link">
                                    <i class="footer__socmed__icon --facebook"></i>
                                </a>
                            </li>
                            <li class="footer__socmed__list__item">
                                <a href="#" target="_blank" class="footer__socmed__list__item__link">
                                    <i class="footer__socmed__icon --x"></i>
                                </a>
                            </li>
                            <li class="footer__socmed__list__item">
                                <a href="#" target="_blank" class="footer__socmed__list__item__link">
                                    <i class="footer__socmed__icon --instagram"></i>
                                </a>
                            </li>
                            <li class="footer__socmed__list__item">
                                <a href="#" target="_blank" class="footer__socmed__list__item__link">
                                    <i class="footer__socmed__icon --youtube"></i>
                                </a>
                            </li>
                            <li class="footer__socmed__list__item">
                                <a href="#" target="_blank" class="footer__socmed__list__item__link">
                                    <i class="footer__socmed__icon --tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="footer__copyright text-gray-400 dark:text-white dark:border-white/20">Copyright ©2024 Liputan.com KLY KapanLagi Youniverse All Right Reserved.</p>
            </div>
        </div>
    </footer>
</template>
<style>
    @import '../assets/sass/components/footer.css';
</style>