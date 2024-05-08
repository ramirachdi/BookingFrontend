import axios from "axios";

export const getUser = async (cookies, setUser) => {

    axios.get(`http://localhost:3000/users/${localStorage.getItem('userId')}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookies["access-token"],
        },
        withCredentials: true,
    }).then(response => response.data)
        .then(data => { setUser(data) })
        .catch(err => console.log(err))

}