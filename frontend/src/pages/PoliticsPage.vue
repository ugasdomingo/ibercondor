<template>
    <q-page>
        <main class="politic-container">
            <PrivacyTextComponent />
        </main>
    </q-page>
</template>

<script setup lang="ts">
import PrivacyTextComponent from 'src/components/PrivacyTextComponent.vue';
</script>

<style scoped lang="scss">
.politic-container {
    padding: 2rem 6rem;
}
@media screen and (max-width: 760px) {
    .politic-container {
        padding: 2rem 0.5rem;
    }
}
</style>
