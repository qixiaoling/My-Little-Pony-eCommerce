import React, {useEffect, useState} from 'react';
import axios from "axios";
import PonyCard from "../PonyCard/PonyCard";
import './HomeCardSection.css'

function HomeCardSection() {


    const [ponyData, setPonyData] = useState([]);


    async function getDataRarity() {
        try {
            const result = await axios.get('https://ponyweb.ml/v1/character/all?limit=6');
            setPonyData(result.data.data);
            console.log(result.data.data)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getDataRarity();

    }, [])

    return (
        <div className='card-section-container'>
            <div className='card-section-title'>
                <span className='glitter'>Meet the Magical Friends </span>
            </div>

            <PonyCard ponyData={ponyData}/>
        </div>
    )
}

export default HomeCardSection