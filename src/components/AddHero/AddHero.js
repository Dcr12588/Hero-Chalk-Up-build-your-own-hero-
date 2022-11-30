import React, {useContext, useState} from 'react';
import AuthContext from '../../store/authContext';
import axios from 'axios';
import './AddHero.css'

const AddHero = () => {


    const authCtx = useContext(AuthContext)

    const [Strength, setStrength] = useState('')
    const [Speed, setSpeed] = useState('')
    const [IQ, setIQ] = useState('')
    const [Durability, setDurabilty] = useState('')
    const [Skill, setSkill] = useState('')
    const [Weapon, setWeapon] = useState('')
    const [PowerSupply, setPowerSupply] = useState('')
    const [CombatAbility, setCombatAbility] = useState('')
    const [SpecialAbility, setSpecialAbility] = useState('')

    const addHero = e => {
        e.preventDefault()
        const body = { Strength, Speed, IQ,
            Durability, Skill, Weapon,
            PowerSupply, CombatAbility, SpecialAbility }

            axios.post(`/Heros/${authCtx.userId}`, body, {
                headers: {
                    authorization: authCtx.token
                }
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='build_hero'>
            <p className='build_hero_message'>Build Your Hero!</p>
                <p className='let'>Marvel? Anime? Let your favorite characters become ONE!</p>
            <form onSubmit={e => addHero(e)}>
                <div className='addForm'>
                <input  placeholder='Strength' type='text' onChange={e => setStrength(e.target.value)}></input>
                <input  placeholder='Speed' type='text' onChange={e => setSpeed(e.target.value)}></input>
                <input  placeholder='IQ' type='text' onChange={e => setIQ(e.target.value)}></input>
                <input  placeholder='Durability' type='text' onChange={e => setDurabilty(e.target.value)}></input>
                <input  placeholder='Skill' type='text' onChange={e => setSkill(e.target.value)}></input>
                <input  placeholder='Weapon' type='text' onChange={e => setWeapon(e.target.value)}></input>
                <input  placeholder='PowerSupply' type='text' onChange={e => setPowerSupply(e.target.value)}></input>
                <input  placeholder='CombatAbility' type='text' onChange={e => setCombatAbility(e.target.value)}></input>
                <input  placeholder='SpecialAbility' type='text' onChange={e => setSpecialAbility(e.target.value)}></input>
                </div>

                <button className='buildBtn'>Build Hero</button>
            </form>
        </div>
    )
}

export default AddHero;