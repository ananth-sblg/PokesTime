import React from 'react';
import { connect } from 'react-redux';

function LaodingButton({ addPage }) {


  return (
        <div className="loading-button">
            <button onClick={() => addPage()}>Load More</button>
        </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPage: () => dispatch({type:"ADD_PAGE", page: 10})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaodingButton);