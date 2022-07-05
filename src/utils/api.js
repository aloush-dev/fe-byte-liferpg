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

export const getProfile = () => {
  return lifeRpgApi.get("/profile/").then((data) => {
    return data;
  });
};

export const postTask = async (taskToPost) => {
  let cookie = await getCSRFToken();
  return lifeRpgApi
    .post("/tasks/add/", taskToPost, {
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

export const logoutUser = () => {
  return lifeRpgApi
    .get("/logout/")
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
  return lifeRpgApi.get("/shops/").then((data) => {
    return data;
  });
};

export const updateTask = async (id) => {
  let cookie = await getCSRFToken();
  return lifeRpgApi
    .patch(
      `/tasks/edit/${id}`,
      { is_complete: true },
      {
        // add this too all dangerous requests
        headers: {
          "X-CSRFTOKEN": cookie,
        },
      }
    )
    .then((data) => {
      return data;
    });
};

export const profileUpdate = async (updateInfo) => {
  let cookie = await getCSRFToken();
  return lifeRpgApi
    .patch("/profile/", updateInfo, {
      headers: {
        "X-CSRFTOKEN": cookie,
      },
    })
    .then((data) => {
      return data;
    });
};

export const getItems = () => {
  return lifeRpgApi
    .get("/items/")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getItems = () => {
  return lifeRpgApi.get("/items/").then((data) => {
    return data;
  });
};

export const updateUser = async (data) => {
  let cookie = await getCSRFToken();
  return lifeRpgApi
    .patch("/profile/", data, {
      headers: {
        "X-CSRFTOKEN": cookie,
      },
    })
    .then((response) => {
      return response;
    });
};
