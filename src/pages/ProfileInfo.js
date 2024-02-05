import React, { useState } from "react";
import "../components/userAccount.css";
import { Link } from "react-router-dom";

function ProfileInfo() {
  const [info, setInfo] = useState("");
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const [wrong, setWrong] = useState(false);
  const [wrong2, setWrong2] = useState(false);
  const [wrong3, setWrong3] = useState(false);

  function handleWrong() {
    if (info === "") {
      setWrong(true);
    }
  }
  function handleWrong2() {
    if (info2 === "") {
      setWrong2(true);
    }
  }
  function handleWrong3() {
    if (info3 === "") {
      setWrong3(true);
    }
  }
  return (
    <div className="user-account pb-5">
      <div className="container pt-3">
        <div className="maintitle">
          <h2>معلومات حسابي</h2>
          <p className="fw-bold">معلوماتك الشخصية</p>
          <hr />
        </div>
        <form action="" method="post" className="form d-flex">
          <div className="first-name mb-3">
            <label htmlFor="first-name" className="">
              الاسم الاول
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="الاسم الاول"
              required
              onChange={(e) => {
                setInfo(e.currentTarget.value);
              }}
            />
            {wrong && (
              <div className="pe-4 m-0 p-0">
                <span className="danger">
                  الاسم الأول يجب أن يكون بين 1 و 32 حرف!
                </span>
              </div>
            )}
          </div>
          <div className="last-name mb-3">
            <label htmlFor="last-name">اسم العائلة</label>
            <input
              id="last-name"
              type="text"
              placeholder="اسم العائلة"
              required
              onChange={(e) => {
                setInfo2(e.currentTarget.value);
              }}
            />
            {wrong2 && (
              <div className="pe-4">
                <span className="danger">
                  اسم العائلة يجب أن يكون بين 1 و 32 حرف!
                </span>
              </div>
            )}
          </div>
          <div className="phone-number mb-3">
            <label htmlFor="phone-number">رقم الجوال</label>
            <input
              id="phone-number"
              type="text"
              placeholder="رقم الجوال"
              required
              onChange={(e) => {
                setInfo3(e.currentTarget.value);
              }}
            />
            {wrong3 && (
              <div className="pe-4">
                <span className="danger">
                  يجب أن يكون رقم الهاتف بين 3 و 32 حرفًا!
                </span>
              </div>
            )}
          </div>
          <div className="lin mt-3 d-flex justify-content-around">
            <Link className="exit">رجوع</Link>
            <input
              className="send"
              type="submit"
              value="متابعة"
              onClick={() => {
                handleWrong();
                handleWrong2();
                handleWrong3();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileInfo;
