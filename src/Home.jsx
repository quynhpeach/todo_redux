import { useSelector } from "react-redux";

function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="container">
      <h2>Crud app with JSON SERVER</h2>
      <button className="btn btn-success my-3">Create +</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="">
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger ms-52">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
