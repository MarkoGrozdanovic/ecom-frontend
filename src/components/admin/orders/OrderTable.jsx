import { DataGrid } from "@mui/x-data-grid";
import { adminOrderTableColumn } from "../../helper/tableColumn";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Modal from "../../shared/Modal";
import UpdateOrderForm from "./UpdateOrderForm";

const OrderTable = ({ adminOrders, pagination }) => {
  const navigate = useNavigate();
  const [updateOpenModal, setUpdateOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    pagination?.pageNumber + 1 || 1,
  );

  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = useLocation().pathname;

  const handleEdit = (order) => {
    setSelectedItem(order);
    setUpdateOpenModal(true);
  };

  const tableRecords = adminOrders?.map((item) => {
    return {
      id: item.orderId,
      email: item.email,
      totalAmount: item.totalAmount,
      status: item.orderStatus,
    };
  });

  const handlePaginationChange = (paginationModel) => {
    const page = paginationModel.page + 1;
    setCurrentPage(page);
    params.set("page", page.toString());
    navigate(`${pathname}?${params}`);
  };

  return (
    <div className="text-slate-800 text-3xl text-center font-bold pb-6 uppercase">
      <h1>All Orders</h1>
      <DataGrid
        className="w-full"
        rows={tableRecords}
        paginationMode="server"
        rowCount={pagination?.totalElements || 0}
        columns={adminOrderTableColumn(handleEdit)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pagination?.pageSize || 10,
              page: currentPage - 1,
            },
          },
        }}
        onPaginationModelChange={handlePaginationChange}
        disableColumnResize
        pageSizeOptions={[pagination?.pageSize || 10]}
        pagination
        paginationOptions={{
          showFirstButton: true,
          showLastButton: true,
          hideNextButton: currentPage === pagination?.totalPages,
        }}
      />

      <Modal
        open={updateOpenModal}
        setOpen={setUpdateOpenModal}
        title="Update Order Status"
      >
        <UpdateOrderForm
          setOpen={setUpdateOpenModal}
          open={updateOpenModal}
          loader={loader}
          setLoader={setLoader}
          selectedId={selectedItem.id}
          selectedItem={selectedItem}
        />
      </Modal>
    </div>
  );
};

export default OrderTable;
