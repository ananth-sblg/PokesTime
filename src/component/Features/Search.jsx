import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Search extends Component {

    constructor() {
        super();
        this.myRef = React.createRef();
        this.state = {
            searchResult: [],
            searchStringLength: null,
            position: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        const pokes = this.props.Pokes;
        const searchResult = e.target.value ? pokes.filter(poke => {
            return poke.name.english.toUpperCase().includes(e.target.value.toUpperCase());
        }) : [];
        this.setState({
            searchResult,
            searchStringLength: e.target.value.length
        })
    }

    handleBlur = () => {
        this.setState({
            ...this.state,
        })
    }

    handleFocus = () => {
        this.setState({
            ...this.state,
        })
    }
    render() {
        const {searchResult, searchStringLength} = this.state;
        const searchedItems = searchResult && searchResult.map(item => {
            return (
                <Link to={'/poke/' + item.name.english} key={item.id}><strong>{item.name.english.slice(0, searchStringLength)}</strong>{item.name.english.slice(searchStringLength)}</Link>
            )
        })

        return (
            <div className="search">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="autocomplete" >
                        <input id="myInput" ref={this.myRef} onFocus={this.handleFocus}  onChange={this.handleChange} type="text" name="myCountry" placeholder={this.props.pholder} />
                        <div className="autocomplete-items" style={{display: searchResult.length ? 'block' : 'none'}}>
                            {searchedItems}
                        </div>
                    </div>
                    <input type="submit" value="search"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Pokes: state.pokes
    }
}

export default connect(mapStateToProps)(Search);