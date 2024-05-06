<script setup lang="ts"></script>

<template>
    <section class="hero-container">
        <!-- Hero content  -->
        <h2>
            Comparamos tu factura con toda la red<br />y te encontramos el mejor
            precio
        </h2>
        <a class="business-btn" href="#services">
            Descubre las formas de ahorrar en tu factura
            <q-icon name="keyboard_double_arrow_down" />
        </a>

        <!-- Hero Background Image  -->
        <img src="/img/hero-bumb.webp" alt="Hero" class="hero-background" />
    </section>
</template>

<style scoped lang="scss">
.hero-container {
    width: 100%;
    min-height: 500px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    position: relative;
}
h2 {
    width: 60%;
    color: whitesmoke;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 2rem;
}
a {
    width: 40%;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    font-weight: 400;
}
.hero-background {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: top;
    top: 0;
    right: 0;
    z-index: -900;
}

@media screen and (max-width: 760px) {
    .hero-container {
        min-height: 80vh;
        height: auto;
        padding: 1rem 1rem;
    }
    h2 {
        width: 85%;
        font-size: 2rem;
        line-height: 2.5rem;
        text-align: left;
    }
    a {
        width: auto;
    }
    .hero-background {
        object-position: bottom;
    }
}
</style>
