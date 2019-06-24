import React from "react";
import Student from "./Student";

const StudentsList = ({ students, handleSelectStudent }) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Student Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Class Year</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Course Percentage</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Edit</h3>
          </th>
        </tr>

        {students.map(student => <Student key={student.id} {...student} handleSelectStudent={handleSelectStudent} />)}
      </tbody>
    </table>
  );
};

export default StudentsList;
