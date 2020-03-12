const { createStore } = Redux;
const ADD_CREW = "ADD_CREW"
const DELETE_CREW = "DELETE_CREW"

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
  ],
  walked: []
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

// Render
const store = createStore(crewReducer)

const crewContainer = document.querySelector("#current-crew")

const addCrewForm = document.querySelector("#new-pirate-form")
addCrewForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const crewName = event.currentTarget.name.value
  store.dispatch(welcomeAboard(crewName))
})

const render = () => {
  const crewListDisplay = store.getState().crew.map(crewMember => {
    return(`<li>${crewMember.name}</li>`)
  })
  crewContainer.innerHTML = crewListDisplay.join('')
}
render()
store.subscribe(render)
