import pokeball from './../../assets/img/pokeball.PNG';
import React from 'react';
import { Link } from 'react-router-dom'

function PokeSummary({ name, level, defense }) {
    return (
        <Link to={"/poke/" + name}>
            <section className="poke">
                <div className="poke-img">
                    <img src={pokeball} height="50" width="50" alt="hello" />
                </div>
                <p>Name: {name}</p>
                <p>attachlevel: {level}</p>
                <p>defense: {defense}</p>
            </section>
        </Link>
    )
}

export default PokeSummary
