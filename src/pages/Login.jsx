import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user registered:",{email, password});
    }

  return (
    <div className="flex items-center justify-center">
      <div className="flex-col justify-center p-8 md:p-12">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
        {/* <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Artisanat Cheffi</h2>
        </div> */}
        <h2 className="text-2xl font-medium uppercase text-center mb-6">Se connecter</h2>
        <p className="text-center mb-6">Entrez votre e-mail et votre mot de passe pour vous connecter.</p>
        <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">E-mail</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Entrez votre adresse e-mail"/>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Mot de passe</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Entrez votre mot de passe"/>
        </div>
        <button type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">Se connecter</button>
        <p className="mt-6 text-center text-sm">Pas de compte ?
            <Link to="/register" className='text-blue-500'> Créez-en un</Link>
        </p>
      </form>
      </div>
    </div>
  )
}

export default Login
