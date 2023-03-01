<template>

        <div class="button">
            <slot></slot>
        </div>

</template>

<script>
export default {
    props:{
        cor:true,
    }
}

</script>

<style scoped>

.button{
    width: 50%;
    padding: 10px 20px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
}

.button:hover{
    filter: brightness(0.8);
}
</style>