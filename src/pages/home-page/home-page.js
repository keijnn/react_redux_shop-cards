import React from 'react';
import { ProductItem } from '../../components/product-item';
import './home-page.css';

const ProductS = [
    {
        id: 1,
        imageUrl: "https://i.pinimg.com/236x/35/35/8d/35358d1bc4b59f88cde3436175e5ade5.jpg",
        name: "Earth",
        count: 4,
        size: {
          width: 200,
          height: 200,
        },
        weight: "200g",
        comments: ["CommentModel", "CommentModel"],
    },
    {
        id: 3,
        imageUrl: "https://i.pinimg.com/236x/3c/29/a9/3c29a960322b6081874dff5e64e4cebf.jpg",
        name: "Knife",
        count: 4,
        size: {
          width: 200,
          height: 200,
        },
        weight: "200g",
        comments: ["CommentModel", "CommentModel"],
    },
    {
        id: 2,
        imageUrl: "https://i.pinimg.com/236x/a7/7b/fe/a77bfe5b9378b061997d975f28ab3cbc.jpg",
        name: "Some thing",
        count: 4,
        size: {
          width: 200,
          height: 200,
        },
        weight: "200g",
        comments: ["CommentModel", "CommentModel"],
    },
    {
        id: 4,
        imageUrl: "https://i.pinimg.com/236x/36/4c/4f/364c4fd2cb1abb14b719a71c8f2dbaac.jpg",
        name: "Apple",
        count: 4,
        size: {
          width: 200,
          height: 200,
        },
        weight: "200g",
        comments: ["CommentModel", "CommentModel"],
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { ProductS.map(product => <ProductItem product={product} key={product.id}/>) } {/*create list*/}
        </div>
    )
}
