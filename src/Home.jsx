import Layout from './Layout'
import { useContext, useEffect, useState } from "react"
import Admin from './Admin'
import User from './User'


const Home = () => {
    const [user, setUser] = useState(false);
    const [admin, setAdmin] = useState(false);

    const handleClickUser = () => {
        setUser(true);
        setAdmin(false);
    }

    const handleClickAdmin = () => {
        setAdmin(true);
        setUser(false);
    }

    return (
        <Layout>
            <div>
                <h1>Generation Thailand</h1>
                {user && (<h1>Home - User Sector</h1>)}
                {admin && (<h1>Home - Admin Sector</h1>)}
                {!user && !admin && (<div><h1>React - Assessment</h1></div>)}
                <div style={{ display: "flex", justifyContent: "center", gap: "180px" }}>
                    <button onClick={handleClickUser} class="btn btn-light mt-4">User Home Sector</button>
                    <button onClick={handleClickAdmin} class="btn btn-light mt-4">Admin Home Sector</button>
                </div>

            </div>
            {user && <User />}
            {admin && <Admin />}
        </Layout>
    )
}

export default Home
