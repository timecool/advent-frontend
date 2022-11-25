import { useState } from 'react';

import { login } from '@/scripts/user';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async () => {
    setError('');
    if (!password || !username) {
      setError('please fill in all fields');
      return;
    }
    const errorResponse = await login(username, password);
    if (errorResponse) {
      setError(error);
    }
  };

  return (
    <div className="border-b py-1">
      <p className="text-red-700">{error}</p>
      <input
        type="text"
        className="border-transparent bg-transparent focus:outline-0"
        placeholder="Username"
        defaultValue={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        className="border-transparent bg-transparent focus:outline-0"
        placeholder="Password"
        defaultValue={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        className="px-4 py-1 font-bold"
        style={{ background: '#1177ab' }}
        onClick={submit}
      >
        {' '}
        Login{' '}
      </button>
    </div>
  );
};

export default Login;
