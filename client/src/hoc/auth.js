import axios from 'axios';
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { authUser } from '../actions/user_actions'


export default function auth (SpecificComponent, option, adminRoute= null) {

    
    function AuthenticationCheck(props) {


        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(authUser())
            .then(response => {
                console.log(response)

                //로그인 하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login');
                    }
                } else {
                    //로그인한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/');
                    } else {
                        if(option === false) {
                            props.history.push('/');
                        }
                    }
                }
            })

        }, [])

        return (
            <SpecificComponent {...props} />
        )

    }

    return AuthenticationCheck;
}