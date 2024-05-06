//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from 'src/boot/axios';

export const useLeadStore = defineStore('lead', () => {
    const counterClicks = ref(0);

    const createLead = async (formData: any) => {
        try {
            const res = await api({
                url: '/lead/',
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                data: formData,
            });
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const registerClick = async () => {
        await api.post('/click', { userClick: 1 });
    };

    const getTotalClick = async () => {
        const res = await api({
            url: '/click/total',
            method: 'GET',
        });

        counterClicks.value = res.data;
    };

    return {
        createLead,
        registerClick,
        getTotalClick,
        counterClicks,
    };
});
