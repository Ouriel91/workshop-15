// Welcome to your first monday-u testing workshop!
// You just got a call from your bank!
// They need your help in analysing their client’s data.
// The bank will send you a list of clients, each with the following information:
//      1.The Client’s name
//      2.The Client’s current account balance

// For example:
 //[
  //  { firstName: "Ziv", lastName: "Ventura", balance: "220" },
  //  { firstName: "Vlad", lastName: "Mystetskyi", balance: "54" },
    // { firstName: "Yoni", lastName: "Levin", balance: "213" }
 //]

// The output should be the average balance
// In the example above, the balance will be 162.33, because:
// (220 + 54 + 213) / 3 = "162.33"

// -------------------------> TODO: READ ME! IMPORTANT! <-------------------------
// 1.The function should return a string, with decimal precision of 2. For example: "12.34", "750.33", etc...
// 2.If an exception occurs, simply return null
// 3.To test the function's result, see file index.js
const calculateBalance = (data) => {
    
    if(!data) return null;
    if(!Array.isArray(data)) return null;
    if(data.length === 0) return "0.00"

    let sum = 0
    
    for(const item of data) {
        const {balance} = item || {}
        if(!balance) return null
        const parsedValue = parseFloat(balance)
        sum += parsedValue
    }
    
    return String((sum / data.length).toFixed(2))
    
    // TODO: return null if an error occurs
}

module.exports = {
    calculateBalance
}
