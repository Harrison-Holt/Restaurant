<template>
    <section class="d-flex flex-column">
        <form class="sign-in-form">
            <label for="email"Email:></label><br>
            <input id="email" type="email" required><br><br>
            <label for="passord"Password:></label><br>
            <input id="password" type="password" required><br><br>
        </form>
    </section>
</template>

<script>
export default {
    name: "AppSignin"
}
</script>

