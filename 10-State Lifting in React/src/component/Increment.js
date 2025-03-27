 function Increment({counts,setcount}) {
  return (
    <>
      <h2>Counter is : {counts}</h2>
      <button onClick={()=>setcount(counts+1)}>Increment</button>
    </>
  );
}
export default Increment;
