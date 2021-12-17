import axios from "axios";

const Get_User = () => {
  return async (dispatch) => {
    try {
      const req = await axios.get(`http://localhost:4000/v1/user`);
      const res = await req.data;
      const { that } = res;
      const { item } = that;
      dispatch({ type: "get_user", payload: item });
    } catch (error) {
      return error;
    }
  };
};

const Create_User = (query) => {
  return async (dispatch) => {
    try {
      fetch(`http://localhost:4000/v1/user`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      })
        .then((res) => res.json())
        .then((items) => {
          const { that } = items;
          const { item } = that;
          dispatch({ type: "post_user", payload: item });
        });
    } catch (error) {
      return error;
    }
  };
};

const Delete_User = (id) => {
  return async (dispatch) => {
    try {
      const request = await fetch(`http://localhost:4000/v1/user`, {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const json = await request.json();
      const { that } = await json;
      const { item } = await that;
      dispatch({ type: "delete_user", payload: item });
    } catch (error) {
      return error;
    }
  };
};

const Edit_User = (query) => {
  return async (dispatch) => {
    try {
      const { _id } = query;
      const request = await fetch(`http://localhost:4000/v1/user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });

      const json = await request.json();
      const { that } = await json;
      const { item } = await that;
      dispatch({ type: "edit_user", payload: item });
    } catch (error) {
      return error;
    }
  };
};

export { Get_User, Create_User, Delete_User, Edit_User };
