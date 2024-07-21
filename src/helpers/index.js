export const isLoggedIn = () => {
  return !!localStorage.getItem('auth_token')
}

export const logout = () => {
  localStorage.removeItem('auth_token')
}
