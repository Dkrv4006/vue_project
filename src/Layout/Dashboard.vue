

<template>
    <div  class="sid">

        <Sidebar/>
    </div>
    <Heade/>
    <Infor/>
    <Dashcoin/>
</template>

<script setup>
import Dashcoin from '../components/Dashcoin.vue';
import Heade from '../components/Heade.vue';
import Infor from '../components/Home.vue';
import Sidebar from './Sidebar.vue';


</script>

<style>
.sid{
    position: absolute;
    top: 0;
}
</style>