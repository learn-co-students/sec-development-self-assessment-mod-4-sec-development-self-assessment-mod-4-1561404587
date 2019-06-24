import React from 'react'

const EditStudent = ({ student, handleEditFormChange, handleFormSumbit }) => {

  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={handleFormSumbit}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            name="name"
            value={student.name}
            onChange={handleEditFormChange}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            name="class_year"
            value={student.class_year}
            onChange={handleEditFormChange}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            name="percentage"
            value={student.percentage}
            onChange={handleEditFormChange}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditStudent
