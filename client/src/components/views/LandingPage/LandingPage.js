import React, {useEffect} from 'react'
import Axios from 'axios';


function LandingPage(props) {

    useEffect(() => {

        Axios.get('/api/hello')
            .then(response => console.log(response.data))

    }, [])

    const logoutHandler = () => {
        Axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success) {
                    setTimeout(() => props.history.push('/login'), 1000);
                } else {
                    alert('logout failed ...')
                }
            })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height:'100vh', flexDirection:'column'}}>
            <h2>start</h2>
            <button onClick={logoutHandler}>
                logout
            </button>
        </div>
    )
}

export default LandingPage
