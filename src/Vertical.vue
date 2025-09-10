<script setup>
import Header6 from './components/HeaderNavbar.vue'
import VerticalItem from './components/VerticalItem.vue'
import { ref } from 'vue'
var items = ref([
{ 
    title: 'Gibran Pasca-Demo Datangi Pos di Kwitang', 
    src: 'https://www.vidio.com/embed/8926539-gibran-pasca-demo-datangi-pos-di-kwitang?autoplay=true&player_only=true&mute=false&fluid_player=true',
    desc: 'Wakil Presiden (Wapres) Gibran Rakabuming berkeliling kawasan permukiman di sekitar Jakarta untuk meninjau sejumlah pos Sistem Keamanan Keliling (Siskamling), Rabu malam, untuk memastikan kondusifitas wilayah pasca-demonstrasi.'
},
{ 
    title: 'Momen Nadiem Makarim Pakai Rompi Tahanan', 
    src: 'https://www.vidio.com/embed/8926512-momen-nadiem-makarim-pakai-rompi-tahanan?autoplay=true&player_only=true&mute=false&fluid_player=true',
    desc: 'Bersuara Lantang, Momen Nadiem Berompi Tahanan Jadi Tersangka Korupsi Laptop Chromebooks'
},
{ 
    title: 'Bikin Ciut, Militer China Tak Tertandingi?',
    src: 'https://www.vidio.com/embed/8919544-bikin-ciut-militer-china-tak-tertandingi?autoplay=true&player_only=true&mute=false&fluid_player=true',
    desc: 'China menggelar parade militer akbar di pusat kota Beijing untuk memperingati 80 tahun kemenangannya dalam Perang Dunia II, sembari menjanjikan komitmen negara itu terhadap pembangunan yang damai di dunia yang masih dipenuhi dengan gejolak dan ketidakpastian.'
},
{ 
    title: 'Uya Saat Dijarah, "Demi Allah Saya Gak Ke Luar Negeri"', 
    src: 'https://www.vidio.com/embed/8919536-uya-saat-dijarah-demi-allah-saya-gak-ke-luar-negeri?autoplay=true&player_only=true&mute=false&fluid_player=true',
    desc: 'Artis sekaligus anggota DPR RI non aktif, Uya Kuya, mendatangi Polres Jakarta Timur, Rabu sore, pasca rumahnya di Duren Sawit dirusak dan dijarah massa. Ia mengajukan restorative justice kepada salah satu pelaku yang mengembalikan AC miliknya.'
},
]);

</script>

<!-- <div data-scroller class="relative flex flex-col w-full h-full bg-white lg:max-w-[780px] lg:h-[640px] lg:rounded-xl overflow-y-auto snap-y snap-mandatory"> -->
<template>
    <Header6 class="hidden lg:block"/>
    <main class="main relative w-full overflow-hidden flex h-svh bg-black justify-center items-center">
        <div class="relative flex flex-col w-full h-full lg:max-w-[780px] lg:h-[640px]">
            <div data-scroller class="main-body relative overflow-y-auto bg-white flex flex-col max-w-screen-md mx-auto w-full h-full snap-y snap-mandatory scroll-smooth lg:rounded-xl text-white dark:bg-zinc-900 dark:text-white lg:text-black lg:dark:text-white">
                <!-- <template v-for="item in items"> -->
                    <VerticalItem 
                    :title="'Gibran Pasca-Demo Datangi Pos di Kwitang'"
                    :src="'https://www.vidio.com/embed/8926539-gibran-pasca-demo-datangi-pos-di-kwitang?autoplay=true&player_only=true&mute=false&fluid_player=true'"
                    :desc="'Wakil Presiden (Wapres) Gibran Rakabuming berkeliling kawasan permukiman di sekitar Jakarta untuk meninjau sejumlah pos Sistem Keamanan Keliling (Siskamling), <br> <br> Rabu malam, untuk memastikan kondusifitas wilayah pasca-demonstrasi.'"
                    ></VerticalItem>
                    <VerticalItem 
                    :title="'Momen Nadiem Makarim Pakai Rompi Tahanan'"
                    :src="'https://www.vidio.com/embed/8926512-momen-nadiem-makarim-pakai-rompi-tahanan?autoplay=true&player_only=true&mute=false&fluid_player=true'"
                    :desc="'Bersuara Lantang, Momen Nadiem Berompi Tahanan Jadi Tersangka Korupsi Laptop Chromebooks Bersuara Lantang, Momen Nadiem Berompi Tahanan Jadi Tersangka Korupsi Laptop Chromebooks <br> <br> Bersuara Lantang, Momen Nadiem Berompi Tahanan Jadi Tersangka Korupsi Laptop Chromebooks Bersuara Lantang, Momen Nadiem Berompi Tahanan Jadi Tersangka Korupsi Laptop Chromebooks'"
                    ></VerticalItem>
                    <VerticalItem 
                    :title="'Bikin Ciut, Militer China Tak Tertandingi'"
                    :src="'https://www.vidio.com/embed/8919544-bikin-ciut-militer-china-tak-tertandingi?autoplay=true&player_only=true&mute=false&fluid_player=true'"
                    :desc="'China menggelar parade militer akbar di pusat kota Beijing untuk memperingati 80 tahun kemenangannya dalam Perang Dunia II, <br> <br> sembari menjanjikan komitmen negara itu terhadap pembangunan yang damai di dunia yang masih dipenuhi dengan gejolak dan ketidakpastian.'"
                    ></VerticalItem>
                    <VerticalItem 
                    :title="'Uya Saat Dijarah, Demi Allah Saya Gak Ke Luar Negeri'"
                    :src="'https://www.vidio.com/embed/8919536-uya-saat-dijarah-demi-allah-saya-gak-ke-luar-negeri?autoplay=true&player_only=true&mute=false&fluid_player=true'"
                    :desc="'Artis sekaligus anggota DPR RI non aktif, Uya Kuya, mendatangi Polres Jakarta Timur, Rabu sore, pasca rumahnya di Duren Sawit dirusak dan dijarah massa. <br> <br> Ia mengajukan restorative justice kepada salah satu pelaku yang mengembalikan AC miliknya.'"
                    ></VerticalItem>
                <!-- </template> -->
            </div>
            <div class="main-nav absolute inset-x-0 top-0 px-4 pt-6 flex text-white justify-end lg:px-0 lg:pt-0 pointer-events-none">
                <!-- <label class="btn btn--sound group size-8 flex items-center justify-center lg:hidden">
                    <input type="checkbox" class="absolute opacity-0">
                    <svg class="group-has-checked:block hidden mute" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.19971 3.2002C3.444 2.9559 3.84015 2.95595 4.08447 3.2002L19.1997 18.3154C19.444 18.5598 19.444 18.9559 19.1997 19.2002C18.9554 19.4443 18.5592 19.4444 18.3149 19.2002L16.3247 17.21V18.5732C16.3247 19.4302 15.6299 20.1249 14.7729 20.125C13.7478 20.1249 12.7769 19.6628 12.1304 18.8672L10.6147 17.002C10.1638 16.4473 9.48682 16.1251 8.77197 16.125H7.19971C5.75011 16.1248 4.57471 14.9496 4.57471 13.5V8.5C4.57471 7.66944 4.96086 6.92916 5.56299 6.44824L3.19971 4.08496C2.95555 3.84072 2.95567 3.44451 3.19971 3.2002ZM6.45752 7.34277C6.07713 7.58735 5.82471 8.01416 5.82471 8.5V13.5C5.82471 14.2593 6.44047 14.8748 7.19971 14.875H8.77197C9.86336 14.8751 10.8972 15.3669 11.5854 16.2139L13.1001 18.0791C13.5093 18.5826 14.1241 18.8749 14.7729 18.875C14.9395 18.8749 15.0747 18.7398 15.0747 18.5732V15.96L6.45752 7.34277ZM14.7729 1.875C15.6299 1.87508 16.3247 2.56982 16.3247 3.42676V11.4404L15.0747 10.1904V3.42676C15.0747 3.26017 14.9395 3.12508 14.7729 3.125C14.1241 3.1251 13.5093 3.41737 13.1001 3.9209L11.5854 5.78613C11.4481 5.95522 11.2959 6.10935 11.1333 6.24902L10.2456 5.36133C10.3801 5.25484 10.5045 5.13365 10.6147 4.99805L12.1304 3.13281C12.7769 2.33722 13.7478 1.8751 14.7729 1.875Z" fill="currentColor"/></svg>
                    <svg class="group-has-checked:hidden block unmute" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2002 8.5C5.2002 7.39543 6.09563 6.5 7.2002 6.5H8.7721C9.67548 6.5 10.5308 6.09291 11.1004 5.39178L12.6156 3.52701C13.1435 2.87726 13.9361 2.5 14.7733 2.5V2.5C15.2851 2.5 15.7 2.91491 15.7 3.42672V18.5733C15.7 19.0851 15.2851 19.5 14.7733 19.5V19.5C13.9361 19.5 13.1435 19.1227 12.6156 18.473L11.1004 16.6082C10.5308 15.9071 9.67548 15.5 8.7721 15.5H7.20019C6.09562 15.5 5.2002 14.6046 5.2002 13.5V8.5Z" stroke="currentColor" stroke-width="1.25"/></svg>
                </label> -->
                <a href="./story.html" class="size-8 flex items-center justify-center rounded-full lg:size-12 lg:bg-white/10 lg:translate-x-full lg:-mr-3 pointer-events-auto">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1191 1.11914L1.11914 11.1191M1.11914 1.11914L11.1191 11.1191" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>
            </div>
            <div class="btn-group hidden lg:flex absolute right-0 flex-col gap-3 p-3 inset-y-0 my-auto h-fit translate-x-full text-white">
                <a href="#" aria-label="prevpage" class="btn btn--page btn--page-prev flex flex-col items-center gap-0.5">
                    <i class="flex items-center justify-center size-12 bg-white/10 rounded-full">
                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.9506 0.526344L15.7761 7.35182C16.2752 7.85091 16.2752 8.66028 15.7761 9.15937C15.277 9.65846 14.4676 9.65846 13.9669 9.15937L8.04684 3.18811L2.12676 9.057C1.6309 9.37852 0.981444 9.31933 0.551146 8.91463C0.122445 8.50994 0.0265014 7.8637 0.317608 7.35183L7.14308 0.526363C7.64217 0.0272695 8.4515 0.0272513 8.9506 0.526344Z" fill="currentColor"/></svg>
                    </i>
                </a>
                <a href="#" aria-label="nextpage" class="btn btn--page btn--page-next flex flex-col items-center gap-0.5">
                    <i class="flex items-center justify-center size-12 bg-white/10 rounded-full">
                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.0494 9.47366L1.22393 2.64818C0.724836 2.14909 0.724836 1.33972 1.22393 0.840628C1.72302 0.341535 2.53239 0.341535 3.03308 0.840628L8.95316 6.81189L14.8732 0.943003C15.3691 0.621483 16.0186 0.680672 16.4489 1.08537C16.8776 1.49006 16.9735 2.1363 16.6824 2.64817L9.85692 9.47364C9.35783 9.97273 8.54849 9.97275 8.0494 9.47366Z" fill="currentColor"/></svg>
                    </i>
                </a>
            </div>
            <div class="indicator absolute right-2 bottom-1/2 transform translate-y-1/2 flex flex-col snap-y snap-mandatory scroll-smooth overflow-hidden dark:indicator-white hidden" data-indicator></div>
            
            <div class="overlay-splash fixed inset-0 bg-white text-center transition-opacity duration-500 flex flex-col items-center justify-center z-100">
                <svg width="140" height="41" viewBox="0 0 140 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.40656 6.21429H19.4693V0.5H0.422852V40.5H19.4693V34.7857H7.40656V23.0714H16.9933V17.3571H7.40656V6.21429Z" fill="url(#paint0_linear_1617_22194)"/><path d="M40.6213 40.5H47.7955V0.5H41.5737V24.4429L34.3995 0.5H25.6381V40.5H31.9234V11.5286L40.6213 40.5Z" fill="url(#paint1_linear_1617_22194)"/><path d="M70.1915 0.5H59.9699L52.8592 40.5H59.2715L60.4778 33.2429H69.0487L70.255 40.5H77.3022L70.1915 0.5ZM64.7315 7.58571L68.0964 27.8143H61.3666L64.7315 7.58571Z" fill="url(#paint2_linear_1617_22194)"/><path d="M92.1093 0.5H82.3956V40.5H88.4905V12.2143L93.6965 40.5H100.299L105.124 11.8143V40.5H111.727V0.5H102.013L97.2519 28.9L92.1093 0.5Z" fill="url(#paint3_linear_1617_22194)"/><path d="M131.138 0.5H126.208V9.03366H117.737V13.9642H126.208V22.6243H131.138V13.9642H139.609V9.03366H131.138V0.5Z" fill="url(#paint4_linear_1617_22194)"/><defs><linearGradient id="paint0_linear_1617_22194" x1="-726.54" y1="171.126" x2="111.727" y2="171.126" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6600"/><stop offset="1" stop-color="#FF3300"/></linearGradient><linearGradient id="paint1_linear_1617_22194" x1="-726.54" y1="171.126" x2="111.727" y2="171.126" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6600"/><stop offset="1" stop-color="#FF3300"/></linearGradient><linearGradient id="paint2_linear_1617_22194" x1="-726.54" y1="171.126" x2="111.727" y2="171.126" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6600"/><stop offset="1" stop-color="#FF3300"/></linearGradient><linearGradient id="paint3_linear_1617_22194" x1="-726.54" y1="171.126" x2="111.727" y2="171.126" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6600"/><stop offset="1" stop-color="#FF3300"/></linearGradient><linearGradient id="paint4_linear_1617_22194" x1="-25.112" y1="94.8748" x2="139.609" y2="94.8748" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6600"/><stop offset="1" stop-color="#FF3300"/></linearGradient></defs></svg>
            </div>
        </div>
        <div class="overlay-infoTools overlay-infoSwipe absolute inset-0 bg-black/40 backdrop-blur text-white text-center flex flex-col items-center justify-center z-80" style="--delay:6000ms">
            <div class="overlay-infoSwipe-hand bg-black/60 rounded-full w-16 h-16 flex items-center justify-center">
                <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="arrow" d="M3.88815 13.9226C4.28616 13.79 4.71748 13.7236 5.14879 13.7236C5.51371 13.7236 5.91171 13.7567 6.27662 13.8895V6.29291H8.23377C8.86412 6.29291 9.19568 5.56311 8.79769 5.09869L5.0493 0.520756C4.75079 0.155842 4.18686 0.155842 3.92147 0.520756L0.172848 5.09869C-0.225158 5.59619 0.106436 6.29291 0.736762 6.29291H2.69392V14.5198C3.05883 14.2544 3.45708 14.0554 3.88815 13.9226Z" fill="currentColor"/>
                    <path id="hand" d="M29.6968 17.6713C29.1662 15.88 27.9387 14.3871 26.28 13.5246L21.105 10.7713C20.0767 10.2074 18.783 10.6054 18.219 11.6337C17.8541 12.2971 17.8872 13.0934 18.2521 13.6904L18.1857 13.6573C17.1574 13.0934 15.8637 13.4914 15.2997 14.5197C14.9348 15.1831 14.9679 15.9794 15.3328 16.5764L15.2997 16.5433C14.2714 15.9794 12.9777 16.3774 12.4137 17.4057C12.0488 18.0691 12.0819 18.8654 12.4468 19.4624L6.14391 16.112C5.64641 15.8466 5.04919 15.7802 4.51837 15.9461C3.98754 16.112 3.52311 16.4769 3.25773 16.9744C2.69381 18.0027 3.09181 19.2964 4.15346 19.8604L15.7641 26.0637C15.8636 26.1301 15.93 26.2296 15.93 26.3622C15.93 26.4948 15.8305 26.5946 15.731 26.6276L12.8117 27.5234C11.8164 27.8219 11.1861 28.784 11.2856 29.8124C11.352 30.4094 11.6505 30.9735 12.148 31.3384C12.6455 31.7034 13.2759 31.836 13.8731 31.7034L22.1332 30.0116C24.4886 29.5805 26.4791 28.0877 27.6069 25.9647L29.1991 23.0123C30.0616 21.3537 30.2275 19.4627 29.6966 17.6715L29.6968 17.6713Z" fill="currentColor"/>
                </svg>
            </div>
            <span class="overlay-infoSwipe-text text-xs bg-black/60 rounded-lg py-1 px-2 mt-2">Swipe ke atas untuk membaca</span>
        </div>
    </main>
</template>
<style>
@import './assets/sass/components/vertical.css';
</style>