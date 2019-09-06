import React, { useState } from "react";

const PostcardView = () => {
  const [sendee, setSendee] = useState("");

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostcardView;
