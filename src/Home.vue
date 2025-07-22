<script setup>
import Header6 from './components/HeaderNavbar.vue'
import Segment from './components/Segment.vue'
import Headline from './components/Headline.vue'
import Recommend from './components/Recommend.vue'
import VideoList from './components/VideoList.vue'
import Topic from './components/Topic.vue'
import Trending from './components/Trending.vue'
import Footer6 from './components/Footer.vue'
import LogoLip from './assets/image/lip6up-color.png';
import LogoProgram from './assets/image/bincang-color.png';
import LogoTerang from './assets/image/terang-color.png';
</script>

<template>
  <Header6/>
    <main class="main flex flex-col mb-6 lg:mb-10">
      <Segment/>
      <span class="bg-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo, architecto rem eveniet hic ipsum soluta ipsam quod nobis dolorum, eum illum, alias praesentium excepturi esse atque? Dolor, adipisci necessitatibus.</span>
        <Headline/>
        <Recommend/>
        <VideoList title="VIDEO TERKINI" titleIcon="true"/>
        <Topic/>
        <Trending :logo="LogoLip"/>
        <VideoList title="TIMNAS INDONESIA"/>
        <Trending :logo="LogoProgram"/>
        <VideoList title="CEK FAKTA"/>
        <Trending :logo="LogoTerang"/>
        <VideoList title="BISNIS"/>
        <VideoList title="SHOWBIZ"/>
        <VideoList title="VIDEO POPULER"/>
        <VideoList title="SEPAK BOLA"/>
    </main>
  <Footer6/>
</template>

