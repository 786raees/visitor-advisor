import axios from 'axios';

export const getPlacesData = async ({sw, ne},type) => {
    try {
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '6221cc5d14msh67a0144bb02cd4cp19e7dcjsn6dacff8aa6d8'
            }
          });
        return data;
    } catch (error) {
        console.log(error)
    }
}