import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Loged IN"))
      .catch((e) => console.log(e.message));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Register email.."
            style={{
              border: "none",
              padding: "1rem",
              backgroundColor: "#B2B377",
              borderRadius: "5px",
              outline: "none",
              color: "white",
              margin: "10px",
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="password">Enter Your Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Register password.."
            style={{
              border: "none",
              padding: "1rem",
              backgroundColor: "#B2B377",
              borderRadius: "5px",
              outline: "none",
              color: "white",
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
