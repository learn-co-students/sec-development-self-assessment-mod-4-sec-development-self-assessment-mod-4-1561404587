import React from 'react'
import courseList from '../courseList'

const CourseSelector = () => {

  const courseField = () => {
    return <option
      className="item"
      data-value={ "...your code here" }
      >
         {/* "... your code here..." */}
      </option>
  }

  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={ "...your code here" }>
         {/* "... your code here..." */}
      </select>
    </div>
  )
}

export default CourseSelector
