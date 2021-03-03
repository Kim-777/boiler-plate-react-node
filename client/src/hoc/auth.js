import React, {useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (SpecificComponent, option, adminRoute = null) {

    function AuthenticationCheck(props) {

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response);

                //login 하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login')
                    }
                } else {
                    //로그인 한 상태
                    if(adminRoute && !response.payload.iasAdmin) {
                        props.history.push('/');
                    } else {
                        if(option === false)
                        props.history.push('/');
                    }
                }
            })

        }, []);

        return (
            <SpecificComponent />
        );
    }

    return AuthenticationCheck

}