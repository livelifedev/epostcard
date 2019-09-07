import React, { useState } from "react";
import useDropdown from "../components/hooks/useDropdown";
import InputField from "../components/InputField";

// Data
const COUNTRIES = ["island1", "island2", "island3"];

const PostcardView = () => {
  const [countries, setCountries] = useState([]);
  const [country, CountryDropdown] = useDropdown("Country", "", COUNTRIES);

  return (
    <div>
      <h1>Mail your Web Postcard!</h1>
      <form>
        <InputField
          label={"To"}
          defaultState={""}
          placeholder={"Mr. Burgers"}
        />
        <InputField
          label={"From"}
          defaultState={""}
          placeholder={"Ms. Apples"}
        />
        <InputField
          label={"Email"}
          defaultState={""}
          placeholder={"farawayplace@email.com"}
          type={"email"}
        />
        <CountryDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostcardView;
