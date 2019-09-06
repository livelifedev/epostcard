import React, { useState } from "react";

const countries = ["island1", "island2", "island3"];

const PostcardView = () => {
  const [sendee, setSendee] = useState("");
  const [country, setCountry] = useState("");

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

        <label htmlFor="country">
          Country:
          <select
            name="country"
            id="country"
            value={country}
            onChange={e => setCountry(e.target.value)}
            onBlur={e => setCountry(e.target.value)}
          >
            <option>Post Office</option>
            {countries.map(country => (
              <option value={country}>{country}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostcardView;
