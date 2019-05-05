import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

class CreatePoke extends React.Component {

    state = {
        name: {
            english: "",
            japanese: "フシギダネ",
            chinese: "妙蛙种子"
          },
          type: [
            
          ],
          base: {
            HP: 0,
            Attack: 0,
            Defense: 0,
            Attack: 0,
            Defense: 0,
            Speed: 0
          }
    }

    static getDerivedStateFromProps = (props) => {
        return props;
    }

    componentDidMount = () => {
        this.setState({
            ...this.state.poke
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const poke = this.state;
        poke.id = Math.floor(Math.random() * 10000)
        this.props.poke ? this.props.updatePoke(poke) : this.props.addPoke(poke);
        this.props.history.push('/home');

    }

    handleOnChange = (e) => {
        console.log(e.target.id)
        const value = e.target.value;
       switch(e.target.id) {
           case 'name':
                this.setState({
                    ...this.state,
                    name: {
                        ...this.state.name,
                        english: value
                    }
                })
            break;
           case 'attacks':
                this.setState({
                    ...this.state,
                    base: {
                        ...this.state.base,
                        Attack: value
                    }
                })
            break;
           case 'defenses':
                this.setState({
                    ...this.state,
                    base: {
                        ...this.state.base,
                        Defense: value
                    }
                })
            break;
           case 'types':
                this.setState({
                    ...this.state,
                    type: value.split(',')
                })
            break;
       }
    }

    render() {
        const {name, base, type} = this.state;
        return (

            <main className="create">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">Name</label><input id="name" type="text" placeholder="Type the name..." value={name && name.english} onChange={this.handleOnChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="types">Types</label><input id="types" type="text" placeholder="Type..." value={type && type.join(',')} onChange={this.handleOnChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="attacks">Attacks</label><input id="attacks" placeholder="Attacks..." value={base && base.Attack} type="number" onChange={this.handleOnChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="defenses">Defenses</label><input id="defenses" placeholder="Defenses..." value={base && base.Defense} type="number" onChange={this.handleOnChange} required/>
                    </div>
                    <div className="submit">
                        <input type="submit" value={this.props.poke ? "Update" : "Submit"} />
                    </div>
                </form>
            </main>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const param = ownProps.match.params.id;
    const poke = state.pokes.filter(poke => {
        return poke.id == param;
    })
    
    return {
        poke: poke[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPoke: (poke) => dispatch({ type: "ADD_POKE", poke }),
        updatePoke: (poke) => dispatch({ type: "UPDATE_POKE", poke })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoke);