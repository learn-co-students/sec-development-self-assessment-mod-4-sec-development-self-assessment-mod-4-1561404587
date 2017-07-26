import React, { Component } from 'react'

class EditStudent extends Component {
  constructor() {
    super()
    this.state = {
      student: {}
    }
  }

  onChange = () => {
    //your code here
  }

  render() {

    return (
      <div className="ui center aligned sixteen wide column">
        <form className="ui form"
        >
          <div className="inline fields">
            <div className="four wide field">
              <input
                id="name"
                type="text"
                value={ "...your code here" }
                placeholder="name"
                onChange={ "...your code here" }
              />
            </div>
            <div className="four wide field">
              <input
                id="class_year"
                type="number"
                value={ "...your code here" }
                placeholder="class year"
                onChange={ "...your code here" }
              />
            </div>
            <div className="four wide field">
              <input
                id="percentage"
                type="number"
                value={ "...your code here" }
                placeholder="percentage"
                onChange={ "...your code here" }
              />
            </div>
            <button className="ui button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditStudent
