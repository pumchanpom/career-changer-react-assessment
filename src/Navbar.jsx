import { Link, Routes, Route } from 'react-router-dom';


const Navbar = () => {
    return (
        <ul style={{listStyleType: "none", display: "flex", justifyContent: "flex-end", gap: "40px", fontSize: "20px", fontWeight: "700"}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Owner">Owner</Link></li>
        </ul>
    )
}

export default Navbar
