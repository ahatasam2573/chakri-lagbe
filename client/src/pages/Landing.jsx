import Main from '../assets/img/main.svg';
import Wrapper from '../assets/wrapper/LandingPage';
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav className='nav-content'>
                <img src={logo} alt='jobify' className='logo' />
                <h1>Chakri Lagbe</h1>
            </nav>

            <div className="container page">
                <div className="info">
                    <h1>Need Your <span>Chakri??</span></h1>
                    <p>Welcome to your dream jobs where you can find yours jobs according to your skill. Just explore and find your jobs to fulfil your dream.</p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={Main} alt="chakri" className='img main-img' />
            </div>
        </Wrapper>
    )
}



export default Landing