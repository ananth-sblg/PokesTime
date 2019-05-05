import React, { Component } from 'react'
import { connect } from 'react-redux';
import pokeball from './../../assets/img/pokeball2.png';
import { Link } from 'react-router-dom'

class PokeDetails extends Component {
    render() {
        console.log(this.props.poke.name)
        const { name, base, type, id } = this.props.poke;
        return (
            <div className="poke-details">
                {/* <i className="fas fa-bread-slice"></i> */}
                <div className="img">
                    <img src={pokeball} height="250" width="250" alt="hello" />
                </div>

                <div className="poke-content">
                    <p><i className="fab fa-wolf-pack-battalion"></i> Name: {name.english}</p>
                    <p><i className="fab fa-grunt"></i>  Types: {type.join(', ')}</p>
                    <p><i className="fas fa-rocket"></i>  Attack: {base.Attack}</p>
                    <p><i className="fas fa-shield-alt"></i>  Defense: {base.Defense}</p>
                    <p><i className="fas fa-tachometer-alt"></i>  Speed: {base.Speed}</p>
                    <Link className="edge-fab" to={"/edit/" + id}><i className="circle fas fa-pen"></i></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const param = ownProps.match.params.name;
    const poke = state.pokes.filter(poke => {
        return poke.name.english === param;
    })
    return {
        poke: poke[0]
    }
}

export default connect(mapStateToProps)(PokeDetails);
