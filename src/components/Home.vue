<template >
    <div class="home">

        <div class="card card-style">
            <div class="card-box">
            <h2>total</h2>
            <i class="fa-solid fa-bitcoin-sign"></i> <span>10000</span>
            <h3>193802</h3>
            </div>

        </div>
        <div class="card">
            <div class="card-box">
            <h2>total</h2>
            <span>10000</span>
            <h3>193802</h3>
            </div>

        </div>
 
        <div class="card">
            <div class="card-box">
            <h2>total</h2>
            <span>10000</span>
            <h3>193802</h3>
            </div>

        </div>
        <div class="card">
            <div class="card-box">
            <h2>total</h2>
            <span>10000</span>
            <h3>193802</h3>
            </div>

        </div>

        
    </div>
</template>

<style scoped>
.home{
    width: 100%;
    height: 150px;
    background: var(--darkblack);

    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}
/* Created with https://www.css-gradient.com */

.card {
    height: 120px;
    flex: 1  200px;
    padding: 10px 20px;
    
    border-radius: 10px;
    background: var(--dark);

}
.card-style{
    background: #01A0FF;
    background: -webkit-linear-gradient(top left, #01A0FF, #9801F5);
    background: -moz-linear-gradient(top left, #01A0FF, #9801F5);
    background: linear-gradient(to bottom right, #01A0FF, #9801F5);
    box-shadow:
  0px 0px 5px #9801F5,
  0px 0px 9px #01A0FF
}
span{
    color: #fff;
    font-size: 50px;

}
i{
    font-size: 50px;
    color: #fff;
}
        
</style>