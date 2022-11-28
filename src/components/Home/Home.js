import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HeroAbilities from '../../Elements/HeroAbilities';

const Home = () => {
    const [heros, setHeros] = useState([])

    const getAllHeros = () => {
        axios.get('/Heros')
        .then(res => setHeros(res.data))
        .catch(err => console.log(err))
    }

    useEffect(getAllHeros, [])
    return(
        <div>
            {heros.map(Hero => {
                return <HeroAbilities key={Hero.heroId}
                Hero={Hero}/>
            })}
        </div>
    )
}

export default Home;