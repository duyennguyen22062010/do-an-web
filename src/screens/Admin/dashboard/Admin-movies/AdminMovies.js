import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect, useSelector } from "react-redux";
import * as action from "./../../../../redux/actions/movieActions";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Moment from "react-moment";
import moment from "moment";

function AdminMovies(props) {
  const data = useSelector((state) => state.movieReducer.listMovie);
  console.log(data);

  // const [tenPhim, setTenPhim] = React.useState("");
  // const [maNhom, setmaNhom] = React.useState("");

  // const dispatch = useDispatch();

  const { getListMovie, addMovie, editMovie, deleteMovie } = props;

  useEffect(() => {
    getListMovie();
  }, [getListMovie]);

  const [state] = React.useState({
    columns: [
      { title: "Mã Phim", field: "maPhim", type: "numeric" },
      {
        title: "Hình Ảnh",
        field: "hinhAnh",
        editComponent: (props) => (
          <input
            type="file"
            // onChange={handleImageChange}
            onChange={(e) => props.onChange(e.target.files[0])}
          />
        ),
      },
      { title: "Tên Phim", field: "tenPhim" },
      { title: "Bí Danh", field: "biDanh" },
      { title: "Mô Tả", field: "moTa" },
      {
        title: "Ngày Khởi Chiếu",
        field: "ngayKhoiChieu",
        editComponent: (props) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={props.value ? props.value : new Date()}
                onChange={(date) => {
                  props.onChange(date);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        ),
      },
      { title: "Mã Nhóm", field: "maNhom" },

      { title: "Đánh Giá", field: "danhGia" },
      { title: "Trailer", field: "trailer" },
    ],
  });

  const handleAdd = (newData) => {
    newData.maPhim = parseInt(newData.maPhim);
    newData.danhGia = parseInt(newData.danhGia);
    newData.ngayKhoiChieu = moment(newData.ngayKhoiChieu).format("DD/MM/YYYY");

    // let formData = new FormData();
    // for (let key in newData) {
    //   formData.append(key, newData[key]);
    // }
    // formData.append("trailer", newData.trailer);
    // formData.append("danhGia", newData.danhGia);
    // formData.append("File", newData.hinhAnh, newData.hinhAnh.name);
    // formData.append("tenPhim", newData.tenPhim);
    // formData.append("biDanh", newData.biDanh);
    // formData.append("moTa", newData.moTa);
    // formData.append("maNhom", newData.maNhom);
    // formData.append("ngayKhoiChieu", newData.ngayKhoiChieu);

    addMovie(newData);
    console.log("formData", newData);
  };
  const handleUpdate = (newData, oldData) => {
    newData.maPhim = parseInt(newData.maPhim);
    newData.danhGia = parseInt(newData.danhGia);
    newData.ngayKhoiChieu = moment(newData.ngayKhoiChieu).format("DD/MM/YYYY");

    // console.log(newData);
    editMovie(newData, oldData);
  };
  const handleDelete = (oldData) => {
    deleteMovie(oldData);
  };

  // const handleImageChange = (e) => {
  //   console.log("e", e);

  //   let image = e.target.files[0];
  //   let formData = new FormData();
  //   formData.append("File", image, image.name);
  //   formData.append("tenphim", tenPhim);
  //   formData.append("manhom", maNhom);

  //   console.log("formData", formData);
  //   dispatch(action.uploadImg(formData));
  // };

  return (
    <MaterialTable
      title="List Movie"
      options={{ addRowPosition: "first" }}
      columns={[
        ...state.columns.map((data) => {
          return {
            field: data.field,
            title: data.title,
            type: data.type,
            editComponent: data.editComponent,
            render: (rowData) => {
              if (data.field === "hinhAnh") {
                return (
                  <img
                    style={{ width: 220, height: 300 }}
                    src={rowData[data.field]}
                    alt=""
                  />
                );
              }
              if (data.field === "moTa") {
                return <p style={{ width: 200 }}>{rowData[data.field]}</p>;
              }
              if (data.field === "ngayKhoiChieu") {
                return (
                  <div style={{ width: 141 }}>
                    <Moment format="DD/MM/YYYY">{rowData[data.field]}</Moment>
                  </div>
                );
              }
              if (data.field === "tenPhim") {
                return <p style={{ width: 84 }}>{rowData[data.field]}</p>;
              }
              if (data.field === "biDanh") {
                return <p style={{ width: 75 }}>{rowData[data.field]}</p>;
              }
              if (data.field === "maPhim") {
                return <p style={{ width: 73 }}>{rowData[data.field]}</p>;
              }
              //   if (data.field === "trailer") {
              //     return <p style={{ width: 250 }}>{rowData[data.field]}</p>;
              //   }
              return rowData[data.field];
            },
          };
        }),
      ]}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            resolve();
            handleAdd(newData);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            resolve();
            handleUpdate(newData, oldData);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            resolve();
            handleDelete(oldData);
          }),
      }}
    />
  );
}
const mapDispathToProp = (dispatch) => {
  return {
    getListMovie: () => {
      dispatch(action.getListMovieAPI());
    },
    addMovie: (newData) => {
      dispatch(action.addMovie(newData));
    },
    editMovie: (newData, oldData) => {
      // console.log(newData);
      // console.log(oldData);
      dispatch(action.editMovie(newData, oldData));
    },
    deleteMovie: ({ maPhim }) => {
      console.log(maPhim);
      dispatch(action.deleteMovie({ maPhim }));
    },
  };
};

export default connect(null, mapDispathToProp)(AdminMovies);
