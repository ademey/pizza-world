import React from "react";
import { SearchInput } from "components";
import { Logo } from 'components/Logo';
import "./home.css";

const Home = ({ history }) => (
  <div className="pw-home-view">
    <div className="pw-home-view__left">
      <h1 className="pw-home-view__title">Pizza World</h1>
    </div>
    <div className="pw-home-view__right">
      <Logo className="pw-home-view__logo" />


      <div className="pw-home-view__nav">
        <button
          onClick={() => {
            history.push("/store/123");
          }}
        >
          Sign In
        </button>
      </div>

      <div className="pw-home-view__search-group">
        <h2>Find Your World</h2>
        <SearchInput />
      </div>
    </div>
  </div>
);

export default Home;
