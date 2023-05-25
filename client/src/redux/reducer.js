const initialState = {
  videogames: [],
  allVideogames: [],
  detail: [],
  platforms: [],
  filtered: [],
  
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };

    case "GET_NAME_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
      };

    case "GET_PLATFORMS":
        return{
            ...state,
            platforms: action.payload
        }  

        case "GET_GENRES":
            return{
                ...state,
                genres: action.payload
            }

    case "FILTER_BY_GENRES":
      const allVideogames = state.allVideogames;
      const genresFiltered =
        action.payload === "All"
          ? allVideogames
          : allVideogames.filter((e) => e.genres.includes(action.payload));
      return {
        ...state,
        videogames: genresFiltered,
      };

    case "POST_VIDEOGAMES":
      return {
        ...state,
      };

    case "FILTER_CREATED":
      const allVideogames2 = state.allVideogames;
      const createdFilter =
        action.payload === "Created"
          ? allVideogames2.filter((e) => e.createdInDb)
          : allVideogames2.filter((e) => !e.createdInDb);
      return {
        ...state,
        videogames: action.payload === "All" ? allVideogames2 : createdFilter,
      };

    //Ordena en ascendete y descendente
    case "ORDER_BY_NAME":
      const sortedArr =
        action.payload === "asc"
          ? state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortedArr,
      };
      
      case "ORDER_BY_RATING":
            // let copyStatus = [...state.copyAllVideoGames];
            // if(action.payload === "Order-Rating"){
            //     return copyStatus;
            // }
            let arrayRating = action.payload === "Men-May" ?
            state.allVideogames.sort(function(a, b){
                if(a.rating > b.rating){// "a" es mayor a "b", entonces pone "a" detras de "b" 
                    return 1;
                }
                if(a.rating < b.rating){
                    return -1;
                }
                return 0;
              }):
              state.allVideoGames.sort(function(a, b){
                if(a.rating < b.rating){
                    return 1;
                }
                if(a.rating > b.rating){
                    return -1;
                }
                return 0;
            })
            return {
                ...state,
                allVideoGames: arrayRating
            }

      case "GET_DETAILS":
        return {
          ...state,
          detail: action.payload

        }

        case "DELETE":
          let auxDelete = [...state.filtered].filter(
            (videogame) => videogame.id !== action.payload
          );
          let auxDelete2 = [...state.videogames].filter(
            (videogame) => videogame.id !== action.payload
          );
    
          return {
            ...state,
            filtered: auxDelete,
            videogames: auxDelete2,
          };

    default:
      return state;
  }
}



export default rootReducer;
