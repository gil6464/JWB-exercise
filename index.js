/* write the code to run app.js here */
const PORT = process.env.PORT || 4000;
const app = require("./app");

app.listen(PORT, () => {
  console.log("Server is listening on port", `${PORT}`);
});
