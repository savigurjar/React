import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
function Main() {
  const { generateProfile, nuofprofile, setnuofprofile, Profile } = useFetch();
  return (
    <div>
      <div className="dbtn">
        <input
          type="text"
          className="input"
          placeholder="Search here"
          value={nuofprofile}
          onChange={(e) => setnuofprofile(e.target.value)}
        ></input>
        <button onClick={() => generateProfile(Number(nuofprofile))}>
          Search Profile
        </button>
      </div>
      <div className="profiles">
        {Profile.map((value) => (
          <div key={value.id} className="cards">
            <img src={value.avatar_url} alt="Profile Avatar" />
            <h2>{value.login}</h2>
            <a href={value.html_url} target="_blank" rel="noopener noreferrer">
              Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Main;
