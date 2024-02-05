import React from "react";
import { Link } from "react-router-dom";
import "../components/profile.css";

function Profile() {
  return (
    <div className="home">
      <div className="box pb-5">
        <div className="form">
          <form action="">
            <h1>تسجيل الدخول</h1>
            <p className="">
              إذا كنت تملك حساب مسبق في الموقع، فتفضل بتسجيل دخولك...
            </p>
            <div className="info">
              <input type="text" placeholder="رقم الجوال :" />
              <input type="password" placeholder="كلمة المرور :" />
              <Link className="forget" to="/forget">
                نسيت كلمة المرور؟
              </Link>
              <Link className="send" to="/account">
                دخول
              </Link>
            </div>
          </form>
        </div>
        <span></span>
        <div className="signup">
          <h1>تسجيل جديد</h1>
          <p>
            لكي تقوم باتمام الطلب قم بإنشاء حساب جديد معنا، فهو يُمكنك من الشراء
            بصورة أسرع و متابعة طلبيات الشراء التي تقدمت بها, و مراجعة سجل
            الطلبيات القديمة واسعتراض الفواتير وغير ذلك الكثير...
          </p>
          <Link to="/signup" className="send">
            متابعة
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
