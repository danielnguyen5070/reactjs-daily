export const useAuth = () => {
  const token = localStorage.getItem('token');
  console.log('useAuth called, token:', token);

  return {
    isAuthenticated: Boolean(token),
  };
};