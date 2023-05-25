import axios from "axios";

export function getVideogames() {
  return async function (dispatch) {
    const json = await axios.get("/videogames");
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: json.data,
    });
  };
}

export function getNameVideogames(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "/videogames?name=" + name
      );
      return dispatch({
        type: "GET_NAME_VIDEOGAMES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// GET que se utiliza para el formulario de crear un nuevo videojuego
export function getPlatforms(){
    return async function(dispatch) {
            var info = await axios.get("/platforms", {
            });
            return dispatch({
                type: "GET_PLATFORMS",
                payload: info.data
            });
        };
    }

    export function getGenres(){
      return async function(dispatch){
          try {
              var json = await axios.get("/genres");
              //console.log(json.data);
              return dispatch({
                  type: "GET_GENRES",
                  payload: json.data
              })
          } catch (error) {
              console.log(error)
          }
      }
  }
  


// POST que se utiliza para el formulario de crear un nuevo videojuego
export function postVideogames(payload){
    return async function(dispatch){
            const response = await axios.post("/videogames", payload);
            console.log(response);
            return response;
        } 
    }


export function filterVideogamesByGenres(payload) {
  return {
    type: "FILTER_BY_GENRES",
    payload,
  };
}
export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByRating(payload){
  return{
      type: "ORDER_BY_RATING",
      payload,
  }
}

export function getDetails(id){
  return async function (dispatch){
    try{
      var json = await axios.get(`/videogames/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data
      })
    } catch(error){
      console.log(error)
    }
  }
}


export function deleteGame(id) {
  return {
    type: "DELETE",
    payload: id,
  };
}