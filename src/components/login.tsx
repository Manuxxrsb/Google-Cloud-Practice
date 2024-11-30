import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Por favor, ingresa ambos campos");
    } else {
      // Aquí puedes manejar la lógica de inicio de sesión, como hacer una llamada a una API
      console.log('Usuario:', username);
      console.log('Contraseña:', password);
    }
  };

  return (
    <div className='border-2 border-black flex justify-center items-center flex-col'>
      <h2 className='text-2xl border-black border-2 rounded-xl m-6'>Iniciar Sesión</h2>
      {error && <p>{error}</p>}
      <form className='border-2 border-black rounded-xl p-4' onSubmit={handleSubmit}>
        <div className=''>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            className='border-2 border-gray-400 rounded-lg'
            type="text"
            id="username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            className='border-2 border-gray-400 rounded-lg'
            type="password"
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
        </div>
        <button 
        className='bg-blue-500 rounded-lg p-1'
        type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
