<script setup lang="ts">
//Import Tootls
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuoteStore } from '../../stores/quote-store';

//Activate tools
const router = useRouter();
const quoteStore = useQuoteStore();

//Loading
const loadding = ref(false);

//Catch data
const quoteName = ref('');
const quoteEmail = ref('');
const quotePhone = ref('');
const quoteZipcode = ref('');
const quoteDirection = ref('');
const quoteType = ref('');
const quoteTime = ref('');
const img = ref();
const politiquesAccepted = ref(false);

defineProps<{
    size: string;
}>();

const fileInput = ref();
const handleFileChange = () => {
    img.value = fileInput?.value?.files[0];
};

const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;

        let formData = new FormData();

        //Push info to formData
        formData.append('quotesName', quoteName.value);
        formData.append('quotesEmail', quoteEmail.value);
        formData.append('quotesPhone', quotePhone.value);
        formData.append('quotesZipcode', quoteZipcode.value);
        formData.append('quotesDirection', quoteDirection.value);
        formData.append('quotesType', quoteType.value);
        formData.append('quotesTime', quoteTime.value);
        formData.append('img', img.value);

        await quoteStore.createQuote(formData);
    } catch (error: any) {
        console.log('error', error);
    }
};
</script>

<template>
    <section class="solar-container" :style="size">
        <h5>Cotizar sin compromisos</h5>
        <p>La foto de su factura es opcional.</p>
        <!-- <q-spinner-pie color="primary" size="5em" v-if="loadding" /> -->
        <!-- v-else -->
        <form @submit.prevent="handleSubmit" class="form">
            <input
                v-model="quoteName"
                placeholder="Nombre y Apellido"
                type="text"
                class="input"
                :rules="[(val:any) => (val && val.length > 0) || 'Campo Requerido']"
            />

            <input
                v-model="quoteEmail"
                placeholder="Email"
                class="input"
                type="text"
                :rules="[
                    (val:any) =>
                        (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                        'Formato email incorrecto'
                ]"
            />

            <input
                v-model="quotePhone"
                placeholder="Número de Teléfono"
                type="text"
                class="input"
                :rules="[(val:any) => (val && val.length > 0) || 'Campo Requerido']"
            />

            <select v-model="quoteType" id="opcion" class="select">
                <option disabled selected value="">
                    ¿Dónde desea la instalación?
                </option>
                <option value="Hogar">Para mi hogar</option>
                <option value="Empresa">Para mi empresa</option>
                <option value="Comunidad">Para mi comunidad</option>
            </select>

            <input
                v-model="quoteZipcode"
                placeholder="ZipCode"
                type="text"
                class="input"
                :rules="[(val:any) => (val && val.length > 0) || 'Campo Requerido']"
            />

            <input
                v-model="quoteDirection"
                placeholder="¿Dirección de Instalación?"
                type="text"
                class="input"
                :rules="[(val:any) => (val && val.length > 0) || 'Campo Requerido']"
            />

            <select v-model="quoteTime" id="opcion" class="select">
                <option disabled selected value="">
                    ¿Cuál es el horario en que más consume energía?
                </option>
                <option value="Día">Día 08:00 - 23:00</option>
                <option value="Noche">Noche 00:00-07:00</option>
                <option value="24-horas">Todo el día</option>
            </select>

            <p>Adjuntar factura o una foto:</p>
            <input
                type="file"
                ref="fileInput"
                @change="handleFileChange"
                accept="image/*"
                placeholder="Adjunta tu Factura"
            />

            <!-- RGDP  -->
            <div class="rgdp">
                <input
                    type="checkbox"
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
                <RouterLink to="politicas">Ver políticas</RouterLink>
            </div>

            <!-- Buttons  -->
            <div>
                <button v-if="politiquesAccepted" class="register-btn">
                    Agendar Llamada
                </button>
                <button v-else class="login-btn">Agendar Llamada</button>
            </div>
        </form>
    </section>
</template>

<style scoped lang="scss">
.solar-container {
    border: 1px solid $primary;
    padding: 1rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
}
.solar-container h5 {
    margin: 0;
    font-weight: 600;
}
.solar-container p {
    margin: 0.5rem 0 0;
}
.form {
    display: flex;
    flex-direction: column;
}
.form input {
    margin: 0.5rem 0;
}
.select {
    height: 30px;
    line-height: 0px;
    border: 1px solid $secondary;
}
/* RGDP */
.rgdp {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: xx-small;
    padding: 4px 0;
}
.rgdp p {
    margin: 0;
}

/* Buttons */
.register-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 0px;
    font-weight: 600;
    font-size: medium;
    background-color: $primary;
    color: whitesmoke;
}
.login-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 1px solid grey;
    font-weight: 600;
    font-size: medium;
    background-color: rgba(128, 128, 128, 0.041);
    color: grey;
    cursor: default;
}

@media screen and (max-width: 760px) {
    .solar-container {
        width: 100%;
    }
}
</style>
