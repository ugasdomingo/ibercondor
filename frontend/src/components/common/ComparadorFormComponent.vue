<script setup lang="ts">
//Import Tools
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { RouterLink } from 'vue-router';
import { useLeadStore } from '../../stores/lead-store';

//Import components
import LoadingComponent from 'src/components/common/LoadingComponent.vue';

//Activate tools
const $q = useQuasar();
const leadStore = useLeadStore();

//Get form data
const loading = ref(false);
const leadsName = ref('');
const leadsEmail = ref('');
const leadsPhone = ref('');
const img = ref();
const politiquesAccepted = ref(false);
const fileInput = ref();
const handleFileChange = () => {
    img.value = fileInput?.value?.files[0];
};

const cleanData = () => {
    leadsName.value = '';
    leadsPhone.value = '';
    leadsEmail.value = '';
};

const handleSubmit = async () => {
    try {
        loading.value = !loading.value;

        const now = new Date();

        let formData = new FormData();

        //Push info to formData
        formData.append('leadsName', leadsName.value);
        formData.append('leadsPhone', leadsPhone.value);
        formData.append('leadsEmail', leadsEmail.value);
        formData.append('askFor', 'Comparar Luz/gas');
        formData.append('date', now.toLocaleString());
        formData.append('img', img.value);

        await leadStore.createLead(formData);

        cleanData();
        loading.value = !loading.value;

        $q.notify('Solicitud recibida');
    } catch (error: any) {
        console.error('error', error);
    }
};
</script>

<template>
    <section id="comparar" class="form-container">
        <h3>Adjunta tu factura de luz o gas y ahorra hasta un 40%</h3>
        <LoadingComponent v-if="loading" color="primary" />
        <form v-else @submit.prevent="handleSubmit" id="services" class="form">
            <input
                class="input"
                v-model="leadsName"
                placeholder="Nombre Completo"
                type="text"
                required
                :rules="[(val:any) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <input
                class="input"
                v-model="leadsPhone"
                placeholder="Número de Contacto"
                type="text"
                required
                :rules="[(val: any) => (val && val.length > 0) || 'Campo Requerido']"
            />

            <!-- Upload img  -->
            <input
                type="file"
                required
                ref="fileInput"
                @change="handleFileChange"
                accept="image/*"
            />

            <!-- RGDP  -->
            <div class="rgdp">
                <input
                    type="checkbox"
                    required
                    v-model="politiquesAccepted"
                    :value="politiquesAccepted"
                />
                <p>
                    Mediante la aceptación de la casilla el usuario da
                    consentimiento el envío de comunicaciones comerciales,
                    informando acerca de nuestros productos y servicios
                    <RouterLink to="rgdp">Más Información</RouterLink>
                </p>
                <p>Acceptar políticas de privacidad y tratamiento de datos</p>
                <RouterLink to="/politicas" class="politicas">
                    Ver políticas
                </RouterLink>
            </div>

            <!-- Buttons  -->
            <div>
                <button v-if="politiquesAccepted" class="register-btn">
                    Comparar
                </button>
                <button v-else class="login-btn">Comparar</button>
            </div>
        </form>

        <!-- Background Image  -->
        <img
            src="../../../public/img/background-2.webp"
            alt="Hero"
            class="hero-background"
        />
    </section>
</template>

<style scoped lang="scss">
/* General */
h3 {
    color: whitesmoke;
    text-align: center;
}
.form-container {
    width: 100%;
    box-sizing: border-box;
    padding: 4rem 2rem;
    background-color: #0221659f;
    position: relative;
}
.form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem auto;
    padding: 0 1rem;
}
/* RGDP */
.rgdp {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: xx-small;
    color: whitesmoke;
}
.rgdp p {
    margin: 0;
}
.politicas {
    color: gray;
}
/* Buttons */
.register-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 0px;
    font-weight: 600;
    font-size: medium;
    background-color: $accent;
    color: $primary;
}
.login-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 1px solid grey;
    font-weight: 600;
    font-size: medium;
    background-color: rgba(128, 128, 128, 0.048);
    color: grey;
    cursor: default;
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
    h3 {
        font-size: 2rem;
        margin-top: 0;
    }
    .form {
        width: auto;
    }
    .hero-background {
        object-position: bottom;
    }
}
</style>
