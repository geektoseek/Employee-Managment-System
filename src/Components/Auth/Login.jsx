import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        handleLogin(email, password);

        console.log("Form Submited", email);
        console.log("Form Submited", password);

        setemail('');
        setpassword('');
    };

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className="border-2 border-emerald-600 rounded-2xl p-20">
                <form
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center gap-3'
                >
                    <input
                        required
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className='rounded-full border-2 border-emerald-600 py-3 px-5 text-white text-xl outline-none bg-transparent focus:outline-none placeholder:text-gray-400'
                        type="email"
                        placeholder='Enter Your Email'
                    />

                    <input
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        className='rounded-full border-2 border-emerald-600 text-white py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 focus:outline-none'
                        type="password"
                        placeholder='Enter Your Password'
                    />

                    <button className='rounded-full mt-5 outline-none border-2 w-full border-emerald-600 py-3 px-5 text-xl text-white bg-emerald-600 focus:outline-none'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
