import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 const ADMIN_EMAIL = "admin@gmail.com";
 const ADMIN_PASSWORD = "admin123";

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const signup = (name, email, password) => {
    const users = getUsers();

    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("User already exists");
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role: email === "admin@test.com" ? "admin" : "user"
    };

    users.push(newUser);
    saveUsers(users);


    const loggedUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    };

    localStorage.setItem("currentUser", JSON.stringify(loggedUser));
    setCurrentUser(loggedUser);

    return true;
  };

  const login = (email, password) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const adminUser = {
      id: "admin-1",
      name: "Admin",
      email,
      role: "admin",
    };

    localStorage.setItem("currentUser", JSON.stringify(adminUser));
    setCurrentUser(adminUser);
    return true;
  }
    const users = getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return false;
    }

    const loggedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };

    localStorage.setItem("currentUser", JSON.stringify(loggedUser));
    setCurrentUser(loggedUser);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  const isAdmin = () => {
    return currentUser && currentUser.role === "admin";
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, signup, login, logout, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
