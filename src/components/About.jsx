import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
function About() {
  return (
    <div style={{ marginTop: "10px" }}>
      <h3>This is about Page</h3>
      <UserContext.Consumer>
        {({ user }) => (
          <h4>
            {user.name} - {user.email}
          </h4>
        )}
      </UserContext.Consumer>
      <Outlet />
    </div>
  );
}

export default About;
