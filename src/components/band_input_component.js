import React from 'react';

export default class BandInput extends React.Component {
  onSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_BAND', payload: {title: event.target.children[1].value}})
  }
  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
          <label>Enter Band: </label>
          <input />
          <button type="submit">Submit</button>
      </form>
      )
  }
}
