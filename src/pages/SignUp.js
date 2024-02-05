import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="home">
      <div className="box">
        <div className="form">
          <form action="">
            <h1>انشاء حساب جديد</h1>
            <p className="par">
              إذا كان لديك حساب معنا ، الرجاء الدخول إلى{" "}
              <Link to="/profile">صفحة تسجيل الدخول.</Link>
            </p>
            <h3>معلوماتك الشخصية</h3>
            <div className="info">
              <input type="text" placeholder="الاسم الاول :" required />
              <input type="text" placeholder="اسم العائلة :" required />
              <input type="text" placeholder="رقم الجوال :" required />
              <input type="password" placeholder="كلمة المرور :" required />
              <input
                type="password"
                placeholder="تأكيد كلمة المرور :"
                required
              />
              <div className="check">
                <input type="checkbox" name="" id="term" />
                <label for="term">
                  لقد قرأت و وافقت علي{" "}
                  <Link to="/terms" className="forget">
                    الشروط و الاحكام
                  </Link>
                </label>
              </div>
              <Link className="send" type="submit">
                متابعة
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
