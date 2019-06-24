import React from "react";

const CourseSelector = ({ courses, handleSelectCourse }) => {
  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={e => handleSelectCourse(parseInt(e.target.value, 10))} >
        {courses.map(course => <option key={course.id} className="item" value={course.id}>{course.name}</option>)}
      </select>
    </div>
  );
};

export default CourseSelector;