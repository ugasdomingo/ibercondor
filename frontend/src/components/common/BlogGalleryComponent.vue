<script lang="ts" setup>
import { type IPost } from 'src/interfaces/IPost';

defineProps({
    posts: {
        type: Array as () => IPost[],
        required: true,
    },
});
</script>

<template>
    <div class="cards-container" id="blog">
        <div v-for="post in posts" :key="post?._id" class="my-card">
            <router-link :to="'/blog/' + post?._id">
                <img
                    class="portadas-home2"
                    :src="
                        'https://res.cloudinary.com/djxptmtna/image/upload/v1684157531/' +
                        post?.img.public_id
                    "
                />
            </router-link>
        </div>
    </div>
</template>
<style scoped lang="scss">
.cards-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.my-card {
    margin: 8px;
    cursor: pointer;
}
.portadas-home2 {
    width: 250px;
    height: 250px;
    border-radius: 16px;
    object-fit: cover;
}

@media screen and (max-width: 760px) {
    .cards-container {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
}
</style>
