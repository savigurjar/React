import React, { useEffect, useState } from "react";
function Main() {
  const [Profile, setProfiles] = useState([]);
  const [nuofprofile, setnuofprofile] = useState("");
  async function generateProfile(count = 20) {
    try {
      const ran = Math.floor(1 + Math.random() * 100000);
      const response = await fetch(
        `https://api.github.com/users?since=${ran}&per_page=${count}`
      );
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    generateProfile();
  }, []);

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
