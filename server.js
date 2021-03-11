require("dotenv").config();
const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const { getAllBlogs, getBlogById } = require("./database/queries");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(cors());

App.get("/blogs", async (req, res) => {
  const blogs = await getAllBlogs().catch((err) => console.log(err.message));
  const response = blogs;
  res.json(response);
});

App.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  const blogdetails = await getBlogById(id).catch((err) =>
    console.log(err.message)
  );
  const response = blogdetails;
  res.json(response);
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express is listening on port ${PORT} 👍`);
});
