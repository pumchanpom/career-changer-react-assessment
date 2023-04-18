
const Navbar = () => {
    return (
        <ul style={{listStyleType: "none", display: "flex", justifyContent: "flex-end", gap: "40px", fontSize: "20px", fontWeight: "700"}}>
            <li><a href={'/'}>Home</a></li>
            <li><a href={'/Owner'}>Owner</a></li>
        </ul>
    )
}

export default Navbar