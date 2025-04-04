import React, { useState } from 'react'

const AddUser = () => {

    const [formData, setFormData] = useState({
            FirstName: "",
            LastName: "",
            email: "",
            password: "",
            role: "Client", 
        });
    
        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };
        
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formData);
            setFormData({
                FirstName: "",
                LastName: "",
                email: "",
                password: "",
                role: "Client",
            });
        };
    
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Ajouter un utilisateur</h2>
        <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Prénom</label>
                    <input 
                    type="text" 
                    name="FirstName" 
                    value={formData.FirstName} 
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Nom</label>
                    <input 
                    type="text" 
                    name="LastName" 
                    value={formData.LastName} 
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">E-mail</label>
                    <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Mot de passe</label>
                    <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Rôle</label>
                    <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="customer">Client</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" 
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Ajouter</button>
            </form>
    </div>
  )
}

export default AddUser
