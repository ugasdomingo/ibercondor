//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from 'src/boot/axios';
import { type IPost } from 'src/interfaces/IPost';

//Define Stores
export const useBlogsStore = defineStore('Blog', () => {
    //Serve Blogs data
    const allBlogs = ref();
    const oneBlog = ref<IPost | null>(null);

    //Logics
    const getAllBlogs = async (showPost: number) => {
        try {
            const response = await api.get('/post/all');

            const posts = response.data;

            if (showPost === 0) {
                allBlogs.value = posts;
            } else {
                const finalArray = posts.slice(-showPost);
                allBlogs.value = finalArray;
            }
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getBlogByID = async (id: string) => {
        try {
            const res = await api({
                url: '/post/' + id,
                method: 'GET',
            });

            oneBlog.value = res.data;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        allBlogs,
        oneBlog,
        getAllBlogs,
        getBlogByID,
    };
});
