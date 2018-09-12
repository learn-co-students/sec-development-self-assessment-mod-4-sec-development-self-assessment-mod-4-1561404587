import React from "react";

const CourseSelector = ({courseList}) => {
  return (
    <div className="sixteen wide column">
      <select className="ui dropdown">
        {courseList.map((course, i) => {
          return (
            <option key={i} className="item" data-value={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CourseSelector;
