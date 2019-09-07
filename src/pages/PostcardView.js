import React, { useState } from "react";
import useDropdown from "../components/hooks/useDropdown";

// Data
// const COUNTRIES = ["island1", "island2", "island3"];

const PostcardView = () => {
  const [sendee, setSendee] = useState("");
  const [countries, setCountries] = useState([]);
  const [country, CountryDropdown] = useDropdown("Country", "", countries);

  return (
    <div>
      <h1>Mail your Web Postcard!</h1>
      <form>
        <label htmlFor="sendTo">
          To:
          <input
            type="text"
            name="sendTo"
            id="sendTo"
            placeholder="John Doe"
            value={sendee}
            onChange={e => setSendee(e.target.value)}
          />
        </label>
        <CountryDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostcardView;
