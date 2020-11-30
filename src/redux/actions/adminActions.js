import * as ActionType from "./../../constants/ActionType";
import Axios from "axios";
import Swal from "sweetalert2";
import swal from "sweetalert";

//Login Admin
export const loginAdmin = (dataLogin) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: dataLogin.user,
    })
      .then((res) => {
        if (res.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("UserAdmin", JSON.stringify(res.data));
          dispatch({
            type: ActionType.LOGIN_ADMIN,
          });
          dataLogin.history.push("/dashboard");
        } else {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "Tài Khoản hoặc Mật Khẩu không đúng!",
            width: "400px",
            padding: "0 0 20px 0",
          });
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({
          icon: "info",
          title: "Oops...",
          text: "Tài Khoản hoặc Mật Khẩu không đúng!",
          width: "400px",
          padding: "0 0 20px 0",
        });
      });
  };
};

// //Log Out Admin
// export const logOutAdmin = () => {

// }

//Get List Account
export const getListAccountAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
    })
      .then((result) => {
        dispatch({
          type: ActionType.GET_LIST_ACCOUNT,
          listAccount: result.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
//Add Account
export const addAccount = (newAccount) => {
  let userAdmin = JSON.parse(localStorage.getItem("UserAdmin"));

  return (dispatch) => {
    Axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: newAccount,
      headers: { Authorization: "Bearer " + userAdmin.accessToken },
    })
      .then((result) => {
        dispatch({
          type: ActionType.ADD_ACCOUNT,
          payload: result.data,
        });
        swal("Thêm Account Thành Công!", "", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("Không Thành Công!", "", "warning");
      });
  };
};
//Edit Account
export const editAccount = (Data, oldData) => {
  let userAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
  let newData = { ...Data, maNhom: "GP01" };
  console.log("newData:", newData);

  if (newData.maLoaiNguoiDung === "QuanTri") {
    swal(
      " Không Thể Thực Hiện Các Chức Năng Trên Tài Khoản Cùng Quyền Với Bạn!",
      "",
      "warning"
    );
  } else {
    return (dispatch) => {
      Axios({
        method: "PUT",
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: newData,
        headers: { Authorization: "Bearer " + userAdmin.accessToken },
      })
        .then((result) => {
          console.log(result);
          dispatch({
            type: ActionType.EDIT_ACCOUNT,
            payload: result.data,
            oldData: oldData,
          });
          dispatch(getListAccountAPI());
          swal("Edit Account Thành Công!", "", "success");
        })
        .catch((err) => {
          console.log(err);
          swal("Không Thành Công!", "", "warning");
        });
    };
  }
};
//Delete Account
export const deleteAccount = ({ maLoaiNguoiDung, taiKhoan }) => {
  let userAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
  console.log("AAAA", maLoaiNguoiDung, taiKhoan);

  if (maLoaiNguoiDung === "QuanTri") {
    swal(
      " Không Thể Thực Hiện Các Chức Năng Trên Tài Khoản Cùng Quyền Với Bạn!",
      "",
      "warning"
    );
  } else {
    return (dispatch) => {
      Axios({
        method: "DELETE",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`,
        headers: { Authorization: "Bearer " + userAdmin.accessToken },
      })
        .then((result) => {
          console.log(result);
          dispatch({
            type: ActionType.DELETE_ACCOUNT,
          });
          swal("Xóa Account Thành Công!", "", "success");
          dispatch(getListAccountAPI());
        })
        .catch((err) => {
          console.log(err);
          swal("Xóa Account Thất Bại!", "", "warning");
        });
    };
  }
};
