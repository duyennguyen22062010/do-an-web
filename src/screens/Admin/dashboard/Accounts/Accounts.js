import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect, useSelector } from "react-redux";
import * as action from "./../../../../redux/actions/adminActions";

function Accounts(props) {
  const [state] = React.useState({
    columns: [
      { title: "Tài Khoản", field: "taiKhoan" },
      { title: "Mật Khẩu", field: "matKhau" },
      { title: "Họ Tên", field: "hoTen" },
      { title: "Email", field: "email" },
      { title: "Số Điện Thoại", field: "soDt" },
      { title: "Mã Nhóm", field: "maNhom" },
      {
        title: "Mã Loại Người Dùng",
        field: "maLoaiNguoiDung",
        lookup: { KhachHang: "Khách Hàng", QuanTri: "Quản Trị" },
      },
    ],
  });
  const data = useSelector((state) => state.adminReducer.listAccount);
  console.log(data);

  const { getListAccount, addAccount, editAccount, deleteAccount } = props;
  useEffect(() => {
    getListAccount();
  }, [getListAccount]);
  // console.log(props.listAccount);
  const handleAdd = (newAccount) => {
    addAccount(newAccount);
    console.log(newAccount);
  };
  const handleUpdate = (newData, oldData) => {
    editAccount(newData, oldData);
  };
  const handleDelete = (oldData) => {
    deleteAccount(oldData);
    // getListAccount();
  };
  return (
    <MaterialTable
      title="List Account"
      options={{
        actionsColumnIndex: -1,
        addRowPosition: "first",
        // pageSize: "10",
      }}
      columns={state.columns}
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
    getListAccount: () => {
      dispatch(action.getListAccountAPI());
    },
    addAccount: (newAccount) => {
      dispatch(action.addAccount(newAccount));
    },
    editAccount: (newData, oldData) => {
      console.log(newData);
      console.log(oldData);
      dispatch(action.editAccount(newData, oldData));
    },
    deleteAccount: ({ maLoaiNguoiDung, taiKhoan }) => {
      console.log(maLoaiNguoiDung, taiKhoan);
      dispatch(action.deleteAccount({ maLoaiNguoiDung, taiKhoan }));
    },
  };
};

// const mapStateToProps = (state) => {
//   return {
//     listAccount: state.adminReducer.listAccount,
//   };
// };

export default connect(null, mapDispathToProp)(Accounts);
