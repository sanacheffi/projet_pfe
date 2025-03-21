import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user registered:",{firstName, lastName, email, password});
    }
  return (
    <div className="flex items-center justify-center">
      <div className="flex-col justify-center p-8 md:p-12">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
        {/* <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Artisanat Cheffi</h2>
        </div> */}
        <h2 className="text-2xl font-medium uppercase text-center mb-6">S'inscrire</h2>
        {/* <p className="text-center mb-6">Entrez votre e-mail et votre mot de passe pour vous connecter.</p> */}
        <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Prénom</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Entrez votre prénom"/>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Nom</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Entrez votre nom"/>
        </div>
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
        <button type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">
        S'inscrire
        </button>
        <p className="mt-6 text-center text-sm">Vous avez déjà un compte ?
            <Link to="/login" className='text-blue-500'> Connectez-vous !</Link>
        </p>
      </form>
      </div>
    </div>
  )
}

export default Register
