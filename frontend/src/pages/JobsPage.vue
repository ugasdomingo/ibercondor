<template>
    <q-page class="job-page">
        <h3 class="q-mb-md">Estamos buscando tu talento</h3>
        <p class="q-mb-none">
            Necesitamos Teleoperadores en <span>Chimbote, Perú</span> URGENTE,
            <span>con o sin experiencia.</span>
        </p>
        <div class="job-info">
            <div class="requirement">
                <h5>Pedimos:</h5>
                <ul>
                    <li>Querer desarrollar capacidades comerciales</li>
                    <li>Ser resolutivo</li>
                    <li>Trabajo en equipo</li>
                    <li>Ambición</li>
                    <li>Puntualidad</li>
                </ul>
            </div>
            <div class="offer">
                <h5>Ofrecemos:</h5>
                <ul>
                    <li>Entrenamiento pagado desde el día 1</li>
                    <li>
                        Sueldo base:<span> $/1.250 hasta $/1.800</span> más
                        comisiones
                    </li>
                    <li>Plan de crecimiento dentro de la empresa</li>
                    <li>Buen ambiente laboral</li>
                    <li>Turno matutino <span>hasta las 2 de la tarde</span></li>
                </ul>
            </div>
        </div>
        <div class="contact">
            <h6>
                Si te quieres postular, envía tu CV por WhatsApp. <br />
                De estar interesados en tu perfil, te invitaremos a realizar una
                entrevista en nuestra oficina de Avenida francisco Bolognesi
                736, 2do Piso.<br />
                Preguntar por Domingo Ugas
            </h6>

            <a
                href="https://wa.me/+51914764828"
                class="text-black bg-green whatsapp-btn"
            >
                <img
                    src="../assets/whatsapp.svg"
                    class="whatsapp-icon"
                    alt="whatsapp"
                />
                Escríbenos por Whatsapp
            </a>
        </div>

        <!-- Hero Background Image  -->
        <img src="/img/background.webp" alt="Hero" class="hero-background" />
    </q-page>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.job-page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 2rem;
    position: relative;
}
.job-page h3,
p {
    text-align: center;
    color: $primary;
}
.job-page span {
    background-color: $accent;
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem;
}
.job-info {
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;
    margin-bottom: 2rem;
}
.job-info span {
    font-weight: 700;
}
.requirement {
    li {
        margin-bottom: 0.5rem;
    }
}
.offer {
    li {
        margin-bottom: 0.5rem;
    }
}
.contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;
}
.contact h6,
a {
    margin: 0;
}
.contact a {
    text-decoration: none;
    padding: 1rem 3rem;
    border: 2px solid $primary;
    border-radius: 1rem;
    color: $primary;
    background-color: $accent;
    display: flex;
    align-items: center;
}
.contact h6 {
    width: 70%;
    font-size: 1rem;
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

.whatsapp-icon {
    width: 1.5rem;
    margin-right: 0.5rem;
}
.whatsapp-btn {
    border: none;
}

@media screen and (max-width: 760px) {
    .job-page {
        padding: 0 0.5rem;
    }
    .job-info {
        grid-template-columns: 80%;
    }
    .job-info ul {
        margin: 0;
        padding: 0;
    }
    .contact h6 {
        text-align: center;
    }
}
</style>
