import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Mate",
    email: "mate@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
