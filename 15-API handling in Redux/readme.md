<!-- fetch -->
1. pending
2. fullfilled = resolve
3. Rejected : reject

createAsyncThunk - multiple dispatch use krne ke jrurat nhi h , function (fetchdata) ko call krna h bs

const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)