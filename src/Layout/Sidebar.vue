<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
      <div class="lo"><i class="fi fi-rr-d"></i></div>
			<!-- <img :src="logoURL" alt="Vue" />  -->
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons"><i class="fi fi-rr-angle-right"></i></span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">

			<router-link to="/" class="button">
				<span class="material-icons"><i class="fi fi-rr-apps"></i></span>
				<span class="text">Dashboard</span>
			</router-link>

      <router-link to="/about" class="button">
        <span class="material-icons"><i class="fi fi-rr-chat-arrow-grow"></i></span>
        <span class="text">Rendimento</span>
      </router-link>

			<router-link to="/wallet" class="button">
				<span class="material-icons"><i class="fi fi-rr-chart-pie-alt"></i></span>
				<span class="text">Wallet</span>
			</router-link>

			<router-link to="/transaction" class="button">
				<span class="material-icons"><i class="fi fi-rr-credit-card"></i></span>
				<span class="text">Tranvações</span>
			</router-link>


		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons"><i class="fi fi-rr-settings"></i></span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'


const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
// console.log(is_expanded);

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style  scoped>

.lo{
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
}
.router-link-exact-active {
  background-color: var(--dark-alt);
  border-right: 5px solid var(--primary); }
  .router-link-exact-active .material-icons, .router-link-exact-active .text {
    color: var(--primary); }

aside {
 

  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out; }
  aside .flex {
    flex: 1 1 0%; }
  aside .logo {
    margin-bottom: 1rem; }
    aside .logo img {
      width: 2rem; }
  aside .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out; }
    aside .menu-toggle-wrap .menu-toggle {
      transition: 0.2s ease-in-out; }
      aside .menu-toggle-wrap .menu-toggle .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out; }
      aside .menu-toggle-wrap .menu-toggle:hover .material-icons {
        color: var(--primary);
        transform: translateX(0.5rem); }
  aside h3, aside .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out; }
  aside h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase; }
  aside .menu {
    margin: 0 -1rem; }
.button {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    margin: 10px 0;
    padding: 0.5rem 1rem; }

.button .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out; }
.button .text {
        color: var(--light);
        transition: 0.2s ease-in-out; }
.button:hover {
    background-color: var(--dark-alt); 
  }
.button:hover .material-icons,
.button:hover .text {
          color: var(--primary); }
.footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out; }
.footer p {
      font-size: 0.875rem;
      color: var(--grey);
}
  @media (max-width: 1024px) {
    aside {
      position: absolute;
      z-index: 99; } }

.is-expanded {
  width: 200px }
  .is-expanded .menu-toggle-wrap {
    top: -3rem; }
    .is-expanded .menu-toggle-wrap .menu-toggle {
      transform: rotate(-180deg); }
  .is-expanded h3, .is-expanded .button .text {
    opacity: 1; }
  .is-expanded .button .material-icons {
    margin-right: 1rem; }
  .is-expanded .footer {
    opacity: 0; }

</style>