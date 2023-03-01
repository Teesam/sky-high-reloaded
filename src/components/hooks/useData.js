import { useEffect, useState } from "react";
import { client } from "../../utils/api.js";

export const useData = () => {

    const [ promotionData, setPromotionData ] = useState([]);
 
    useEffect( () => {

        const getData = () => {
            client.post(``, { 
                angular_test: "angular-developer" 
            })
            .then( response => {
                setPromotionData(response.data);
            }).catch(error => {
                console.log(error);
            })
        }

        getData();

    }, []);

    return [ promotionData ];

}