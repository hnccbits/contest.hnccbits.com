import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import RankList from "./components/RankList";

const data = [
  {
    contest_name: "Contest 1",
    contest_date: "12th August 2020",
    winner: {
      rank_one: {
        name: "Suraj Mahto",
        branch: "IT",
        roll_no: 1811010,
        codechef_id: "suraj123",
      },
      rank_two: {
        name: "Suraj Mahto",
        branch: "IT",
        roll_no: 1811010,
        codechef_id: "suraj123",
      },
      rank_three: {
        name: "Suraj Mahto",
        branch: "IT",
        roll_no: 1811010,
        codechef_id: "suraj123",
      },
    },
  },
  {
    contest_name: "Contest 2",
    contest_date: "12th August 2020",
    winner: {
      rank_one: {
        name: "Suraj Mahto",
        branch: "IT",
        roll_no: 1811010,
        codechef_id: "suraj123",
      },
      rank_two: {
        name: "Suraj Mahto",
        branch: "IT",
        roll_no: 1811010,
        codechef_id: "suraj123",
      },
      rank_three: {
        name: "Suraj Mahto",
        branch: "IT",
        roll_no: 1811010,
        codechef_id: "suraj123",
      },
    },
  },
  {
    contest_name: "Contest 3",
    contest_date: "12th August 2020",
    winner: {
      rank_one: {
        name: "Suraj Mahto",
        branch: "IT",
        roll_no: 1811010,
        codechef_id: "suraj123",
      },
      rank_two: {
        name: "Suraj Mahto",
        branch: "IT",
        roll_no: 1811010,
        codechef_id: "suraj123",
      },
      rank_three: {
        name: "Suraj Mahto",
        branch: "IT",
        roll_no: 1811010,
        codechef_id: "suraj123",
      },
    },
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {data.map((data) => {
          return <RankList data={data} />;
        })}
      </div>
    );
  }
}

export default App;
