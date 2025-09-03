<script setup>
import Header6 from './components/HeaderNavbar.vue'
import VerticalItem from './components/VerticalItem.vue'
import Story1 from './assets/image/story-1.png';
import Story2 from './assets/image/story-2.png';
import Story3 from './assets/image/story-3.png';
import Story4 from './assets/image/story-4.png';
</script>

<template>
  <Header6 class="hidden lg:block"/>
    <main class="main relative w-full h-full overflow-hidden bg-zinc-900">
        <div class="main-screen relative max-w-screen-md h-full mx-auto
        lg:py-20">
            <div data-scroller class="main-body relative overflow-y-auto flex flex-col max-w-screen-md mx-auto h-full snap-y snap-mandatory scroll-smooth">
                <VerticalItem :image="Story1"></VerticalItem>
                <VerticalItem :image="Story2"></VerticalItem>
                <VerticalItem :image="Story3"></VerticalItem>
                <VerticalItem :image="Story4"></VerticalItem>
            </div>
            <div class="main-nav absolute inset-x-0 top-0 px-4 pt-6 flex justify-between text-white
            lg:hidden">
                <label class="btn btn--sound group size-8 flex items-center justify-center lg:hidden">
                    <input type="checkbox" class="absolute opacity-0">
                    <svg class="group-has-checked:block hidden mute" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.19971 3.2002C3.444 2.9559 3.84015 2.95595 4.08447 3.2002L19.1997 18.3154C19.444 18.5598 19.444 18.9559 19.1997 19.2002C18.9554 19.4443 18.5592 19.4444 18.3149 19.2002L16.3247 17.21V18.5732C16.3247 19.4302 15.6299 20.1249 14.7729 20.125C13.7478 20.1249 12.7769 19.6628 12.1304 18.8672L10.6147 17.002C10.1638 16.4473 9.48682 16.1251 8.77197 16.125H7.19971C5.75011 16.1248 4.57471 14.9496 4.57471 13.5V8.5C4.57471 7.66944 4.96086 6.92916 5.56299 6.44824L3.19971 4.08496C2.95555 3.84072 2.95567 3.44451 3.19971 3.2002ZM6.45752 7.34277C6.07713 7.58735 5.82471 8.01416 5.82471 8.5V13.5C5.82471 14.2593 6.44047 14.8748 7.19971 14.875H8.77197C9.86336 14.8751 10.8972 15.3669 11.5854 16.2139L13.1001 18.0791C13.5093 18.5826 14.1241 18.8749 14.7729 18.875C14.9395 18.8749 15.0747 18.7398 15.0747 18.5732V15.96L6.45752 7.34277ZM14.7729 1.875C15.6299 1.87508 16.3247 2.56982 16.3247 3.42676V11.4404L15.0747 10.1904V3.42676C15.0747 3.26017 14.9395 3.12508 14.7729 3.125C14.1241 3.1251 13.5093 3.41737 13.1001 3.9209L11.5854 5.78613C11.4481 5.95522 11.2959 6.10935 11.1333 6.24902L10.2456 5.36133C10.3801 5.25484 10.5045 5.13365 10.6147 4.99805L12.1304 3.13281C12.7769 2.33722 13.7478 1.8751 14.7729 1.875Z" fill="currentColor"/></svg>
                    <svg class="group-has-checked:hidden block unmute" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2002 8.5C5.2002 7.39543 6.09563 6.5 7.2002 6.5H8.7721C9.67548 6.5 10.5308 6.09291 11.1004 5.39178L12.6156 3.52701C13.1435 2.87726 13.9361 2.5 14.7733 2.5V2.5C15.2851 2.5 15.7 2.91491 15.7 3.42672V18.5733C15.7 19.0851 15.2851 19.5 14.7733 19.5V19.5C13.9361 19.5 13.1435 19.1227 12.6156 18.473L11.1004 16.6082C10.5308 15.9071 9.67548 15.5 8.7721 15.5H7.20019C6.09562 15.5 5.2002 14.6046 5.2002 13.5V8.5Z" stroke="currentColor" stroke-width="1.25"/></svg>
                </label>
                <a href="./story.html" class="size-8 flex items-center justify-center rounded-full
                lg:size-12 lg:bg-white/10 lg:translate-x-full lg:ml-4">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1191 1.11914L1.11914 11.1191M1.11914 1.11914L11.1191 11.1191" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>
            </div>
            <div class="btn-group hidden lg:flex absolute right-0 flex-col gap-3 p-3 inset-y-0 my-auto h-fit translate-x-full text-white">
                <a href="./story.html" class=" size-12 flex items-center justify-center rounded-full bg-white/10 self-start">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1191 1.11914L1.11914 11.1191M1.11914 1.11914L11.1191 11.1191" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>
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
        </div>
    </main>
</template>
<style>
    @import './assets/sass/components/vertical.css';
</style>