import React from "react";
import "../components/userAccount.css";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="user-account pb-5">
      <div className="container pt-3">
        <div className="box d-flex">
          <Link className="item">حسابي</Link>
          <Link className="item" to="/account/info">
            تحرير الحساب
          </Link>
          <Link className="item" to="/account/resetPassword">
            كلمة المرور
          </Link>
          <Link className="item" to="/account/userAdress">
            دفتر العناويين
          </Link>
          <Link className="item" to="/account/favorite">
            قائمة رغباتي
          </Link>
          <Link className="item">طلباتي</Link>
          <Link className="item">نقاط المكافآت</Link>
          <Link className="item">المنتجات المرتجعة</Link>
          <Link className="item">خروج</Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
