<template>
    <footer class="d-flex flex-row justify-content-around">

        <div class="d-flex flex-column location">
        <h2>Location</h2>
        <p><a href="https://www.google.com/maps?q=123+Main+Street,+Dallas,+TX+75201" target="_blank">123 Main Street, Dallas, TX 75201</a></p>
        </div>

        <div class="d-flex flex-column number">
        <h2>Phone Number</h2>
        <p><a href="tel:+12145557890">(214) 555-7890</a></p>
        </div>

        <div class="d-flex flex-column email">
        <h2>Email</h2>
        <p><a href="mailto:contact@harrystavern.com">contact@harrystavern.com</a></p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter'
    }
</script>

<style scoped>
@import "@/assets/Restaurant_Page.css";
</style>
