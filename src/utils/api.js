import axios from "axios";

const lifeRpgApi = axios.create({
  baseURL: "https://byte-liferpg.herokuapp.com",
});

export const getTasks = () => {
  return lifeRpgApi
    .get("/tasks/")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postTask = (taskToPost) => {
  return lifeRpgApi
    .post("/tasks/", taskToPost)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createUser = (userToPost) => {
  return lifeRpgApi
    .post("/register/", userToPost)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginUser = (userToLogin) => {
  return lifeRpgApi
    .post("/login/", userToLogin, {withCredentials:true})
    .then((data) => {
        console.log(data.headers)
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
