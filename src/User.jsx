import { useState, useEffect } from "react";


const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersStored = localStorage.getItem("users");
        if (usersStored) {
            setUsers(JSON.parse(usersStored));
        }
    }, []);

    return (
        <div>
            <table className="table table-bordered text-center mt-5">
                <thead>
                    <tr className="table-light">
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem[0]}</td>
                            <td>{elem[1]}</td>
                            <td>{elem[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default User;
