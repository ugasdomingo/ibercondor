<script setup lang="ts">
defineProps<{
    menuType: string;
}>();
</script>

<template>
    <nav :class="menuType">
        <a class="nav-btn" href="/#comparar">
            Comparador Energía <q-icon name="keyboard_double_arrow_down" />
        </a>
        <a class="nav-btn" href="/#paneles">
            Paneles Solares <q-icon name="keyboard_double_arrow_down" />
        </a>
        <a class="nav-btn" href="/#blog">
            Blog <q-icon name="keyboard_double_arrow_down" />
        </a>
    </nav>
</template>

<style scoped lang="scss">
.normal {
    z-index: 900;
    color: $primary;
}
.mobile {
    z-index: 900;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    position: absolute;
    top: 10vh;
    right: 0;
    color: whitesmoke;
    background-color: $primary;
}
.nav-btn {
    padding: 0.6rem;
    margin: 0 4px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.2rem;
    color: $secondary;
}

@media screen and (max-width: 760px) {
    .nav-btn {
        color: whitesmoke;
    }
}
</style>
