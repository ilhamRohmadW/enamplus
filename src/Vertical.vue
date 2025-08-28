<script setup>
//   import Header6 from './components/HeaderNavbar.vue'
</script>

<template>
  <!-- <Header6/> -->
    <main class="main relative w-full h-full overflow-hidden">
        <div class="main-screen relative max-w-screen-md h-full mx-auto">
            <div class="main-body relative overflow-y-auto flex flex-col max-w-screen-md mx-auto h-full snap-y snap-mandatory scroll-smooth" data-scroller>
                <div data-section="sect2" class="shrink-0 transition bg-black/10 h-full snap-always snap-start">
                    <span>vertical</span>
                </div>
                <div data-section="sect2" class="shrink-0 transition bg-black/20 h-full snap-always snap-start">
                    <span>vertical</span>
                </div>
                <div data-section="sect2" class="shrink-0 transition bg-black/30 h-full snap-always snap-start">
                    <span>vertical</span>
                </div>
                <div data-section="sect2" class="shrink-0 transition bg-black/40 h-full snap-always snap-start">
                    <span>vertical</span>
                </div>
            </div>
            <div class="btn-group absolute right-0 bottom-0 flex flex-col gap-3 p-3">
                <a href="#" aria-label="prevpage" class="btn btn--page btn--page-prev flex flex-col items-center gap-0.5 disabled">
                    <i class="flex items-center justify-center size-10 bg-black/20 rounded-full backdrop-blur"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.49994 19.3333H13.4999V10H19.1466L9.99994 0.853336L0.853271 10H6.49994V19.3333Z" fill="currentColor"></path></svg></i>
                </a>
                <a href="#" aria-label="nextpage" class="btn btn--page btn--page-next flex flex-col items-center gap-0.5">
                    <i class="flex items-center justify-center size-10 bg-black/20 rounded-full backdrop-blur"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.49994 0.666668H13.4999V10H19.1466L9.99994 19.1467L0.853271 10H6.49994V0.666668Z" fill="currentcolor"></path></svg></i>
                </a>
            </div>
            <div class="indicator absolute right-2 bottom-1/2 transform translate-y-1/2 flex flex-col snap-y snap-mandatory scroll-smooth overflow-hidden dark:indicator-white" data-indicator></div>
        </div>
    </main>
</template>
<style>
    @import './assets/sass/components/vertical.css';
</style>