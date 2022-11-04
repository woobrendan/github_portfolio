import appointment from '../images/Add_appointment.gif';
import jungle from '../images/Jungle_Order.gif';

export const projects = [
  {
    name: "Work It Out",
    gif: "placeholder",
    link: "https://github.com/woobrendan/Work-It-Out",
    description: "Work-It-Out is an app created from scratch as a final project for bootcamp students. Students are given the freedom to choose an idea for an app and to use a tech stack of their choosing. Work-It-Out uses ReactJS for the front-end, Express on the back-end and Postgres for database management.",
    frameworks: "ReactJS, PostreSQL, Express"
  },
  {
    name: "Jungle Rails",
    gif: jungle,
    link: "https://github.com/woobrendan/Work-It-Out",
    description: "A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails by example. Students are dropped into a pre-built app using a new Ruby language and asked to replicate real-world scenarios such as adding features, fixing bugs and adding testing to an existing app.",
    frameworks: "Ruby on Rails, PostreSQL, Active Record, Rspec"
  },
  {
    name: "Scheduler",
    gif: appointment,
    link: "https://github.com/woobrendan/scheduler",
    description: "Interview Scheduler is an introductory to React project. This project works to get bootcamp students comfortable with using React to develop interactive UI's. Creating various components and passing props, state and functions throughout to create a seamless user environment. Interview Scheduler is the first introduction to different testing frameworks such as Jest and Cypress. Throughout we look at the importance of testing and looking to have efficient coverage for our functions and applications",
    frameworks: "ReactJS, PostreSQL, Jest, Cypress, Storybook"
  },
]

// module.exports = {projects}