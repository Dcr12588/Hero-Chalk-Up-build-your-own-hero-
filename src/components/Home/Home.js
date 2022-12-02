import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import HeroAbilities from '../../Elements/HeroAbilities';
import AuthContext from '../../store/authContext';

const Home = () => {
    const [heros, setHeros] = useState([])

    const authCtx = useContext(AuthContext)

    const getAllHeros = () => {
        axios.get('/Heros', {
            headers: {
                authorization: authCtx.token
            }
        })
        .then(res => setHeros(res.data))
        .catch(err => console.log(err))
    }

    useEffect(getAllHeros, [])
    return(
        <div>
            <p className='build_hero_message'>Build Your Hero!</p>
                <p className='let'>Marvel? Anime? Let your favorite characters become ONE!</p>
            {heros.map(Hero => {
                return <HeroAbilities key={Hero.id}
                Hero={Hero} getAllHeros={getAllHeros}/>
            })}
        </div>
    )
}

export default Home;