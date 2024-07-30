import { useRef } from "react";

const Register = () => {
  const email = useRef(null);
  const password = useRef(null);
  const phnumber = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const phnumberValue = phnumber.current.value;

    console.log(emailValue);
    console.log(passwordValue);
    console.log(phnumberValue);
  };
  return (
    <div className="card shadow">
      <div className="card-header">
        <h1>Registration</h1>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              ref={email}
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              ref={password}
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phnumber" className="form-label">
              Phnumber
            </label>
            <input
              ref={phnumber}
              type="phnumber"
              className="form-control"
              id="phnumber"
              placeholder="Max 11 Numbers"
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-sm btn-primary btn-block">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
