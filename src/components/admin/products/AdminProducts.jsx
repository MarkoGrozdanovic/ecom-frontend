import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import Loader from "../../shared/Loader";
import { FaBoxOpen } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { adminProductTableColumn } from "../../helper/tableColumn";

const AdminProducts = () => {
  const products = [
    {
      productId: 52,
      productName:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores pariatur quos reprehenderit voluptas ex eum repudiandae libero qui sunt, eaque tempora, ducimus ratione ab ullam recusandae sint minus, esse quaerat",
      image:
        "http://localhost:8080/images/78ea230b-c42b-4400-b3b9-00d0a5f2b02d.jpg",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores pariatur quos reprehenderit voluptas ex eum repudiandae libero qui sunt, eaque tempora, ducimus ratione ab ullam recusandae sint minus, esse quaerat",
      quantity: 17,
      price: 1500.0,
      discount: 0.0,
      specialPrice: 1500.0,
    },
    {
      productId: 102,
      productName: "Iphone 17",
      image:
        "http://localhost:8080/images/68baa1de-7650-4b4e-8443-6bb362cec6bc.jpg",
      description: "High perfomance with super camera",
      quantity: 28,
      price: 2000.0,
      discount: 30.0,
      specialPrice: 1400.0,
    },
    {
      productId: 110,
      productName: "Wireless Headphones",
      image:
        "http://localhost:8080/images/fea71e6b-59c9-4322-a6f5-ff5b6e8e57d1.svg",
      description: "High-quality wireless headphones with noise cancellation",
      quantity: 49,
      price: 120.0,
      discount: 10.0,
      specialPrice: 108.0,
    },
    {
      productId: 111,
      productName: "Mechanical Keyboard",
      image:
        "http://localhost:8080/images/f606e97b-1af4-4fb9-bc0c-ae221422b909.svg",
      description: "Ergonomic mechanical keyboard with RGB lighting",
      quantity: 40,
      price: 85.0,
      discount: 15.0,
      specialPrice: 72.25,
    },
  ];
  const pagination = {
    pageNumber: 0,
    pageSize: 4,
    totalElements: 12,
    totalPages: 3,
    lastPage: false,
  };
  const tableRecords = products?.map((item) => {
    return {
      id: item.productId,
      productName: item.productName,
      description: item.description,
      discount: item.discount,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      specialPrice: item.specialPrice,
    };
  });
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  const handleEdit = (product) => {};

  const handleDelete = (product) => {};

  const handleImageUpload = (product) => {};

  const handleProductView = (product) => {};

  const handlePaginationChange = () => {};

  const [currentPage, setCurrentPage] = useState(
    pagination?.pageNumber + 1 || 1,
  );

  const emptyProduct = !products || products?.length === 0;

  return (
    <div>
      <div className="pt-6 pb-10 flex justify-end">
        <button className="bg-custom-blue hover:bg-blue-800 text-white font-semibold py-2 px-4 flex items-center gap-2 rounded-md shadow-md transition hover:text-slate-300 duration-300">
          <MdAddShoppingCart className="text-xl" />
          Add Product
        </button>
      </div>

      {!emptyProduct && (
        <h1 className="text-slate-800 text-3xl text-center font-bold pb-6 uppercase">
          All Products
        </h1>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {emptyProduct ? (
            <div className="flex flex-col items-center justify-center text-gray-600 py-10">
              <FaBoxOpen size={50} className="mb-3" />
              <h2 className="text-2xl font-semibold">
                No products created yet
              </h2>
            </div>
          ) : (
            <div className="max-w-full">
              <DataGrid
                className="w-full"
                rows={tableRecords}
                columns={adminProductTableColumn(
                  handleEdit,
                  handleDelete,
                  handleImageUpload,
                  handleProductView,
                )}
                paginationMode="server"
                rowCount={pagination?.totalElements || 0}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: pagination?.pageSize || 10,
                      page: currentPage - 1,
                    },
                  },
                }}
                onPaginationModelChange={handlePaginationChange}
                disableRowSelectionOnClick
                disableColumnResize
                pageSizeOptions={[pagination?.pageSize || 10]}
                pagination
                paginationOptions={{
                  showFirstButton: true,
                  showLastButton: true,
                  hideNextButton: currentPage === pagination?.totalPages,
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminProducts;
