import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Nirbhay Singh",
    email: "nirbhaysingh9343012@gmail.com",
  },
});
export default UserContext;
