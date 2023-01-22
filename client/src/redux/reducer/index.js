const initialState = {
  categories: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ORDER_CATEGORIES":
      let orderAsc = state.categories.slice().sort((a, b) => {
        let categoriesA = a.name.toLowerCase();
        let categoriesB = b.name.toLowerCase();

        if (categoriesA > categoriesB) return 1;

        if (categoriesB > categoriesA) return -1;

        return 0;
      });

      const allCategories3 = state.allVideogames;
      const orderName =
        action.payload === "asc" ? orderAsc : orderAsc.reverse();

      return {
        ...state,
        categories: action.payload === "" ? allCategories3 : orderName,
      };
    default:
      return state;
  }
}
export default rootReducer;
