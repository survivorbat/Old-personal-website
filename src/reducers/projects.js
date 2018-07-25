function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index && value !== null
}

const initialState = {
    projects: [],
    technologies: [],
    fetching: false,
    error: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case "FETCH_PROJECTS_PENDING": {
            return {...state, fetching: true}
        }
        case "FETCH_PROJECTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_PROJECTS_FULFILLED": {
            return {...state, fetching: false, projects: action.payload.data, technologies: action.payload.data.map((project) => project.language).filter(onlyUnique)}
        }
        default: {
            return state
        }
    }
}