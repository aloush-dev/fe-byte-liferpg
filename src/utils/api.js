import axios from "axios";

// const getCSRFToken = async () => {
//     const csrfResponse = await fetch(
//       "https://byte-liferpg.herokuapp.com/csrf/",
//       {
//         credentials: "same-origin",
//       }
//     );
//     return csrfResponse.headers.get("X-CSRFToken");
//   };

const lifeRpgApi = axios.create({
  baseURL: "https://byte-liferpg.herokuapp.com",
  withCredentials: true,
});

export const getCSRFToken = async () => {
  const csrfResponse = await lifeRpgApi.get("/csrf/", {});
  return csrfResponse.headers["x-csrftoken"];
};

export const getTasks = async () => {
  return lifeRpgApi
    .get("/tasks/")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTasksNew = () => {
  fetch("https://byte-liferpg.herokuapp.com/tasks")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = () => {
  return lifeRpgApi.get("/profile/").then((data) => {
    return data;
  });
};

export const postTask = async (taskToPost) => {
  let cookie = await getCSRFToken();
  return lifeRpgApi
    .post("/tasks/", taskToPost, {
      // add this too all dangerous requests
      headers: {
        "X-CSRFTOKEN": cookie,
      },
    })
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

export const getShop = () => {
  return lifeRpgApi.post("/shops/").then((data) => {
    return data;
  });
};

export const updateTask = () => {
  return lifeRpgApi.patch("/tasks", { is_completed: true }).then((data) => {
    return data;
  });
};

export const getItems = () => {
  return lifeRpgApi.get("/items/").then((data) => {
    return data;
  });
};
