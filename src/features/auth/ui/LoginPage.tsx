import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('token', 'demo-token');
        navigate('/dashboard');
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage