import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import * as hooks from '@/composables/useGuides';
import UserGuide from "../UserGuide.vue";
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {ref} from "vue";


const vuetify = createVuetify({
    components,
    directives
})


describe('UserGuide.vue', () => {
    // Mock data for guides
    const mockGuides = [
        { id: 1, text: 'Guide 1', imageUrl: '/images/guide1.png', imageCaption: 'Caption 1' },
        { id: 2, text: 'Guide 2', imageUrl: '/images/guide2.png', imageCaption: 'Caption 2' },
    ];

    vi.spyOn(hooks, 'useGuides').mockReturnValue({guides:ref(mockGuides)})


    const wrapper = mount(UserGuide, {
        global: {
            plugins: [vuetify]
        }});



    it('renders guides correctly', async () => {

        // Check if the correct number of guides are rendered
        const cards = wrapper.findAllComponents({ name: 'VCard' });
        expect(cards.length).toBe(mockGuides.length);

        // Check the content of each card
        mockGuides.forEach((guide, index) => {
            const card = cards[index];
            expect(card.findComponent({ name: 'VCardTitle' }).text()).toBe(`${guide.id}. ${guide.text}`);

            expect(card.findComponent({ name: 'VImg' }).props('src')).toBe(guide.imageUrl);
            expect(card.find('p').text()).toBe(guide.imageCaption);
        });
    });
});
