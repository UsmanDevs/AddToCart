import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { add } from "../store/CartSlice";

const Products = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = (item)=>{
    dispatch(add(item))
  }

  return (
    <StyledProductsGrid>
      {product.map((item) => (
        <StyledProductCard key={item.id}>
          <img src={item.image} alt={item.title} />
          <span>${item.price}</span>
          <p>{item.title}</p>
          <button onClick={()=>handleAdd(item)}>Add</button>
        </StyledProductCard>
      ))}
    </StyledProductsGrid>
  );
};

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const StyledProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;

  img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
  }

  span {
    font-weight: bold;
    margin: 10px 0;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

export default Products;

