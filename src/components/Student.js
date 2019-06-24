import React from 'react'

const Student = ({ id, name, class_year: classYear, percentage, handleSelectStudent }) => {

  return (
    <tr>
      <td>{name}</td>
      <td>{classYear}</td>
      <td>{percentage}</td>
      <td>
        <button className="ui button left" onClick={() => handleSelectStudent(id)}>
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
