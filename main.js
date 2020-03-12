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

// Reducer
const crewReducer = (state = defaultCrew, action) => {
  switch(action.type) {
    case ADD_CREW:
      const updatedCrew = state.crew.concat({ name: action.name })
      return Object.assign({}, state, { crew: updatedCrew })
    case DELETE_CREW:
      const filteredCrew = state.crew.filter(crewMember => {
        return crewMember.name !== action.name
      })
      return Object.assign({}, state, { crew: filteredCrew })
    default:
      return state
  }
}

