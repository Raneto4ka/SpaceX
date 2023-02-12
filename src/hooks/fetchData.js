import { ref, onMounted } from 'vue';
import axios from 'axios';

/**
 * Получение данных по API
 *
 * @param url
 * @returns []
 */
export function fetchData(url) {
    const baseUri = 'https://api.spacexdata.com/v4/';

    const dataApi = ref([]);

    const fetching = async () => {
        try {
            const response = await axios.get(`${baseUri}${url}`);

            dataApi.value = await response.data;
        } catch(e) {
            console.log(e);
        }
    };

    onMounted(fetching);

    return {
        dataApi
    };
}
