import React from 'react';

const HeroAbilities = ({Hero}) => {
    console.log(Hero)
    return (
        <div>
            Strength: {Hero.Strength}
        </div>
    )
}

export default HeroAbilities;