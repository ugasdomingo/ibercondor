<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { useLeadStore } from 'src/stores/lead-store';

//Import Components
import SolarFormComponent from 'src/components/common/SolarFormComponent.vue';

//Activate tools
const leadStore = useLeadStore();
const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};
const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <section class="panels-container" id="paneles">
        <!-- Left Content -->
        <div class="left-content">
            <h3>¿Para qué necesitas paneles solares en tu casa o empresa?</h3>
            <h5>
                El precio de la electricidad es volatil, en un momento puede
                tirar al traste tus presupuestos y costos. Pero cuando instalas
                paneles solares tu gasto de electricidad se vuelve casi cero, no
                te afecta la infalción y tu única preocupación es el
                mantenimiento anual.
            </h5>

            <!-- Buttons -->
            <div class="acction-btn">
                <a
                    href="tel:674395026"
                    class="call-btn"
                    @click="leadStore.registerClick"
                    >Llamar ahora</a
                >
                <button @click="openModal" class="modal-btn">
                    Solicitar Presupuesto
                </button>
            </div>

            <!-- Modal -->
            <div v-if="showModal" class="modal-overlay" @click="closeModal">
                <SolarFormComponent
                    :size="'width: autos'"
                    class="modal"
                    @click.stop
                />
            </div>
        </div>

        <!-- Right Content -->
        <div class="right-content">
            <img
                src="/img/paneles-solares.webp"
                alt="paneles-solares"
                class="panel-img-big"
            />
        </div>
    </section>
</template>

<style scoped lang="scss">
.panels-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6rem 2rem;
}
.left-content {
    width: 60%;
}
.left-content h3 {
    margin-bottom: 0;
    color: $primary;
}
.left-content p {
    width: 80%;
}
.acction-btn {
    width: 60%;
    display: flex;
    gap: 2rem;
}
.modal-overlay {
    position: fixed;
    top: 6rem;
    left: 0;
    z-index: 1999;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
}
.call-btn {
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: medium;
    background-color: $primary;
    color: whitesmoke;
    text-align: center;
    text-decoration: none;
}
.modal-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 1px solid $primary;
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-none);
    color: $primary;
}
.right-content {
    position: relative;
}
.panel-img-big {
    width: 350px;
    object-fit: cover;
    border-radius: 8px;
}

@media screen and (max-width: 760px) {
    .panels-container {
        padding: 8rem 1rem;
        display: flex;
        flex-direction: column-reverse;
    }
    .left-content {
        width: 100%;
    }
    .left-content h3 {
        font-size: xx-large;
        text-align: center;
    }
    .left-content h5 {
        text-align: justify;
    }
    .acction-btn {
        width: 100%;
        justify-content: center;
        gap: 1rem;
    }
    .call-btn {
        width: auto;
    }
    .modal-btn {
        width: auto;
    }
    .right-content {
        margin-bottom: 2rem;
    }
    .panel-img-big {
        width: 320px;
    }
}
</style>
