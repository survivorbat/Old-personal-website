function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index && value !== null;
}

export default function reducer(state = {
    projects: [],
    technologies: [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
        case "FETCH_PROJECTS_PENDING": {
            return {...state, fetching: true}
        }
        case "FETCH_PROJECTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_PROJECTS_FULFILLED": {
            return {...state, fetching: false, fetched: true, projects: action.payload.data, technologies: action.payload.data.map(e => e.language).filter(onlyUnique)}
        }
        default: {
            return state;
        }
    }
}