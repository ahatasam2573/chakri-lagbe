import styled from 'styled-components'

const Wrapper = styled.main`
   .page{
    min-height: calc(70vh);
    display: grid;
    align-items: center;
   }
   h1{
    font-weight: 700;
   }
   span{
    color: var(--primary-500);
   }
   p{
    color: var(--grey-600);
   }
   .main-img{
    display: none;
   }
   @media(min-width: 992px){
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img{
        display: block;
    }
   }
   @media(max-width: 600px){
    .nav-content h1{
        font-size: 30px;
    }
   }
`
export default Wrapper;