import React from "react";
import { Link } from "react-router-dom";
import "../components/forgetpass.css"

function ForgetPass() {
  return (
    <div className="forget-pass">
      <h2>هل نسيت كلمة المرور ؟</h2>
      <p>
        أدخل رقم الجوال المرتبط مع حسابك. انقر على متابعه ليتم إرسال رابط انشاء
        كلمة مرور جديدة إلى رقم جوالك الخاص
      </p>
      <h4>رقم الجوال</h4>
      <hr />
      <div className="form">
        <form action="">
          <label htmlFor="" className="ms-2">
            رقم الجوال
          </label>
          <input type="text" placeholder="رقم الجوال" />
          <div className="lin mt-3 d-flex">
            <Link className="exit">الغاء</Link>
            <Link className="send">متابعة</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPass;
