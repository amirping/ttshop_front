export default {
  cart: {
    items: []
  },
  store: {
    items: [],
    searchQuery: "",
    departments: [],
    categories: [],
    selectedDep: "",
    selectedCat: "",
    offsetPag: 0
  },
  auth: {
    connected: !!localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user") || "null")
  },
  system: { success: null, error: null }
};
