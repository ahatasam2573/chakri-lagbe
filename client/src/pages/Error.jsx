import { Link } from "react-router-dom"
import Wrapper from "../assets/wrapper/ErrorPage"
import ErrorImage from '../assets/img/not-found.svg'

const Error = () => {
    return (
        <Wrapper className="full-page">
            <div>
                <img src={ErrorImage} alt="Error404" />
                <h3>Sorry! Page Not Found</h3>
                <p>We can't find any page that you're looking for</p>
                <Link to='/'>Back home</Link>
            </div>
        </Wrapper>
    )
}
export default Error