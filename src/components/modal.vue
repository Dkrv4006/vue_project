<template>
    <div  v-if="openModal" class="modal"   @click.self="btnopen">
        <div class="box"  :style="{ 'background-color': background }">
            <button v-if="buttonClose" 
                class="toggleButton" 
                @click="btnopen" 
                >
            x
            </button>
            <slot></slot>
        </div>
        <!-- <button class="toggleButton" @click="btnopen">dsdsds</button> -->
    </div>
</template>

<script>
import { color } from 'd3-color';


export default {
    data() {
        return {
            openModal: false,
            color: 'red'
        }
    },
    props:{
        toggleButton: {
            type: Boolean,
            default: true
        },
        buttonClose: {
            type: Boolean,
            default: true
        },
        background: {
            type: String,
            default: '#333333'
        },
    },
    computed: {
        btnopen(){
            this.openModal = !this.openModal
        }
    },
    watch:{
        toggleButton(){
            this.openModal = !this.openModal
        }
    }
}
</script>

<style>

.modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #00000062;
    z-index: 10;
}
.box{
    position: relative;
    display: flex;
    justify-content: center;
    width: 40%;
    height: 60%;
    border-radius: 10px;
    background: color;
}
.toggleButton{
    color: #fff;
    font-size: 20px;

    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 15px;
}
.toggleButton:hover{
    filter: brightness(0.8);
}


</style>