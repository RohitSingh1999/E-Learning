import React, { useState } from 'react';
import authService from './services/authService'; // Ensure you import authService

function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.Login(form).then(response => {
            console.log(response.data.message);
            window.location.href = '/Hero'; // Redirect to the Hero page
        }).catch(err => {
            console.error(err.response.data.message);
        });
    };

    return (
        <div className="h-full bg-gray-400 dark:bg-gray-900">
            <div className="mx-auto">
                <div className="flex justify-center px-6 py-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600195077077-7c815f540a3d?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                        </div>
                        <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                            <h1 className="text-4xl font-bold mb-8">Login Form</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-lg font-semibold">Email</label>
                                    <input type="text" name="email" className="w-full border border-gray-300 px-4 py-2 rounded-lg" placeholder="Enter your email"
                                        value={form.email} onChange={handleChange} />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-lg font-semibold">Password</label>
                                    <input type="password" name="password" className="w-full border border-gray-300 px-4 py-2 rounded-lg" placeholder="Enter your password"
                                        value={form.password} onChange={handleChange} />
                                </div>
                                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600" type="submit">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
