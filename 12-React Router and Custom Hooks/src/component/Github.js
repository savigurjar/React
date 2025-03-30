import { useEffect, useState } from "react";
import { useParams } from "react-router"; // ✅ Corrected import

export default function Github() {
  const { name } = useParams(); // ✅ Get username from URL
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(() => {
    async function fetchUser() {
      try {
        if (!name) return; // ✅ Prevent API call if no username

        const response = await fetch(`https://api.github.com/users/${name}`); // ✅ Correct API URL
        if (!response.ok) throw new Error("User not found");

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setProfile(null);
      } finally {
        setLoading(false); // ✅ Ensure loading is set to false
      }
    }
    fetchUser();
  }, [name]); // ✅ Runs when 'name' changes

  return (
    <>
      <h1>My Github Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : profile ? (
        <div>
          <img src={profile?.avatar_url} alt="Profile" width="150" /> {/* ✅ Optional chaining to avoid null error */}
          <h1>{profile?.login}</h1>
          <p>{profile?.bio || "No bio available"}</p>
          <a href={profile?.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      ) : (
        <p>User not found</p> // ✅ Handle when user is invalid
      )}
    </>
  );
}
 