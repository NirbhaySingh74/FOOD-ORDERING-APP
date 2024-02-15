import { Outlet } from "react-router-dom";

function About() {
  return (
    <div style={{ marginTop: "10px" }}>
      <h3>This is about Page</h3>
      <Outlet />
    </div>
  );
}

export default About;
