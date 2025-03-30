import React, { useEffect, useState } from "react";
export default function useFetch() {
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

  return { generateProfile, nuofprofile, setnuofprofile, Profile };
}
