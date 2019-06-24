import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourseId: null,
    currentStudent: {
      name: "",
      class_year: "",
      percentage: "",
      id: null
    },
    courses: []
  }

  componentDidMount() {
    fetch('https://warm-shore-17060.herokuapp.com/api/v1/users/14/courses')
      .then(r => r.json())
      .then(courses => {
        this.setState({ courses, currentCourseId: courses[0].id })
      })
  }

  handleSelectCourse = currentCourseId => this.setState({ currentCourseId })

  handleSelectStudent = currentStudentId => {
    const currentStudent = this.state.students.find(student => student.id === currentStudentId)
    this.setState({ currentStudent })
  }

  handleEditFormChange = ({ target }) => {
    this.setState(prevState => {
      return {
        currentStudent: {
          ...prevState.currentStudent,
          [target.name]: target.value
        }
      }
    })
  }

  handleFormSumbit = e => {
    e.preventDefault()
    fetch(`https://warm-shore-17060.herokuapp.com/api/v1/users/14/students/${this.state.currentStudent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.currentStudent.name,
        class_year: this.state.currentStudent.class_year,
        percentage: this.state.currentStudent.percentage
      })
    })
      .then(r => r.json())
      .then(updatedStudent => {
        const updateStudents = this.state.students.map(student => student.id === updatedStudent.id ? updatedStudent : student)
        this.setState({
          students: updateStudents
        })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentCourseId !== this.state.currentCourseId) {
      fetch(`https://warm-shore-17060.herokuapp.com/api/v1/users/14/courses/${this.state.currentCourseId}`)
        .then(r => r.json())
        .then(({ students }) => this.setState({ students }))
    }
  }

  get currentCourse() {
    return this.state.courses.find(course => course.id === this.state.currentCourseId)
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.currentCourse && this.currentCourse.name}
        </div>

        <CourseSelector courses={this.state.courses} handleSelectCourse={this.handleSelectCourse} />

        <EditStudent student={this.state.currentStudent} handleFormSumbit={this.handleFormSumbit} handleEditFormChange={this.handleEditFormChange} />

        <StudentsList students={this.state.students} handleSelectStudent={this.handleSelectStudent} />
      </div>
    )
  }
}

export default CourseContainer
