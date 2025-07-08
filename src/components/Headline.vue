<script setup>
    import Story from './Story.vue'
    import BigVideo from './BigVideo.vue'
    import NewsList from './NewsList.vue'
</script>
<template>
    <div class="section section--headline bg-neutral-950 text-white">
        <div class="container">
            <div class="big-video bg-black">
                <div class="big-video__wrapper">
                    <!-- <iframe class="vidio-embed" src="https://www.vidio.com/embed/8664018-dedi-mulyadi-minta-hukum-tegas-dokter-ppds-pemerkosa-dan-evaluasi-rekrutmen-liputan-6?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe> -->
                    <iframe class="vidio-embed" src="https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false" width="560" height="317" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
                </div>
                <div class="big-video__description bg-black" style="--instream-bg: url('../image/instream.png');">
                    <div class="live-info">
                        <span class="live-info__badge bg-[#FF0000] text-white">
                            LIVE NOW
                        </span>
                        <div class="live-info__meta flex items-center gap-2 mt-2">
                            <span class="live-info__title text-secondary font-medium">
                            Live Liputan6 Update
                            </span>
                            <span class="live-info__views flex items-center gap-1 text-gray-400 text-sm">
                            <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 4.5C4.5 4.5 1.73 10 1.73 10s2.77 5.5 8.27 5.5S18.27 10 18.27 10 15.5 4.5 10 4.5zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
                                <circle cx="10" cy="10" r="2.5" fill="currentColor" />
                            </svg>
                            1,320 views
                            </span>
                        </div>
                    </div>
                    <span class="big-video__description__title">Dedi Mulyadi Soroti Pembangunan Tempat Wisata di Lembang yang Picu Bencana</span>
                    <span class="big-video__description__text">Gubernur Jawa Barat Dedi Mulyadi buka suara terkait bencana yang melanda kawasan Lembang. Dedi Mulyadi menilai pembangunan vila hingga kafe di tempat wisata jadi pemicu bencana di Lembang.</span>
                    <a href="#" class="big-video__description__button bg-secondary hover:bg-white hover:text-primary">Tonton Selengkapnya</a>
                </div>
            </div>
            <Story/>
            <BigVideo/>
            <NewsList/>
        </div>
    </div>
</template>