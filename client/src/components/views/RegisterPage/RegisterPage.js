import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../actions/user_actions';

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("");


    const emailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const nameHandler = (event) => {
        setName(event.currentTarget.value);
    }


    const submitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        }

        let body = {
            name: Name,
            email: Email,
            password: Password
        }

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success) {
                    
                    
                    setTimeout(() => props.history.push('/login'), 3000);
                    
                } else {
                    alert('회원가입에 실패했습니다.')
                }
            })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height:'100vh'}}>
            <form style={{display: 'flex', flexDirection:'column'}} onSubmit={submitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={emailHandler} />
                <label>Name</label>
                <input type="text" value={Name} onChange={nameHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={passwordHandler} />
                <label>ConfirmPassword</label>
                <input type="password" value={ConfirmPassword} onChange={confirmPasswordHandler} />
                <br/>
                <button onSubmit={submitHandler}>
                    register
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
