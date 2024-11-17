import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();
    const {userLogin,setUser} = useContext(AuthContext);
    const [error,setError] = useState('');

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password") 

        userLogin(email,password)
        .then(result =>{
            setUser(result.user)
            // console.log(result.user)
            navigate(location?.state? location.state : "/")
        })
        .catch(error =>{
            // console.log(error.code)
            setError(error.code)
        })
    }

    return (
        <div className="card  w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-10">
            <form onSubmit={handleLogin} className="card-body">
            <h3 className='text-xl font-bold text-center mb-4'>Login Your Account</h3>
                <div className="form-control">
                    
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        {
                            error && <p className='text-sm text-red-500'>{error}</p>
                        }

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className='text-xs ml-8 mb-2'>Don’t Have An Account ? <Link to="/auth/register" className='text-red-500 underline'>Register</Link></p>
        </div>
    );
};

export default Login;