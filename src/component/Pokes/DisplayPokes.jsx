import React from 'react';
import { connect } from 'react-redux';
import PokeSummary from './PokeSummary';
import LoadingButton from '../Features/LoadingButton';

function DisplayPokes({ pokes }) {

  const pokesRendered = pokes && pokes.map((poke) => {
    return <PokeSummary key={poke.id} name={poke.name.english} level={poke.base.Attack} defense={poke.base.Defense}/>
  })

  return (
    <main className="pokes">
      {pokesRendered}
      <LoadingButton />
    </main>
  )
}

const mapStateToProps = (state) => {
  const pages = state.pages;
  return {
    pokes: state.pokes.slice(0, pages)
  }
}

export default connect(mapStateToProps)(DisplayPokes);