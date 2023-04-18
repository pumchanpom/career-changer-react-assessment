import Navbar from './Navbar';


const Layout = ({ children }) => {
    return (
        <div style={{margin:"50px", textAlign: "center"}}>
            <Navbar />
            <hr/>
            <div style={{marginTop:"50px"}}>
                {children}
            </div>
        </div>
    )
}

export default Layout
