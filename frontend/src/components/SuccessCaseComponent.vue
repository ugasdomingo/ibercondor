<script setup lang="ts"></script>

<template>
    <section class="success-container">
        <h4>Este caso de éxito podrías ser tu:</h4>
        <div class="success-info">
            <div class="column items-center">
                <h6>Factura antes de comparar:</h6>
                <img
                    src="/img/factura-cara-grande.webp"
                    alt="costosa"
                    class="invoice-img-big"
                />
            </div>
            <div class="separador"></div>
            <div class="column items-center">
                <h6>Factura el mes siguiente:</h6>
                <img
                    src="/img/factura-buena-grande.webp"
                    alt="barata"
                    class="invoice-img-big"
                />
            </div>
        </div>
        <!-- Background Image  -->
        <img
            src="../../public/img/background.webp"
            alt="Hero"
            class="hero-background"
        />
    </section>
</template>

<style scoped lang="scss">
.success-container {
    width: 100%;
    box-sizing: border-box;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    position: relative;
}
.success-container h4 {
    text-align: center;
    margin-bottom: 0;
    color: $primary;
}
.success-info {
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 1rem;
}
.separador {
    width: 1px;
    height: 250px;
    border: 1px solid $primary;
}
.invoice-img-big {
    max-width: 200px;
    object-fit: cover;
}
.hero-background {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: top;
    top: 0;
    left: 0;
    z-index: -900;
}

@media screen and (max-width: 760px) {
    .success-container {
        width: auto;
    }
    .success-container h4 {
        margin-bottom: 2rem;
    }
    .success-info {
        width: auto;
        flex-direction: column;
        border: 0;
    }
    .success-info h6 {
        text-align: center;
        font-weight: 600;
        margin: 0;
    }
    .separador {
        display: none;
    }
    .invoice-img-big {
        margin: 12px 0;
    }
    .hero-background {
        object-position: bottom;
    }
}
</style>
