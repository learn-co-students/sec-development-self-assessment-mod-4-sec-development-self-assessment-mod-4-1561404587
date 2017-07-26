import React, { Component } from 'react'
import CourseSelector from './CourseSelector'
import CourseData from './CourseData'
import EditStudent from './EditStudent'
import StudentsList from './StudentsList'
import courseList from '../courseList'

class CourseContainer extends Component {
  constructor() {
    super()

    this.state = {
      students: [{
          id: 1,
          name: "Tom Foolery",
          class_year: 10,
          percentage: 88
        }, {
          id: 2,
          name: "Juno Forte",
          class_year: 11,
          percentage: 95
        }, {
          id: 3,
          name: "Eli Frizzel",
          class_year: 12,
          percentage: 86
        }, {
          id: 4,
          name: "Phil George",
          class_year: 9,
          percentage: 77
        }, {
          id: 5,
          name: "Anna Cornell",
          class_year: 11,
          percentage: 98
        }
      ],
      currentCourse: {},
      currentStudent: {}
    }
  }

  handleCourseChange = () => {
    // your code here
  }

  handleSubmit = () => {
    // your code here
  }

  handleClick = () => {
    // your code here
  }

  render() {

    return (
      <div className="ui grid container">

        <CourseSelector
          handleChange={ "...your code here" }
        />

        <CourseData
          courseAverage={ "...your code here" }
          currentCourse={ "...your code here" }
        />

        <EditStudent
          student={ "...your code here" }
          handleSubmit={ "...your code here" }
        />

        <StudentsList
          students={ "...your code here" }
          handleClick={ "...your code here" }
        />

      </div>
    )
  }
}

export default CourseContainer
