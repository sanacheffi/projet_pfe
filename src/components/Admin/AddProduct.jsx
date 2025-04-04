import React, { useState } from 'react'

const AddProduct = () => {
        const [productData, setProductData] = useState({
            name: "",
            description: "",
            price: 0,
            countInStock: 0,
            stock_status:"En stock",
            category: "",
            size: "",
            collections: "",
            material: "",
            images: [
              {
                url: "https://picsum.photos/150?random=1",
              },
              {
                url: "https://picsum.photos/150?random=2",
              },
            ],
        });
    
        const handleChange = (e) => {
            const {name, value} = e.target;
            setProductData((prevData) => ({...prevData, [name]: value}))
        }
    
        const handleImageUpload = async (e) => {
            const file = e.target.files[0];
            console.log(file);
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(productData);
        }

    return (
        <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-6">Ajouter un nouvel article</h2>
          <form onSubmit={handleSubmit}>
            {/* Nom */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Nom</label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
    
            {/* Description */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={productData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                rows={4}
                required
              />
            </div>
    
            {/* Prix */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Prix</label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
    
            {/* Stock */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Quantité en stock</label>
              <input
                type="number"
                name="countInStock"
                value={productData.countInStock}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
    
            {/* Dimensions */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Dimensions</label>
              <input
                type="text"
                name="size"
                value={productData.size}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
    
            {/* Disponibilité */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Disponibilité</label>
              <select
                name="stock_status"
                value={productData.stock_status}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="enstock">En stock</option>
                <option value="rupturedestock">Rupture de stock</option>
                <option value="surcommande">Sur commande</option>
              </select>
            </div>
    
            {/* Import d'images */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Importer des images</label>
              <input type="file" onChange={handleImageUpload} />
              <div className="flex gap-4 mt-4">
                {productData.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image.url}
                      alt="Image produit"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
    
            {/* Bouton d'ajout */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Ajouter l'article
            </button>
          </form>
        </div>
      );
    };

export default AddProduct
