import React, { useState } from 'react'

const EditProduct = () => {
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
        <h2 className="text-3xl font-bold mb-6">Modifier l'article</h2>
        <form onSubmit={handleSubmit}>
            {/* name */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Nom</label>
                <input type="text" name="name" 
                value={productData.name} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required/>
            </div>

            {/* description */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Description</label>
                <textarea name="description" value={productData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                rows={4}
                required/>
            </div>

            {/* price */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Prix</label>
                <input type="number" name="price" 
                value={productData.price} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required/>
            </div>

            {/* stock */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Quantité en stock</label>
                <input type="number" name="countInStock" 
                value={productData.countInStock} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required/>
            </div>

            {/* size */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Dimensions</label>
                <input type="text" name="size" 
                value={productData.size} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required/>
            </div>

            {/* stock_status */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Disponibilité</label>
                <select name="stock_status" value={productData.stock_status} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2">
                        <option value="enstock">En stock</option>
                        <option value="rupturedestock">Rupture de stock</option>
                        <option value="surcommande">Sur commande</option>
                    </select>
            </div>

            {/* images */}
            <div className="mb-6">
                <label className="block font-semibold mb-2">Importer les images</label>
                <input type="file"
                onChange={handleImageUpload}
                />
                <div className="flex gap-4 mt-4">
                    {productData.images.map((image, index) => (
                        <div key={index}>
                            <img src={image.url} alt={image.altText || "Image du produit"}
                            className="w-20 h-20 object-cover rounded-md"/>
                        </div>
                    ))}
                </div>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">Mettre à jour l'article</button>
        </form>
    </div>
  )
}

export default EditProduct
