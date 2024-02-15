import React from "react";

function UserDetails() {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Enter User Name" />
        <input name="email" type="email" placeholder="Enter User Email" />
        <input
          name="mobile"
          type="number"
          placeholder="Enter User Mobile Number"
        />
        <button>Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
}

export default UserDetails;
