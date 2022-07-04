import axios from "axios";

const lifeRpgApi = axios.create({
  baseURL: "https://byte-liferpg.herokuapp.com",
});

export const getTasks = () => {
  let cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  console.log(cookieValue);

  return lifeRpgApi
    .get("/tasks/", {
        "X-XSRF-TOKEN": {
        'XSRF-TOKEN': cookieValue,
      },
    })
    .then((data) => {
        console.log(data)
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
    .post("/login/", userToLogin)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
