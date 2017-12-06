# React Immersive Code Challenge

## Instructions

For this project, you’ll be building out a React application that displays a list of student grades.

Part of what this code challenge is testing is your ability to follow given instructions. While you will have some freedom in how you implement the features, be sure to carefully read the directions and follow the steps in order to build the application. **It would be better to deliver 4 working and 3 not-working deliverables rather 7 half-working deliverables.**

## Setup
1) First fork and clone down the backend repository found here: https://github.com/learn-co-curriculum/immersive-assessment-react-alt-first-round-backendand and get the API running locally. Make sure you:
  - Make sure you have Postgres running. (You should see the elephant in the menu bar at the top of your screen.)
  - Run `rake db:setup`.
  - Remember that your frontend React app is running on port 3000. You should therefore specify to run your Rails server on a different port. To do this, start up the server with `rails s -p 3001`. Your server will be running on http://localhost:3001.
2) Fork and clone this repository.
3) After cloning down the project, run `npm install`.
4) You can boot up the server with `npm start`. It will run on `localhost:3000`.
5) The app uses [Semantic UI](https://semantic-ui.com/) for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.

## Deliverables

When you clone down this project, the component `<CourseContainer />` will have an initial default state.  Use this data to get the students rendering.  Once that is complete, you can replace that initial students state with data you fetch from the API.

The endpoints you need to hit are:
- GET: http://localhost:3001/courses/:id
- PATCH: http://localhost:3001/students/:id

Below are the deliverables you should create.

1) Get the list of students to display on the page given the default state data.
2) Ensure that the dropdown course menu updates the currentCourse state in CourseContainer. You should also show the name of the current course as a header in CourseContainer.
3) On change of the dropdown course menu, a call should be placed to the API to update the student state. This information can be retrieved from the endpoint for each course: http://localhost:3001/courses/:id. Make sure you know how the data you receive from the API is structured.
5) Make student information editable using the edit form. Clicking the button next to a student should populate the edit form with information for that student. Make this form a controlled component.
6) On submit, persist the updated student information to the API using a PATCH request to http://localhost:3001/students/:id. The updated student information should also be reflected on the front end. (When using `fetch` to make a PATCH request, make sure you capitalize the `{method: 'PATCH'}`)
7) If you have time, refactor the Edit Student form into its own component.
8) Note: All your coding should be done in this repo. You should not need to make any changes to the back end and there is no need to push the back end up upon submission.

![example project](public/app.gif)

Use the above gif as an example of how the app should function.

## Criteria

We’ll be evaluating your code based on the following criteria:
- **React Components:** Does the app reasonably separate responsibilities into components and a have a component hierarchy?
- **Props:** Does the app have at least one presentational component that receives props? Does the app pass props down from a higher-level component to a lower one? Does the app make use of passing a functional prop?
- **State:** Does the app have a dropdown menu that responds to changes and calls this.setState? If an individual student is updated, does the state reflect that change?
- **API:** Does the app make an AJAX request to the API and return data? Does the update API call correctly persist student changes in the back end?
- **Best Practices:** Does the app follow best practices regarding state and component composition? Is code structured cleanly? Are functions defined in the components they are most related to?


Good luck!
