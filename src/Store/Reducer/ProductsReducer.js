const initState = {
  products: [
    {
      id: 1,
      name: "man casual shirt",
      image: "1.webp",
      price: 800,
      discount: 2,
      discountPrice: 800 - (2 / 100) * 800,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam quasi maxime vero. Voluptate amet perferendis quo, dolores aliquam aspernatur iure soluta voluptatum aut odio officia, corporis aperiam animi unde!",
    },
    {
      id: 2,
      name: "man casual shirt",
      image: "2.jpg",
      price: 900,
      discount: 5,
      discountPrice: 900 - (5 / 100) * 900,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam quasi maxime vero. Voluptate amet perferendis quo, dolores aliquam aspernatur iure soluta voluptatum aut odio officia, corporis aperiam animi unde!",
    },
    {
      id: 3,
      name: "woman casual shirt",
      image: "3.webp",
      price: 600,
      discount: 3,
      discountPrice: 600 - (3 / 100) * 600,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam quasi maxime vero. Voluptate amet perferendis quo, dolores aliquam aspernatur iure soluta voluptatum aut odio officia, corporis aperiam animi unde!",
    },
    {
      id: 4,
      name: "woman casual tops",
      image: "4.webp",
      price: 500,
      discount: 3,
      discountPrice: 500 - (3 / 100) * 500,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam quasi maxime vero. Voluptate amet perferendis quo, dolores aliquam aspernatur iure soluta voluptatum aut odio officia, corporis aperiam animi unde!",
    },
    {
      id: 5,
      name: "man jeans",
      image: "5.jpg",
      price: 1000,
      discount: 10,
      discountPrice: 1000 - (10 / 100) * 1000,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam quasi maxime vero. Voluptate amet perferendis quo, dolores aliquam aspernatur iure soluta voluptatum aut odio officia, corporis aperiam animi unde!",
    },
    {
      id: 6,
      name: "man jeans",
      image: "6.webp",
      price: 1200,
      discount: 3,
      discountPrice: 1200 - (3 / 100) * 1200,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam quasi maxime vero. Voluptate amet perferendis quo, dolores aliquam aspernatur iure soluta voluptatum aut odio officia, corporis aperiam animi unde!",
    },
    {
      id: 7,
      name: "man shoes",
      image: "7.jpg",
      price: 1500,
      discount: 15,
      discountPrice: 1500 - (15 / 100) * 1500,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam quasi maxime vero. Voluptate amet perferendis quo, dolores aliquam aspernatur iure soluta voluptatum aut odio officia, corporis aperiam animi unde!",
    },
    {
      id: 8,
      name: "man shoes",
      image: "8.webp",
      price: 1500,
      discount: 15,
      discountPrice: 1500 - (15 / 100) * 1500,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam quasi maxime vero. Voluptate amet perferendis quo, dolores aliquam aspernatur iure soluta voluptatum aut odio officia, corporis aperiam animi unde!",
    },
  ],
  product: {},
  
};


const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          product=> product.id === parseInt(action.id))};
        default:
      return state;
    }
    
};

export default ProductsReducer;
