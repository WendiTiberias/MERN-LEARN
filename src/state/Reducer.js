import axios from "axios";

const init = {
  query: {
    name: "",
    email: "",
    noHp: "",
    company: "",
    income: 0,
    expense: 0,
  },
  item: [],
  btnName: "Submit Item",
  notif: false,
};

const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case "query_get":
      return {
        ...state,
        query: { ...state.query, [payload.target.name]: payload.target.value },
      };

    case "get_user":
      return {
        ...state,
        item: payload,
      };

    case "post_user":
      return {
        ...state,
        item: payload,
      };
      return state;

    case "delete_user":
      console.log(payload);
      return {
        ...state,
        item: payload,
      };

    case "send_data_form":
      return {
        ...state,
        btnName: "Edit",
        query: payload,
      };

    case "edit_user":
      return {
        ...state,
        btnName: "Submit Item",
        query: {
          id: "",
          name: "",
          email: "",
          noHp: "",
          company: "",
          income: 0,
          expense: 0,
        },
        item: payload,
      };

    default:
      return state;
  }
};

export default Reducer;
