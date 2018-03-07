import React from 'react';

export default class BandInput extends React.Component {
  onSubmit(event){
    event.preventDefault();
    console.log("NOMG I'm in teh onSubmit() functions")
  }
  render(){
      return(
          <div>
              <form>
                  <label>Enter Band: </label>
                  <input />
                  <button type="submit">Submit</button>
              </form>
          </div>
      )
  }
}
