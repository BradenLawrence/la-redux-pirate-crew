const { createStore } = Redux;
const ADD_CREW = "ADD_CREW"
const DELETE_CREW = "DELETE_CREW"

// Your initial state, reducer, constants, action creators, and JS code should go here!
// Action Creators
const welcomeAboard = (name) => {
  return {
    type: ADD_CREW,
    name: name
  }
}
const walkThePlank = (name) => {
  return {
    type: DELETE_CREW,
    name: name
  }
}

// Initial state
const defaultCrew = {
  crew: [
    { name: "Cap'n Brunzinger" },
    { name: "Mr. Smitty" }
  ]
}

