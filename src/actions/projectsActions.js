import axios from 'axios';

export function getProjects(){
    return {
        type: "FETCH_PROJECTS",
        payload: axios.get("https://api.github.com/users/survivorbat/repos")
    }
}