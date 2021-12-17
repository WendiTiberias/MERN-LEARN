import { Form, Container } from "react-bootstrap";
import Buttons from "../reusable/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Create_User, Get_User, Edit_User } from "../state/Actions";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Forms = () => {
  const reducer = useSelector((state) => state.Reducer);
  const { query, btnName } = reducer;
  const dispatch = useDispatch();
  const history = useHistory();

  const createUser = () => {
    if (
      query.name == "" ||
      query.email == "" ||
      query.noHp == "" ||
      query.company == "" ||
      query.income == "" ||
      query.expense == ""
    ) {
      alert("please complete form");
    } else {
      if (btnName === "Submit Item") {
        dispatch(Create_User(query));
      } else {
        dispatch(Edit_User(query));
      }

      dispatch({ type: "open_form" });
      history.push("/");
    }
  };

  return (
    <Container className="mt-4">
      <div className="form col-md-6">
        <Link to="/">Back to Home</Link>
        <h2 className="mb-4 mt-3">Create-User</h2>
        <Form>
          <Form.Control
            value={query.name}
            name="name"
            onChange={(e) => dispatch({ type: "query_get", payload: e })}
            type="text"
            placeholder="enter your name here"
          />
          <Form.Control
            value={query.email}
            name="email"
            onChange={(e) => dispatch({ type: "query_get", payload: e })}
            className="my-2"
            type="email"
            placeholder="enter your email"
          />
          <Form.Control
            value={query.noHp}
            name="noHp"
            onChange={(e) => dispatch({ type: "query_get", payload: e })}
            type="text"
            placeholder="enter your number phone"
          />
          <Form.Control
            value={query.company}
            name="company"
            onChange={(e) => dispatch({ type: "query_get", payload: e })}
            className="my-2"
            type="text"
            placeholder="enter your Company"
          />
          <Form.Control
            value={query.income}
            name="income"
            onChange={(e) => dispatch({ type: "query_get", payload: e })}
            type="number"
            placeholder="enter your income"
          />
          <Form.Control
            value={query.expense}
            name="expense"
            onChange={(e) => dispatch({ type: "query_get", payload: e })}
            className="mt-2 mb-4"
            type="number"
            placeholder="enter your expense"
          />
          <Buttons onClick={createUser} variant="primary" title={btnName} />
        </Form>
      </div>
    </Container>
  );
};

export default Forms;
