import logo from '../assets/img/logo.png'

const Logo = () => {
    return (
        <nav className='nav-content'>
            <img src={logo} alt='chakri-lagbe-logo' className='logo' />

            <h1>Chakri Lagbe</h1>
        </nav>
    )
}

export default Logo;