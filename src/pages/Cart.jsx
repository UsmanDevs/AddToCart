import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const product = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const handleRemove=(itemId)=>{
    // dispatch(remove(itemId))
    dispatch(remove(itemId))
  }

  return (
    <>
    {product.length === 0 ? ('Add to Cart') : 
     ( <StyledProductsGrid>
        {product.map((item) => (
          <StyledProductCard key={item.id}>
            <img src={item.image} alt={item.title} />
            <span>${item.price}</span>
            <p>{item.title}</p>
            <button onClick={()=>handleRemove(item.id)}>Remove</button>
          </StyledProductCard>
        ))}
      </StyledProductsGrid>
     )
  }
  </>
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

export default Cart;
