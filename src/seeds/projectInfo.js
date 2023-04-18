import appointment from "../images/Add_appointment.gif";
import jungle from "../images/Jungle_Order.gif";
import workout from "../images/new-workout.gif";
import podium from "../images/podium.gif";
import fuel from "../images/fuel_split.gif";

export const projects = [
  {
    name: "Fuel Splitter",
    gif: fuel,
    link: "https://github.com/woobrendan/Fuel_Splitter",
    description:
      "Fuel Splitter is a project built from a need to fairly distribute the costs of gas for a communal car. The app allows for tracking trips taken, and in the end, allocating a percentage of the total miles taken and assigning the relative portion of the bill to the appropriate person",
    frameworks: "TypeScript, React.js, MongoDB, Cypress",
  },
  {
    name: "Podium Assistant",
    gif: podium,
    link: "https://github.com/woobrendan/Podium-Assistant",
    description:
      "A personal project designed to reduce time spent on post-race preparation for podiums. Dynamically grabs corresponding drivers based on the Series selected. Upon completetion generates a script with the results and all information related to the winners.",
    frameworks: "React.js, MongoDB, Express, Node.js",
  },
  {
    name: "Work It Out",
    gif: workout,
    link: "https://github.com/woobrendan/Work-It-Out",
    description:
      "Work It Out is an exercise tracking app created from an idea to full operation front and back end application. Users are able to track their exercise stats including weight used and numbers or reps. Users can also view different exercises for each muscle group including a how-to video.",
    frameworks: "React.js, PostreSQL, Express, Node.js",
  },
  {
    name: "Jungle Rails",
    gif: jungle,
    link: "https://github.com/woobrendan/Jungle-Rails",
    description:
      "A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails by example. Students are dropped into a pre-built app using a new Ruby language and asked to replicate real-world scenarios such as adding features, fixing bugs and adding testing to an existing app.",
    frameworks: "Ruby on Rails, PostreSQL, Active Record, Rspec",
  },
  {
    name: "Scheduler",
    gif: appointment,
    link: "https://github.com/woobrendan/scheduler",
    description:
      "Interview scheduler allows users to see available list of appointments, along with interviewers who are available on that day. Users can then book or edit an appointment with an interviewer and the app will update state to reflect the new appointment and show remaining slots available on a given day.",
    frameworks: "React.js, PostreSQL, Jest, Cypress, Storybook",
  },
];

// module.exports = {projects}
