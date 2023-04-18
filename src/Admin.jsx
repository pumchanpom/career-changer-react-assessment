import { useState, useEffect } from "react";

const Admin = () => {
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [position, setPosition] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersStored = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(usersStored);
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const PersonData = (personName, personLastname, personPosition) => {
        return [personName, personLastname, personPosition];
    };

    const inputToTable = (arr) => {
        return arr.map((elem, index) => (
            <tr key={index} style={{verticalAlign: "middle"}}>
                <td>{elem[0]}</td>
                <td>{elem[1]}</td>
                <td>{elem[2]}</td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                        const newData = [...users];
                        newData.splice(index, 1);
                        setUsers(newData);
                    }}>Delete</button>
                </td>
            </tr>
        ));
    };

    const addNewRow = (event) => {
        event.preventDefault();
        const newData = [...users, PersonData(username, lastname, position)];
        setUsers(newData);
        setUsername("");
        setLastname("");
        setPosition("");
    };

    return (
        <div>
            <h5 style={{textAlign: "left", marginLeft: "20px", marginTop: "40px"}}>Create User Here</h5>
            <form onSubmit={addNewRow} style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Name"
                    className="form-control"
                />
                <input
                    type="text"
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                    placeholder="Last Name"
                    className="form-control"
                />
                <input
                    type="text"
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                    placeholder="Position"
                    className="form-control"
                />
                <button type="submit" className="btn btn-success">Save</button>
            </form>
            <table className="table table-bordered text-center mt-5">
                <thead>
                    <tr className="table-light">
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{inputToTable(users)}</tbody>
            </table>
        </div>
    );
};

export default Admin;
