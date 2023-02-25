<template>
    <div  v-if="openModal" class="modal"   @click.self="btnopen">
        <div class="box">
            <button class="toggleButton" @click="btnopen"  >x</button>
        </div>
        <!-- <button class="toggleButton" @click="btnopen">dsdsds</button> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            openModal: false
        }
    },
    props:{
        toggleButton: {
            type: Boolean,
            default: true
        }
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
    width: 40%;
    height: 60%;
    border-radius: 10px;
    background: rgb(26, 26, 26);
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