import React, { useState,useEffect, useContext } from 'react';
import axios from 'axios'
import AuthContext from '../../store/authContext';
import HeroAbilities from '../../Elements/HeroAbilities';

const MyHero = () => {

    const authCtx = useContext(AuthContext)

    const[myHeros,setMyHeros] = useState([])

    const getMyHeros = () => {
        console.log(authCtx)
        axios.get(`/myHeros/${authCtx.userId}`, {
            headers: {
                authorization: authCtx.token
            }
        })
        .then(res => {
            console.log(res.data)
            setMyHeros(res.data)
        })
    }

    useEffect(getMyHeros, [])
    return (
        <div>
            {myHeros.map(Hero => {
                return (
                    <HeroAbilities Hero={Hero.Hero} myHeros={true}/>
                )
            })}
        </div>
    )
}

export default MyHero;