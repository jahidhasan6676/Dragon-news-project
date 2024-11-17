
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext, useState } from 'react';

const Register = () => {

    const {createUser,setUser,updateUserProfile} = useContext(AuthContext);
    const [error,setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name")
        if(name.length < 5 ){
            setError({...error, name:"character must be 6 character"})
            return;
        }
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        // console.log(name,photo,email,password)

         createUser(email,password)
        .then(result =>{
            setUser(result.user);
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
                navigate('/')
            })
            .catch(error=>{
                console.log(error)
            })
        })
        // .catch(error =>{
        //     console.log(error.message)
        // })

        
    }

    // console.log(firebaseConfig.apiKey);
    return (
        <div>
            <div className="card  w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-10">
                <form onSubmit={handleSubmit} className="card-body">
                <h3 className='text-xl font-bold text-center mb-4'>Register Your Account</h3>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        {
                            error.name && <p className='text-sm text-red-500'>{error.name}</p>
                        }
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                    </div>


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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='text-xs ml-8 mb-2'>Already have an account ? <Link to="/auth/login" className='text-red-500 underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;