import { Button } from '@material-ui/core'
import { Facebook } from '@material-ui/icons'
import React from 'react';
import './Login.css'
import { auth, provider} from './Firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login = () => {
    //use dispatch for actions
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        //sign in users using google pop up through firebase
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch(err => alert(err));
        
    }
    return (
        <div className="login">
            <div className="login-logo">
                <Facebook className="login-icon"/>
                <h2>Facebook</h2>
            </div>

            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
