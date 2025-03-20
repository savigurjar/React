re-render call the function again

premitive value ke liye do bar ho jayega render but only two times usse jyada nhi - because of internal implementation = bel out
but object ke liye nhi chlega do bar why ? because they are big and will take time 

useEffect(callback function , depedency)
useeffect me aap jo function dete h vo sbse last  me execute hoga
*if dependency[] is blank nhi chlega, it will only run once intially render 
*if dependecy[] ->arry nhi diya to har bar chlega - > normal function ki trh chlega

colorful -/ as a child ye bhi render hoga agr upr wale button {increment , decrement} chlege tb because parent function will render all childern

export default React.memo(Colorful); = new hook
 //parent ke upr jo bhi change ho rha vo es children pr ni aaye
