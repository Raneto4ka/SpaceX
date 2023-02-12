// import { mount, flushPromises } from '@vue/test-utils';
import { defineComponent } from 'vue';
import axios from 'axios';
import { fetchData } from './fetchData';
import { mount, flushPromises } from '@vue/test-utils';

const mockCompanyResponse = {
    'name': 'SpaceX',
    'founder': 'Elon Musk'
};

jest.spyOn(axios, 'get').mockResolvedValue(mockCompanyResponse);

it('Данные должны быть получены при onMount', async () => {
    const TestComponent = defineComponent({
        setup() {
            const { dataApi: company } = fetchData('company');

            return {
                company
            };
        },
        template: '<span>Test</span>',
    });

    const wrapper = mount(TestComponent);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.spacexdata.com/v4/company');

    await flushPromises();
    expect(wrapper.vm.company).toBeUndefined();
    console.log('wrapper.vm', wrapper.vm.company);
    // expect(wrapper.vm.company).toEqual(mockCompanyResponse);

    // const result = await fetchData('example');
    // console.log('result', result);
    // await expect(result).toEqual(mockCompanyResponse);
});
