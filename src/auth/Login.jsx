import React, { useState } from "react";
export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const OnsubmitLogin = (e) => {
        if (username.trim()) {
            onLogin()
        }
    }
    return (
        <div>
            <form action="login" onSubmit={OnsubmitLogin}>
                <input type="text" placeholder="Ender User Name"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}