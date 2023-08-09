import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Navbar = () => {
  const item = useSelector((state)=> state.cart)
  return (
    <StyledNavbar>
    <div className="nav">
      <span>Redux Store</span>
      <div className="navbar">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/cart">Cart</StyledLink>
      <span>Cart Count: {item.length}</span>
      </div>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
display: block;
margin-left: 5rem;
margin-right: 5rem;
.nav{
    display: flex;
    justify-content: space-between;
}
`
const StyledLink = styled(Link)`
text-decoration: none;
padding-right: 2rem;
color: #fff;
cursor: pointer;
`

export default Navbar;
