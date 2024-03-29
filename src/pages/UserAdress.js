import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getUserSingle } from "../store/user-slice";
import { useParams } from "react-router";

function UserAdress() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers(5));
    console.log(users);
  }, []);

  return (
    <div className="user-account pb-5 mt-5">
      <div className="container pt-3">
        <div className="maintitle">
          <h2>قائمة دفتر العناوين</h2>
          <hr />
        </div>
        <div className="">
          <p>City: {users.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserAdress;
