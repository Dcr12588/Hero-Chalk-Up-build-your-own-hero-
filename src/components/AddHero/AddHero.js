import React, {useContext, useState} from 'react';
import AuthContext from '../../store/authContext';
import axios from 'axios';

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

            axios.post(`/Heros/${authCtx.userId}`, body)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='build_hero'>
            <form onSubmit={e => addHero(e)}>
                <input placeholder='Strength' type='text' onChange={e => setStrength(e.target.value)}></input>
                <input placeholder='Speed' type='text' onChange={e => setSpeed(e.target.value)}></input>
                <input placeholder='IQ' type='text' onChange={e => setIQ(e.target.value)}></input>
                <input placeholder='Durability' type='text' onChange={e => setDurabilty(e.target.value)}></input>
                <input placeholder='Skill' type='text' onChange={e => setSkill(e.target.value)}></input>
                <input placeholder='Weapon' type='text' onChange={e => setWeapon(e.target.value)}></input>
                <input placeholder='PowerSupply' type='text' onChange={e => setPowerSupply(e.target.value)}></input>
                <input placeholder='CombatAbility' type='text' onChange={e => setCombatAbility(e.target.value)}></input>
                <input placeholder='SpecialAbility' type='text' onChange={e => setSpecialAbility(e.target.value)}></input>

                <button>Build Hero</button>
            </form>
        </div>
    )
}

export default AddHero;