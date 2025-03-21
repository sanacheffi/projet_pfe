import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';
const selectedProduct = {
    name : "Product",
    price : 16,
    originalPrice : 20,
    description : "Découvrir les créations artisanales récentes d'Artisanat Cheffi, mêlant tradition et modernité.",
    material : "productmaterial",
    images: [
        {
            url:"https://picsum.photos/400/400?random=1",
            altText:"product",
        },
        {
            url:"https://picsum.photos/400/400?random=2",
            altText:"product",
        },
    ],
};

const similarProducts = [
    {
        _id: 1,
        name:"Product 1",
        price: 100,
        images:[{url:"https://picsum.photos/400/400?random=3"}],
    },
    {
        _id: 2,
        name:"Product 2",
        price: 100,
        images:[{url:"https://picsum.photos/400/400?random=4"}],
    },
    {
        _id: 3,
        name:"Product 3",
        price: 100,
        images:[{url:"https://picsum.photos/400/400?random=5"}],
    },
    {
        _id: 4,
        name:"Product 4",
        price: 100,
        images:[{url:"https://picsum.photos/400/400?random=6"}],
    },
]
const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if(selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    },[selectedProduct]);

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleAddToCart = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            toast.success("Produit ajouté au panier !", {
                duration: 1000,
            });
            setIsButtonDisabled(false);
        }, 500)
    };
  return (
    <div className="p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
            <div className="flex flex-col md:flex-row">
                <div className="hidden md:flex flex-col space-y-4 mr-6">
                    {selectedProduct.images.map((image, index) => (
                        <img
                        key={index}
                        src={image.url} alt={image.altText || `Thumbnail ${index}`}
                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                        onClick={() => setMainImage(image.url)}
                        />
                    ))}
                </div>
                {/* main image */}
                <div className="md:w-1/2">
                <div className="mb-4">
                    <img src={mainImage} alt="Main Product"
                    className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
                </div>
                {/* mobile Thumbnail */}
                <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
                {selectedProduct.images.map((image, index) => (
                        <img
                        key={index}
                        src={image.url} alt={image.altText || `Thumbnail ${index}`}
                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                        onClick={() => setMainImage(image.url)}
                        />
                    ))}
                </div>
                {/* right side */}
                <div className="md:w-1/2 md:ml-10">
                <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                    {selectedProduct.name}
                </h1>
                <p className="text-lg text-gray-600 mb-1 line-through">
                    {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`} DT
                </p>
                <p className="text-xl text-gray-600 mb-2">
                    {selectedProduct.price} DT
                </p>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                <div className="mb-6">
                    <p className="text-gray-700">Quantité :</p>
                    <div className="flex items-center space-x-4 mt-2">
                        <button onClick={() => handleQuantityChange("minus")} className="px-2 py-1 bg-gray-200 rounded text-lg">-</button>
                        <span className="text-lg">{quantity}</span>
                        <button onClick={() => handleQuantityChange("plus")} className="px-2 py-1 bg-gray-200 rounded text-lg">+</button>
                    </div>
                </div>

                {/* button add to cart */}
                <button 
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}>
                    {isButtonDisabled ? "Ajout en cours..." : "Ajouter Au Panier"}
                </button>
                
                <div className="mt-10 text-gray-800">
                    <h3 className="text-xl font-bold mb-4">Caractéristiques</h3>
                    <table className="w-full text-left text-sm text-gray-600">
                        <tbody>
                            <tr>
                                <td className="py-1">Matière:</td>
                                <td className="py-1"></td>
                            </tr>
                            <tr>
                                <td className="py-1">Dimensions:</td>
                                <td className="py-1"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            <div className="mt-20">
                <h2 className="text-2xl text-center font-medium mb-4">
                    Vous Pourriez Aussi Aimer
                </h2>
                <ProductGrid products={similarProducts}/>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
