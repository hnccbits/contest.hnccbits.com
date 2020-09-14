import React from "react";

function Rank({ user_data }) {
  return (
    <div className="rank">
      <h3> {user_data.name} </h3>
      <h3>{user_data.codechef_id}</h3>
    </div>
  );
}

export default Rank;
