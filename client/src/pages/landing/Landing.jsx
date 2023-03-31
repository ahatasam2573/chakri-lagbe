import logo from '../../assets/logo.png'
import main from '../../assets/main.svg';
import './Landing.css'

const Landing = () => {
    return (
        <main>
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
        </main>
    )
}

const Wrapper = styled.main`

`

export default Landing