import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import logo from '../../image/logo2.png'
import { useForm } from 'react-hook-form';
import './LogIn.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './login-config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
    const [loginUser,setLoginUser]=useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [isNewUser, setIsNewUser] = useState(false)
    const [user, setUser] = useState({
        error: '',
        name: ''
    })

    const { register, errors, handleSubmit } = useForm({
        mode: "onBlur"
    });
    
    const onSubmit = data => {
        if (isNewUser) {
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(result => {
                    const error="create"
                    setUser({error:error})
                })
                .catch(function (error) {
                    const errora = error.message;
                setUser({error:errora})
                    
                })
        } else {
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(result => {
                    setLoginUser(result.user)
                    history.replace(from);
                })
            .catch(function (error) {
                const errora = error.message;
                setUser({error:errora})
            });
        }

    };


    return (
        <Container align="center">
            <Header />
            <img className="w-25" src={logo} alt="" />
            <div className='login-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        isNewUser && <input name="name" placeholder="Name" ref={register({ required: true })} />
                    }
                    {errors.name && <p className='error'>This is required</p>}

                    <input
                        name="email"
                        placeholder="Email"
                        ref={register({ required: true })}
                    />
                    {errors.email && <p className='error'>This is required</p>}

                    <input type='password' name="password" placeholder="Password" ref={register({ required: true })} />
                    {errors.password && <p className='error' >This is required</p>}

                    {
                        isNewUser && <input type='password' name="confirmPassword" placeholder="Confirm Password" ref={register({ required: true })} />
                    }
                    {errors.confirmPassword && <p className='error'>This is required</p>}
                    <input type="submit" />
                    <p onClick={() => setIsNewUser(!isNewUser)} className="form-bottom-text">{isNewUser ? "Alrady have an account" : "Create a new account"}</p>
                    <h4 className="form-bottom-text">{user.error}</h4>
                </form>
            </div>
        </Container>
    );
};

export default LogIn;