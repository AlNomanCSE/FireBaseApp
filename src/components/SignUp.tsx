import { useState } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignIn from "./SignIn";
const auth = getAuth(app);
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      alert("Success!")
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Enter Your email..."
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            placeholder="Enter Your Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>SignUp</button>
      </form>
      <SignIn />
    </>
  );
};

export default SignUp;
