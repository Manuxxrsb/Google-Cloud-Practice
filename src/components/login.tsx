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
    <div className='min-h-screen flex justify-center items-center bg-gray-50'>
      <div className='max-w-md w-full p-6 bg-white rounded-xl shadow-lg'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Iniciar Sesión</h2>
        
        {error && (
          <p className='text-red-500 text-sm mb-4 text-center'>{error}</p>
        )}
  
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='space-y-2'>
            <label 
              htmlFor="username" 
              className='block text-sm font-medium text-gray-700'
            >
              Nombre de usuario
            </label>
            <input
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              type="text"
              id="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              required
            />
          </div>
  
          <div className='space-y-2'>
            <label 
              htmlFor="password" 
              className='block text-sm font-medium text-gray-700'
            >
              Contraseña
            </label>
            <input
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              type="password"
              id="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </div>
  
          <button
            type="submit"
            className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
