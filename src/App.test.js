import App from './App';
import { shallowMount } from '@vue/test-utils';


describe('Набор тестов для App', () => {
    it('Должен создаваться без ошибок', () => {
        const errorCaptured = jest.fn();
        console.error = jest.fn();

        const wrapper = {
            ...App,
            errorCaptured,
        };

        shallowMount(wrapper, {
            global: {
                stubs: ['router-link', 'router-view']
            },
        });

        expect(errorCaptured).not.toHaveBeenCalled();
        expect(console.error).not.toHaveBeenCalled();
    });
});
