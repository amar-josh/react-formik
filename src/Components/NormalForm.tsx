import React, { useState } from "react";

function UserDetails() {
  const [name, setUserName] = useState("");
  const [nameError, setNameError] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    formData.forEach((value, key) => {
      console.log(key, ":", value);
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
    // if (!e.currentTarget.value.match(/^[A-Za-z]$/)) {
    //   setNameError("Please enter valid name");
    // } else {
    //   setNameError("");
    // }
    validateName(e);
  };

  const validateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value.length) {
      setNameError("Name is required");
    } else if (!/^[A-Za-z]+$/.test(e.currentTarget.value)) {
      setNameError("Please enter valid name");
    } else if (e.currentTarget.value.length > 4) {
      setNameError("Name must be less than 4 character");
    } else {
      setNameError("");
    }
  };

  return (
    <div className="w-100 d-flex justify-content-center mt-5">
      <form onSubmit={handleSubmit} className="d-flex w-25 flex-column gap-2">
        <title className="d-flex">User Details</title>

        <input
          name="name"
          type="text"
          placeholder="Enter User Name"
          onChange={handleNameChange}
          onBlur={validateName}
        />
        {nameError ? <p className="text-danger">{nameError}</p> : ""}

        <input name="email" type="email" placeholder="Enter User Email" />

        <input
          name="mobile"
          type="number"
          placeholder="Enter User Mobile Number"
        />

        <div className="d-flex gap-3 justify-content-center">
          <button type="submit" className="btn btn-md btn-primary">
            Submit
          </button>
          <button type="reset" className="btn btn-md btn-secondary">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserDetails;
