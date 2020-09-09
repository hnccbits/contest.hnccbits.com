import React from "react";
import Rank from "./Rank";
function RankList({ data }) {
  return (
    <div className="ranklist">
      <h3>{data.contest_name}</h3>
      <h3> {data.contest_date} </h3>
      <Rank user_data={data.winner.rank_one} />
      <Rank user_data={data.winner.rank_two} />
      <Rank user_data={data.winner.rank_three} />
    </div>
  );
}

export default RankList;
