import logo from '../assets/img/logo.png'
import main from '../assets/img/main.svg';
import Wrapper from '../assets/wrapper/LandingPage';

const Landing = () => {
    return (
        <Wrapper>
            <nav className='nav-content'>
                <img src={logo} alt="chakri-lagbe" className='logo' />
                <h1>Chakri Lagbe</h1>
            </nav>

            <div className="container page">
                <div className="info">
                    <h1>Need Your <span>Chakri??</span></h1>
                    <p>Welcome to your dream jobs where you can find yours jobs according to your skill. Just explore and find your jobs to fulfil your dream.</p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={main} alt="chakri" className='img main-img' />
            </div>
        </Wrapper>
    )
}



export default Landing