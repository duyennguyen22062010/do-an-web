import * as ActionType from "./../../constants/ActionType";
import Axios from "axios";
import swal from "sweetalert";

export const getListMovieAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => {
        dispatch({
          type: ActionType.GET_LIST_MOVIE,
          listMovie: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getDetailMovie = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    })
      .then((result) => {
        dispatch({
          type: ActionType.GET_DETAIL_MOVIE,
          detailMovie: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//Add Movie
export const addMovie = (newData) => {
  let userAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
  // let newMovie = { ...newData, hinhAnh: "lala.jpg" };
  // console.log("new", newMovie);

  let formData = new FormData();
  // formData.append("hinhAnh", newData.hinhAnh, newData.hinhAnh.name);
  // formData.append("tenPhim", newData.tenPhim);
  // formData.append("maNhom", newData.maNhom);

  for (let key in newData) {
    formData.append(key, newData[key]);
    // formData.set("trailer", newData.trailer);
    // formData.set("danhGia", newData.danhGia);
  }

  return (dispatch) => {
    Axios({
      method: "POST",
      // url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      // data: newMovie,
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      data: formData,

      headers: { Authorization: "Bearer " + userAdmin.accessToken },
    })
      .then((result) => {
        dispatch({
          type: ActionType.ADD_MOVIE,
          payload: result.data,
        });
        dispatch(getListMovieAPI());
        swal("Thêm Movie Thành Công!", "", "success");
        // dispatch(uploadImg(formData));
        // dispatch(getListMovieAPI());
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
      })
      .catch((err) => {
        console.log(err);
        swal("Không Thành Công!", "", "warning");
      });
    // dispatch(uploadImg(formData));
    // dispatch(getListMovieAPI());
  };
};
//Edit Movie
export const editMovie = (newData, oldData) => {
  let userAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
  console.log("newData:", newData, "oldData:", oldData);
  let newMovie = { ...newData, hinhAnh: oldData.hinhAnh };

  // let formData = new FormData();
  // formData.append("hinhAnh", newData.hinhAnh, newData.hinhAnh.name);
  // formData.append("tenPhim", newData.tenPhim);
  // formData.append("maNhom", newData.maNhom);

  let formData = new FormData();
  for (let key in newData) {
    formData.append(key, newData[key]);
  }
  if (newData.hinhAnh !== oldData.hinhAnh) {
    return (dispatch) => {
      Axios({
        method: "POST",
        // url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
        // data: newMovie,
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
        data: formData,
        headers: { Authorization: "Bearer " + userAdmin.accessToken },
      })
        .then((result) => {
          dispatch({
            type: ActionType.EDIT_MOVIE,
            payload: result.data,
            oldData: oldData,
          });
          dispatch(getListMovieAPI());
          swal("Edit Movie Thành Công!", "", "success");
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1000);
        })
        .catch((err) => {
          console.log(err);
          swal("Không Thành Công!", "", "warning");
        });
      // dispatch(uploadImg(formData));
      // dispatch(getListMovieAPI());
    };
  } else {
    return (dispatch) => {
      Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
        data: newMovie,
        headers: { Authorization: "Bearer " + userAdmin.accessToken },
      })
        .then((result) => {
          dispatch({
            type: ActionType.EDIT_MOVIE,
            payload: result.data,
            oldData: oldData,
          });
          dispatch(getListMovieAPI());
          swal("Edit Movie Thành Công!", "", "success");
        })
        .catch((err) => {
          console.log(err);
          swal("Không Thành Công!", "", "warning");
        });
    };
  }
};
//Delete Movie
export const deleteMovie = ({ maPhim }) => {
  let userAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
  console.log("AAAA", maPhim);
  return (dispatch) => {
    Axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      headers: { Authorization: "Bearer " + userAdmin.accessToken },
    })
      .then((result) => {
        console.log(result);
        dispatch({
          type: ActionType.DELETE_MOVIE,
        });
        swal("Xóa Movie Thành Công!", "", "success");
        dispatch(getListMovieAPI());
      })
      .catch((err) => {
        console.log(err);
        swal("Xóa Movie Thất Bại!", "", "warning");
      });
  };
};
//Upload Hinh
export const uploadImg = (formData) => {
  let userAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
  console.log("newData:", formData);
  return (dispatch) => {
    Axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
      data: formData,
      headers: { Authorization: "Bearer " + userAdmin.accessToken },
    })
      .then((result) => {
        dispatch({
          type: ActionType.UPLOAD_MOVIE_IMG,
          payload: result.data,
        });
        // dispatch(getListMovieAPI());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
