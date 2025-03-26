<!-- useMemo hook -->
1: counter button : increase
2: Input feild : Fibonnaci number
3: 0 1 1 2 3 5 8 13 21 34 = 0+1 = 1+1 = 2;
recursive code- o(2^n) high complexity

useMemo(()=>(),[]) callbackfunction ,dependecy array , if number change tbhi call hoga old result ko store kr ke rkhega


useref = is a react hook that lets you reference a value that's not needed for rendering- function ko re-render nhi hoga(fir se call nhi hoga(only state value = useState can re -render), and ye old value ko hold kr ke rkhta h)
(object deta h - use under jo value di h usko store kr ke rkhta h )