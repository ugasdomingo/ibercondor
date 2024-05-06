<template>
    <q-layout view="hHh lpR fff">
        <q-header class="row justify-between q-px-md items-center header">
            <RouterLink to="/">
                <q-img
                    src="/img/logo-ibercondor-nobg.png"
                    alt="logo image"
                    class="logo"
                />
            </RouterLink>

            <NavbarComponent :menu-type="'normal'" class="desktop-menu" />

            <div @click="toggleMenu" class="content-menu">
                <q-icon name="menu" color="primary" size="2rem" />
            </div>
            <NavbarComponent
                v-if="menuOpen"
                :menu-type="'mobile'"
                class="responsive-menu"
            />
        </q-header>

        <q-page-container>
            <router-view />
            <CallBtnComponent />
        </q-page-container>

        <q-footer elevated class="bg-secondary footer">
            <p>Todos los derechos reservados ©</p>
            <RouterLink to="trabaja-con-nosotros">
                Trabaja con nosotros
            </RouterLink>
        </q-footer>
    </q-layout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

//Import Components
import NavbarComponent from './NavbarComponent.vue';
import CallBtnComponent from './CallBtnComponent.vue';

//Activate tools
const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 120px;
    background-color: white;
    border-bottom: 1px solid $primary;
}
.logo {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
}
.content-menu {
    display: none;
    position: relative;
    z-index: 900;
}
.footer {
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}
.footer p,
a {
    margin: 0;
}
.footer a {
    text-decoration: none;
    color: whitesmoke;
    border-radius: 2rem;
    border: 1px solid whitesmoke;
    padding: 4px 1rem;
}

@media screen and (max-width: 760px) {
    .desktop-menu {
        display: none;
    }
    .content-menu {
        display: inherit;
        top: 0;
    }
    .footer {
        padding: 0 0.5rem;
        font-size: 0.7rem;
    }
}
</style>
