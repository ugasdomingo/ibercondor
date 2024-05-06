//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export const useQuoteStore = defineStore('test', () => {
    const createQuote = async (formData: any) => {
        try {
            const res = await api({
                url: '/quote',
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

    return { createQuote };
});
