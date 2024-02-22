import { useState } from "react";
import PropTypes from "prop-types";
const Seaction = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
Seaction.propTypes = {
  title: PropTypes.func.isRequired,
  description: PropTypes.func.isRequired,
  isVisible: PropTypes.func.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Seaction
        title={"About Instamart"}
        description={
          "On the other hand, we denourse with righteous indigantion and dislike men who are nothin On the other hand, we denourse with righteous indigantion and dislike men who are nothin"
        }
        isVisible={visibleSection === "about"}
      />

      <Seaction
        title={"Team Instamart"}
        description={
          "On the other hand, we denourse with righteous indigantion and dislike men who are nothin On the other hand, we denourse with righteous indigantion and dislike men who are nothin"
        }
        isVisible={visibleSection === "team"}
      />

      <Seaction
        title={"Careers"}
        description={
          "On the other hand, we denourse with righteous indigantion and dislike men who are nothin On the other hand, we denourse with righteous indigantion and dislike men who are nothin"
        }
        isVisible={visibleSection === "career"}
      />
    </div>
  );
};
export default Instamart;
