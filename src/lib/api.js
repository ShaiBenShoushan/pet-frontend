import axios from 'axios';
import cookie from 'js.cookie';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const baseUrl = "http://localhost:5000";

// const context = useContext(UserContext);


//used in: MyPets
export function getInfo(urlExt) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,

    }
  }
  return axios.get(baseUrl + urlExt, config);
}



//used in: AddPetForm
// export function adminNewPet(urlExt, payload) {
//   return axios.post(baseUrl + urlExt, payload);
// }

export function adminNewPet(urlExt, payload) {
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      authorization: "Bearer " + token,
    }

  }
  return axios.post(baseUrl + urlExt, payload, config);
}

//used in: SignIn


export function doLogin(email, password) {
  return axios
    .post(baseUrl + "/api/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      cookie.set("token", JSON.stringify(response.data.token));
      return response.data;
    });
};




//used in: SignUp
export async function doSignup(obj) {
  return axios
    .post(baseUrl + "/api/signup", obj)
    .then((response) => {
      return response.data;
    });
};


//used in: PetPage
export function getPetById(id) {
  console.log("yoyoyo")
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.get(baseUrl + '/api/pets/' + id, config);
}

//used in: LoggedInHome
export function getUserById(id) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.get(baseUrl + '/api/' + id, config);
}


export function getOwnedPets(id) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.get(baseUrl + '/api/pets/userOwned/' + id, config);
}

export function getSavedPets(id) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.get(baseUrl + '/api/pets/userSaved/' + id, config);
}

export function adopt(id, petId) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.post(baseUrl + `/api/pets/${id}/${petId}/adopt`, config);
}

export function foster(id, petId) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.post(baseUrl + `/api/pets/${id}/${petId}/foster`, config);
}

export function savePetForLater(id, petId) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.post(baseUrl + `/api/pets/${id}/${petId}/save`, config);
}

export function returnPet(id, petId) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.put(baseUrl + `/api/pets/${id}/${petId}/return`, config);
}

export function getAllUsers(email) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.get(baseUrl + "/api/", config);
}

export function getFullUser(id) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.get(baseUrl + `/api/${id}/full`, config);
}

export function getAllPets() {
  const token = JSON.parse(cookie.get("token"));
  console.log(token)
  let config = {
    headers: {
      authorization: "Bearer " + token,
    }
  }
  return axios.get(baseUrl + `/api/pets/allPets`, config);
}

export function petPagination(page, limit) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,
    },
    params: {
      page,
      limit
    }
  }
  return axios.get(baseUrl + `/api/pets/pagination`, config)
}
export function petSavedPagination(id, page, limit) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,

    },
    params: {
      page,
      limit
    }
  }

  return axios.get(baseUrl + '/api/pets/userSaved/' + id, config)
}

export function petOwnedPagination(id, page, limit) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,

    },
    params: {
      page,
      limit
    }
  }
  return axios.get(baseUrl + '/api/pets/userOwned/' + id, config)
}

export function searchPets(query) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,

    }
  }
  return axios.get(baseUrl + "/api/pets/", config);
}

// export function searchPagination(query, page, limit) {
//   return axios.get(baseUrl + '/api/pets/', {
//     params: {
//       page,
//       limit,
//       query
//     }
//   })
// }

export function updateUserInfo(id, payload) {
  const token = JSON.parse(cookie.get("token"));
  let config = {
    headers: {
      authorization: "Bearer " + token,

    }
  }
  return axios.put(baseUrl + '/api/' + id, payload, config);
}


// export function doLogin(email, password) {
//   // const token = JSON.parse(localStorage.getItem("token"));
//   // const token = JSON.parse(cookie.get("token"));
//   let config = {
//     headers: {
//       authorization: "Bearer " + token,
//     },

//   }
//   // let obj = {
//   //   cookie: token
//   // }
//   return axios
//     .post(baseUrl + "/api/login", {
//       email,
//       password,
//     }, config)
//   // .then((response) => {
//   //     console.log(response.data, "helloooo");
//   //   return response.data;
//   // });
// };

// export async function doSignup(email, password) {
//   return axios
//     .post(baseUrl + "/api/signup", {
//       email,
//       password,
//     })
//     .then((response) => {
//       console.log(response);
//       if (response.data) {
//         console.log("hi");
//         localStorage.setItem("token", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };