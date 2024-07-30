import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const email = useRef(null)
  const password = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailValue = email.current.value
    const passwordValue = password.current.value
    console.log(emailValue)
    console.log(passwordValue)

    localStorage.setItem('auth_token', emailValue)
    navigate('/')
  }

  return (
    <div className="card shadow">
      <div className="card-header">
        <h1>Login</h1>
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

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-sm btn-primary btn-block">
              Login
            </button>
            <Link to="/register" className="btn btn-sm btn-dark btn-block">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
