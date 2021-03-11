const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const getBlogById = (blogId) => {
  const sql = `SELECT * FROM blogs
  WHERE id = $1`;
  const query = pool.query(sql, [blogId]);
  return query
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => err);
};

const getAllBlogs = () => {
  const sql = `SELECT * FROM blogs`;
  const query = pool.query(sql);
  return query
    .then((res) => {
      return res.rows;
    })
    .catch((err) => err);
};

module.exports = {
  getAllBlogs,
  getBlogById,
};
