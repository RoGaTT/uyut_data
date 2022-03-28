// inlcude express
const express = require("express");
const app = express();
//set app view engine
app.set("view engine", "ejs");

function getPrice(systemId, tkanId, width)
{
    if (width < 60) {
        width = 60
    }
    return (prices.get(systemId) + prices.get(tkanId))*width/10000;

}
app.get("/get-good-price", async (req, res) => {

    // [2159400, 30000],[2159410, 156000]
    // price = 1860*0,6
    console.log(getPrice(2079341,2020746, 173))
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`server started on ${port}`)
});