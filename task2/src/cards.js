import React from "react";

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div id="main" align="center">
      <img
        src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
        alt="Loading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile" key={user.id}>
          {console.log(user)}
          <img src={user.avatar} alt={user.avatar} className="img"></img>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="id">User ID: {user.id}</p>
          <p className="email">email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;