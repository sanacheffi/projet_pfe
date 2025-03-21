import React, { useEffect } from 'react'
import { useState } from 'react'
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                  _id: 1,
                  name: "Product",
                  price: 15,
                  images: [
                    {
                        url:"https://picsum.photos/500/500?random=1",
                        altText:"product",
                    },
                ],
                },
                {
                    _id: 2,
                    name: "Product",
                    price: 15,
                    images: [
                      {
                          url:"https://picsum.photos/500/500?random=2",
                          altText:"product",
                      },
                  ],
                  },
                  {
                    _id: 3,
                    name: "Product",
                    price: 15,
                    images: [
                      {
                          url:"https://picsum.photos/500/500?random=3",
                          altText:"product",
                      },
                  ],
                  },
                  {
                    _id: 4,
                    name: "Product",
                    price: 15,
                    images: [
                      {
                          url:"https://picsum.photos/500/500?random=4",
                          altText:"product",
                      },
                  ],
                  },
                  {
                    _id: 5,
                    name: "Product",
                    price: 15,
                    images: [
                      {
                          url:"https://picsum.photos/500/500?random=5",
                          altText:"product",
                      },
                  ],
                  },
                  {
                    _id: 6,
                    name: "Product",
                    price: 15,
                    images: [
                      {
                          url:"https://picsum.photos/500/500?random=6",
                          altText:"product",
                      },
                  ],
                  },
                  {
                    _id: 7,
                    name: "Product",
                    price: 15,
                    images: [
                      {
                          url:"https://picsum.photos/500/500?random=7",
                          altText:"product",
                      },
                  ],
                  },
                  {
                    _id: 8,
                    name: "Product",
                    price: 15,
                    images: [
                      {
                          url:"https://picsum.photos/500/500?random=8",
                          altText:"product",
                      },
                  ],
                  },
            ]; 
            setProducts(fetchedProducts);
        }, 1000)
    }, []);
  return (
    <div>
      <div className="p-5">
        <h2 className="text-xl uppercase">Toute la collection</h2>
        <SortOptions/>
        <ProductGrid products={products}/>
      </div>
    </div>
  )
}

export default CollectionPage
