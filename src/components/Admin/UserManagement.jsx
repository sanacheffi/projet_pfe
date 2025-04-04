import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const UserManagement = () => {

    const users = [
        {
            _id: 123123,
            FirstName: "sana",
            LastName: "cheffi",
            email: "sana@example.com",
            role: "admin",
        },
    ];

    const handleRoleChange = (userId, newRole) => {
        console.log({id: userId, role:newRole});
    };

    const handleDeleteUser = (userId) => {
        if(window.confirm("Confirmez-vous la suppression de cet utilisateur ?")){
            console.log("deleting user with ID", userId)
        }
    }
  return (
    <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Gestion Des Utilisateurs</h2>
            <Link to="/admin/users/add" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white flex items-center gap-2 whitespace-nowrap">
            <IoMdAddCircle />
            <span>Ajouter un utilisateur</span>
            </Link>
        </div>
        {/* user list */}
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full text-left text-gray-500">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                    <tr>
                        <th className="py-3 px-4">Prénom</th>
                        <th className="py-3 px-4">Nom</th>
                        <th className="py-3 px-4">E-mail</th>
                        <th className="py-3 px-4">Rôle</th>
                        <th className="py-3 px-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} className="border-b hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                {user.FirstName}
                            </td>
                            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                {user.LastName}
                            </td>
                            <td className="p-4">{user.email}</td>
                            <td className="p-4">
                                <select value={user.role} 
                                onChange={(e) => handleRoleChange(user._id, e.target.value)} 
                                className="p-2 border rounded">
                                    <option value="customer">Client</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                            <td className="p-4">
                                <button 
                                onClick={() => handleDeleteUser(user._id)}
                                className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600">
                                    <FaTrashAlt/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserManagement
