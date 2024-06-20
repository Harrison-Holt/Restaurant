<template>
    <header class="d-flex flex-row justify-content-between">
            <i class="fas fa-bars icon-size"></i>
            <section class="title-logo d-flex flex-row">
            <img src="@/assets/tavern_logo.png" alt="tavern_logo" class="tavern_logo"> 
            <h1>Harry's Tavern</h1>
            </section>  
            <nav>
                <ul class="d-flex flex-row">
                <li><a href="#">Locations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Cartering</a></li>
                <li><a href="@/Sign-In.vue">Sign in</a></li>
                </ul>
            </nav>
        </header>
</template>

<script>
    export default {
        name: 'AppHeader'
    }; 
</script>

<style scoped>
@import "@/assets/Restaurant_Page.css"; 
</style>