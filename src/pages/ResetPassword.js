import React from "react";
import "../components/userAccount.css";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="user-account pb-5">
      <div className="container pt-3">
        <div className="maintitle">
          <h2>تغيير كلمة المرور</h2>
          <p className="fw-bold">كلمة المرور الجديدة</p>
          <hr />
        </div>
        <form action="" method="post" className="form d-flex">
          <div className="pass mb-3">
            <label htmlFor="pass" className="mb-2">
              كلمة المرور الجديدة
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="كلمة المرور الجديدة"
              required
            />
          </div>
          <div className="re-pass">
            <label htmlFor="re-pass" className="mb-2">
              تأكيد كلمة المرور الجديدة
            </label>
            <input
              type="password"
              name="re-pass"
              id="re-pass"
              placeholder="تأكيد كلمة المرور الجديدة"
              required
            />
          </div>
          <div className="lin mt-3 d-flex justify-content-around">
            <Link className="exit">رجوع</Link>
            <input className="send" type="submit" value="متابعة" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
