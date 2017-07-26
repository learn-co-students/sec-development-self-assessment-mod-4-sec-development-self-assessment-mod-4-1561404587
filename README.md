# React Immersive Code Challenge

## Instructions

For this project, you’ll be building out a React application that displays a list of student grades.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

When you clone down this project, the component `<ClassContainer />` will have an initial default state.  Use this data to get the students rendering.  Once that is complete, you can replace that initial state with data you fetch from [this provided API endpoint](https://sheltered-fortress-25476.herokuapp.com).


## Deliverables

**Please implement the following user stories:**
- As a user, you should be able to select a course from the dropdown menu which will place a call to the API endpoint for students in that course.
- When the course is changed, all the students for a given class should be listed and the course data should update.
- Users should be able to edit information for a single student which will make a call to update the API and render on the front end.

![example project](public/app.gif)

Use the above gif as an example of how the app should function.

We’ve provided some starter code you can use to guide you, but feel free to create or remove components as you see fit.

## Setup
After cloning down the project
- run `npm install`
- You can boot up the server with `npm start`. It will run on `localhost:3000`.
- The app uses [Semantic UI](https://semantic-ui.com/) for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.

## Suggested Workflow

You can approach this any way you would like but below is a reasonable approach to this challenge. If you are not sure where or how to begin, follow the steps here.

1) Get the list of students to display on the page given the default state data.
2) Ensure that the dropdown course menu updates the state.
3) After that is working, replace that student data with the JSON you fetch from the endpoint for each course: [https://sheltered-fortress-25476.herokuapp.com/courses/:id](https://sheltered-fortress-25476.herokuapp.com/courses/:id). It will be in a similar format to the default data.
4) With each course change, make sure that CourseData dynamically updates the average percentage for the course.
5) Make student information editable using the edit form.
6) Upon submit, persist the updated student information to the API using a post request to [https://sheltered-fortress-25476.herokuapp.com/students/:id](https://sheltered-fortress-25476.herokuapp.com/students/:id). The update student information should also be reflected on the front end.
7) Make sure that the average percentage for the course updates if an individual student percentage is updated.


## Criteria

We’ll be evaluating your code based on the following criteria:
- **React Components:** Does the app reasonably separate responsibilities into components and a have a component hierarchy?
- **Props:** Does the app have at least one presentational component that receives props? Does the app pass props down from a higher-level component to a lower one? Does the app make use of passing a functional prop?
- **State:** Does the app have a dropdown menu that responds to changes and calls this.setState? If an individual student is updated, does the state reflect that change?
- **API:** Does the app make an AJAX request to the API and return data? Does the update API call correctly persist student changes in the back end?
- **Feature:** Does the app update the average score for each course dynamically?
- **Best Practices:** Does the app follow best practices regarding state and component composition?


Good luck!
