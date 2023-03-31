import logo from '../../assets/logo.png'
import main from '../../assets/main.svg';
import styled from 'styled-components'
import './Landing.css'

const Landing = () => {
    return (
        <Wrapper>
            <nav className='nav-content'>
                <img src={logo} alt="chakri-lagbe" className='logo' />
                <h1>Chakri Lagbe</h1>
            </nav>

            <div className="container page">
                <div className="info">
                    <h1>job <span>Tracking</span> app</h1>
                    <p>Welcome to your dream jobs where you can find yours jobs according to your skill. Just explore and find your jobs to fulfil your dream.</p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={main} alt="chakri" className='img main-img' />
            </div>
        </Wrapper>
    )
}

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
`


export default Landing