import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div style={{ "display": "grid", "placeItems": "center", "justifyContent": "center", height: "100vh" }}>
            <p> Page not found . <Link to={"/"}>back to home</Link></p>
        </div>
    )
}

export default NotFound