export default function Decrement({counts,setcount}) {
  return (
    <>
      <button onClick={() => setcount(counts - 1)}>Decrement</button>
    </>
  );
}
