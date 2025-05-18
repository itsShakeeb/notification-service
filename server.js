const app = require("./app");
const db = require("./config/db");
const PORT = process.env.PORT || 5001; 

db.then(()=> {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((err)=> {
    console.log("Database connection failed", err);
})
