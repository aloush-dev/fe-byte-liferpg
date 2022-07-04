import axios from "axios";

const lifeRpgApi = axios.create({
  baseURL: "https://byte-liferpg.herokuapp.com",
});

export const getCSRFToken = async () => {
  const csrfResponse = await fetch("https://byte-liferpg.herokuapp.com/csrf/", {
    credentials: "same-origin",
  });
  return csrfResponse.headers.get("X-CSRFToken");
};

// export const getTasks = async () => {
//   // let cookie = await getCSRFToken()
//   // console.log(cookie.headers)

//   return lifeRpgApi
//     .get("/tasks/")
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const getTasksNew = () => {
     fetch('https://byte-liferpg.herokuapp.com/tasks').then((data)=>{
        console.log(data)
    })
};

export const getProfile = () => {
  return lifeRpgApi.get("/profile/").then((data) => {
    return data;
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
