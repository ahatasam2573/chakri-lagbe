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
        </main>
    )
}

export default Landing