import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "165.73.249.103",
    user: "admin",
    password: "BBg3Ytah",
    port: "18937",
    database: "resturentdb",
  },
});

export { pool };
