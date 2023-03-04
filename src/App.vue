<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar/>
		
	

		
		<!-- Content -->
		<div id="container">

			<router-view />
		</div>
	</div>
</template>

<script setup>
import Dashboard from './Layout/Dashboard.vue';
import Sidebar from './Layout/Sidebar.vue'
import Heade from './components/Heade.vue';
</script>

<style >
:root {
	--primary: #0998FE;
	--primary100: #0998fe75;
	--primary-alt:  #9801F5;
	--grey: #64748b;
	--dark: #1e293b;
	--darkblack: #101620;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
#container{
	width: 100%;
	padding: 20px;
	margin-left: 60px;
	background: var(--darkblack);
}

.app {
	display: flex;
	max-width: 1390px;
	position: relative;
}

@media (max-width: 1024px) {
      main {

        padding-left: 6rem;
      }
		}
	

</style>