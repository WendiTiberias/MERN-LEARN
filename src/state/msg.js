const init = {
  notif: false,
  msg: "",
  message: "",
};
function Alerts(state = init, action) {
  switch (action.type) {
    case "open_form":
      return {
        ...state,
        notif: true,
        message: action.payload,
      };
    case "close_form":
      return {
        ...state,
        notif: false,
      };

    default:
      return state;
  }
}

export default Alerts;
