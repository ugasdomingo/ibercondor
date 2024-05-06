<template>
    <HeroComponent />
    <SolarPanelComponent />
    <AboutComponent />
    <SuccessCaseComponent />
    <ComparadorFormComponent />
    <BlogGalleryComponent :posts="blogStore.allBlogs" />
</template>

<script setup lang="ts">
//Import tools
import { useBlogsStore } from 'src/stores/blog-stores';
//Import components
import HeroComponent from 'src/components/HeroComponent.vue';
import SolarPanelComponent from 'src/components/SolarPanelComponent.vue';
import AboutComponent from 'src/components/AboutComponent.vue';
import SuccessCaseComponent from 'src/components/SuccessCaseComponent.vue';
import ComparadorFormComponent from 'src/components/common/ComparadorFormComponent.vue';
import BlogGalleryComponent from 'src/components/common/BlogGalleryComponent.vue';

//Activate tools
const blogStore = useBlogsStore();
blogStore.getAllBlogs(3);
</script>
