<script setup>
import Header6 from './components/HeaderNavbar.vue'
import Segment from './components/Segment.vue'
import Headline from './components/Headline.vue'
import Recommend from './components/Recommend.vue'
import VideoList from './components/VideoList.vue'
import Topic from './components/Topic.vue'
import Trending from './components/Trending.vue'
import Footer6 from './components/Footer.vue'
import LogoLip from './assets/image/logo-lip6up.png';
import LogoProgram from './assets/image/logo-program.png';
import LogoTerang from './assets/image/logo-terang.png';
</script>

<template>
  <Header6/>
    <main class="main flex flex-col mb-6 lg:mb-10">
      <Segment/>
        <Headline/>
        <Recommend/>
        <VideoList title="VIDEO TERKINI" titleIcon="true"/>
        <Topic/>
        <Trending :logo="LogoLip" swiperBtn="bg-[#FF3300]" after="after:from-[#FF3300]" fade="to-[#FF3300]" bgGrad="from-[#FF6600] to-[#FF3300]"/>
        <VideoList title="TIMNAS INDONESIA"/>
        <Trending :logo="LogoProgram" swiperBtn="bg-[#FF6600]" after="after:from-[#FF6600]" fade="to-[#FF6600]" bgGrad="from-[#FF3300] to-[#FF6600]"/>
        <VideoList title="CEK FAKTA"/>
        <Trending :logo="LogoTerang" swiperBtn="bg-[#111111]" after="after:from-[#111111]" fade="to-[#111111]" bgGrad="from-[#444444] to-[#111111]"/>
        <VideoList title="BISNIS"/>
        <VideoList title="SHOWBIZ"/>
        <VideoList title="VIDEO POPULER"/>
        <VideoList title="SEPAK BOLA"/>
    </main>
    <Footer6/>
</template>

