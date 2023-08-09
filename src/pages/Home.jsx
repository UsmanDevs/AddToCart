import { styled } from "styled-components"
import Products from "../components/Products"

const Home = () => {
  return (
    <StyledHome>
    <Products />
    </StyledHome>
  )
}

const StyledHome = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 5rem;
`
export default Home
