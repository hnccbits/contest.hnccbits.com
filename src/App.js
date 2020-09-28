import React, { Component } from 'react';
import Nav from './components/Navbar/Nav';
import Header from './components/Header/Header';
import './App.css';
// import RankList from "./components/RankList";
import Footer from './components/Footer/Footer';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Contest from './components/Contest/Contest';
import Blog from './components/Blog/blog';

// const data = [
//   {
//     contest_name: "Contest 1",
//     contest_date: "12th August 2020",
//     contest_description: "Lorem Ipsum",
//     winner: {
//       rank_one: {
//         name: "Name 1",
//         branch: "IT",
//         roll_no: 1811010,
//         codechef_id: "user_id",
//       },
//       rank_two: {
//         name: "Name 2",
//         branch: "IT",
//         roll_no: 1811010,
//         codechef_id: "user_id",
//       },
//       rank_three: {
//         name: "Name 3",
//         branch: "IT",
//         roll_no: 1811010,
//         codechef_id: "user_id",
//       },
//     },
//   },
//   {
//     contest_name: "Contest 2",
//     contest_description: "Lorem Ipsum",
//     contest_date: "12th August 2020",
//     winner: {
//       rank_one: {
//         name: "Name 1",
//         branch: "IT",
//         roll_no: 1811010,
//         codechef_id: "user_id",
//       },
//       rank_two: {
//         name: "Name 2",
//         branch: "IT",
//         roll_no: 1811010,
//         codechef_id: "user_id",
//       },
//       rank_three: {
//         name: "Name 3",
//         branch: "IT",
//         roll_no: 1811010,
//         codechef_id: "user_id",
//       },
//     },
//   },
//   {
//     contest_name: "Contest 3",
//     contest_date: "12th August 2020",
//     contest_description: "Lorem Ipsum",
//     winner: {
//       rank_one: {
//         name: "Name 1",
//         branch: "IT",
//         roll_no: 1811010,
//         codechef_id: "user_id",
//       },
//       rank_two: {
//         name: "Name 2",
//         branch: "IT",
//         roll_no: 1811010,
//         codechef_id: "user_id",
//       },
//       rank_three: {
//         name: "Name 3",
//         branch: "IT",
//         roll_no: 1811010,
//         codechef_id: "user_id",
//       },
//     },
//   },
// ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        {/* 
        {data.map((data) => {
          return <RankList data={data} />;
        })} */}
        <h1 style={{ paddingTop: '50px' }}>
          <a className="lb-title" name="leaderboard" href="#leaderboard">
            LEADERBOARD
          </a>
        </h1>
        <LeaderBoard />
        <Contest />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
