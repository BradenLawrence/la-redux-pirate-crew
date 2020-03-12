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

// Page Elements
const store = createStore(crewReducer)
const crewContainer = document.querySelector("#current-crew")
const addCrewForm = document.querySelector("#new-pirate-form")
const plankButton = document.querySelector("#walk-the-plank")
const daveyJonesLocker = document.querySelector("#walked-crew")
const plankWalkers = document.querySelector("#plank-walkers")

// Event Listeners
addCrewForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const crewName = event.currentTarget.name.value
  store.dispatch(welcomeAboard(crewName))
})
plankButton.addEventListener("click", (event) => {
  event.preventDefault()
  if(store.getState().crew.length > 0) {
    const scurvyBilgeRat = store.getState().crew[0].name
    store.dispatch(walkThePlank(scurvyBilgeRat))
  }
})

// Render
const render = () => {
  const crewListDisplay = store.getState().crew.map(crewMember => {
    return(`<li>${crewMember.name}</li>`)
  })
  crewContainer.innerHTML = crewListDisplay.join("")

  const walkedCrewListDisplay = store.getState().walked.map(walkedMember => {
    return(`<li>${walkedMember.name}</li>`)
  })
  daveyJonesLocker.innerHTML = walkedCrewListDisplay.join("")

  plankWalkers.innerHTML = store.getState().walked.length
}
render()
store.subscribe(render)
