import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import OrderTable from "./OrderTable";
import { useSelector } from "react-redux";
import { useOrderFilter } from "../../../hooks/useOrderFilter";

const Orders = () => {
  // const adminOrders = [
  //   {
  //     orderId: 7,
  //     email: "user1@example.com",
  //     orderItems: [
  //       {
  //         orderItemId: 4,
  //         product: {
  //           productId: 110,
  //           productName: "Wireless Headphones",
  //           image: "fea71e6b-59c9-4322-a6f5-ff5b6e8e57d1.svg",
  //           description:
  //             "High-quality wireless headphones with noise cancellation",
  //           quantity: 49,
  //           price: 120.0,
  //           discount: 10.0,
  //           specialPrice: 108.0,
  //         },
  //         quantity: 1,
  //         discount: 10.0,
  //         orderedProductPrice: 108.0,
  //       },
  //     ],
  //     orderDate: "2026-02-07",
  //     payment: {
  //       paymentId: 7,
  //       paymentMethod: "online",
  //       pgPaymentId: "pi_3SyEIgGiQydKaxvJ1Zph0yIh",
  //       pgStatus: "succeded",
  //       pgResponseMessage: "Payment successful",
  //       pgName: "Stripe",
  //     },
  //     totalAmount: 108.0,
  //     orderStatus: "Order Accepted!",
  //     addressId: 1,
  //   },
  //   {
  //     orderId: 9,
  //     email: "admin@example.com",
  //     orderItems: [
  //       {
  //         orderItemId: 6,
  //         product: {
  //           productId: 102,
  //           productName: "Iphone 17",
  //           image: "68baa1de-7650-4b4e-8443-6bb362cec6bc.jpg",
  //           description: "High perfomance with super camera",
  //           quantity: 28,
  //           price: 2000.0,
  //           discount: 30.0,
  //           specialPrice: 1400.0,
  //         },
  //         quantity: 1,
  //         discount: 30.0,
  //         orderedProductPrice: 1400.0,
  //       },
  //     ],
  //     orderDate: "2026-02-07",
  //     payment: {
  //       paymentId: 9,
  //       paymentMethod: "online",
  //       pgPaymentId: "pi_3SyERhGiQydKaxvJ0vFW6b2m",
  //       pgStatus: "succeded",
  //       pgResponseMessage: "Payment successful",
  //       pgName: "Stripe",
  //     },
  //     totalAmount: 1400.0,
  //     orderStatus: "Order Accepted!",
  //     addressId: 1,
  //   },
  //   {
  //     orderId: 1,
  //     email: "admin@example.com",
  //     orderItems: [
  //       {
  //         orderItemId: 1,
  //         product: {
  //           productId: 52,
  //           productName:
  //             " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores pariatur quos reprehenderit voluptas ex eum repudiandae libero qui sunt, eaque tempora, ducimus ratione ab ullam recusandae sint minus, esse quaerat",
  //           image: "78ea230b-c42b-4400-b3b9-00d0a5f2b02d.jpg",
  //           description:
  //             " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores pariatur quos reprehenderit voluptas ex eum repudiandae libero qui sunt, eaque tempora, ducimus ratione ab ullam recusandae sint minus, esse quaerat",
  //           quantity: 17,
  //           price: 1500.0,
  //           discount: 0.0,
  //           specialPrice: 1500.0,
  //         },
  //         quantity: 1,
  //         discount: 0.0,
  //         orderedProductPrice: 1500.0,
  //       },
  //     ],
  //     orderDate: "2026-02-06",
  //     payment: {
  //       paymentId: 1,
  //       paymentMethod: "online",
  //       pgPaymentId: "pi_3Sxs8VGiQydKaxvJ0tUmcAe8",
  //       pgStatus: "succeded",
  //       pgResponseMessage: "Payment successful",
  //       pgName: "Stripe",
  //     },
  //     totalAmount: 1500.0,
  //     orderStatus: "Order Accepted!",
  //     addressId: 1,
  //   },
  //   {
  //     orderId: 8,
  //     email: "user1@example.com",
  //     orderItems: [
  //       {
  //         orderItemId: 5,
  //         product: {
  //           productId: 52,
  //           productName:
  //             " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores pariatur quos reprehenderit voluptas ex eum repudiandae libero qui sunt, eaque tempora, ducimus ratione ab ullam recusandae sint minus, esse quaerat",
  //           image: "78ea230b-c42b-4400-b3b9-00d0a5f2b02d.jpg",
  //           description:
  //             " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores pariatur quos reprehenderit voluptas ex eum repudiandae libero qui sunt, eaque tempora, ducimus ratione ab ullam recusandae sint minus, esse quaerat",
  //           quantity: 17,
  //           price: 1500.0,
  //           discount: 0.0,
  //           specialPrice: 1500.0,
  //         },
  //         quantity: 1,
  //         discount: 0.0,
  //         orderedProductPrice: 1500.0,
  //       },
  //     ],
  //     orderDate: "2026-02-07",
  //     payment: {
  //       paymentId: 8,
  //       paymentMethod: "online",
  //       pgPaymentId: "pi_3SyEQPGiQydKaxvJ1Jwytxfx",
  //       pgStatus: "succeded",
  //       pgResponseMessage: "Payment successful",
  //       pgName: "Stripe",
  //     },
  //     totalAmount: 1500.0,
  //     orderStatus: "Order Accepted!",
  //     addressId: 1,
  //   },
  //   {
  //     orderId: 3,
  //     email: "admin@example.com",
  //     orderItems: [
  //       {
  //         orderItemId: 2,
  //         product: {
  //           productId: 52,
  //           productName:
  //             " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores pariatur quos reprehenderit voluptas ex eum repudiandae libero qui sunt, eaque tempora, ducimus ratione ab ullam recusandae sint minus, esse quaerat",
  //           image: "78ea230b-c42b-4400-b3b9-00d0a5f2b02d.jpg",
  //           description:
  //             " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores pariatur quos reprehenderit voluptas ex eum repudiandae libero qui sunt, eaque tempora, ducimus ratione ab ullam recusandae sint minus, esse quaerat",
  //           quantity: 17,
  //           price: 1500.0,
  //           discount: 0.0,
  //           specialPrice: 1500.0,
  //         },
  //         quantity: 1,
  //         discount: 0.0,
  //         orderedProductPrice: 1500.0,
  //       },
  //       {
  //         orderItemId: 3,
  //         product: {
  //           productId: 102,
  //           productName: "Iphone 17",
  //           image: "68baa1de-7650-4b4e-8443-6bb362cec6bc.jpg",
  //           description: "High perfomance with super camera",
  //           quantity: 28,
  //           price: 2000.0,
  //           discount: 30.0,
  //           specialPrice: 1400.0,
  //         },
  //         quantity: 1,
  //         discount: 30.0,
  //         orderedProductPrice: 1400.0,
  //       },
  //     ],
  //     orderDate: "2026-02-06",
  //     payment: {
  //       paymentId: 3,
  //       paymentMethod: "online",
  //       pgPaymentId: "pi_3SxsAWGiQydKaxvJ01ozzJZb",
  //       pgStatus: "succeded",
  //       pgResponseMessage: "Payment successful",
  //       pgName: "Stripe",
  //     },
  //     totalAmount: 2900.0,
  //     orderStatus: "Order Accepted!",
  //     addressId: 5,
  //   },
  // ];
  // const pagination = {
  //   pageNumber: 0,
  //   pageSize: 50,
  //   totalElements: 5,
  //   totalPages: 1,
  //   lastPage: true,
  // };

  const { adminOrder, pagination } = useSelector((state) => state.order);

  useOrderFilter();

  const emptyOrder = !adminOrder || adminOrder?.length === 0;
  return (
    <div className="pb-6 pt-20">
      {emptyOrder ? (
        <div className="flex flex-col items-center justify-center text-gray-600 py-10">
          <FaShoppingCart size={50} className="mb-3" />
          <h2 className="text-xl font-semibold">No Orders Placed Yet</h2>
        </div>
      ) : (
        <OrderTable adminOrders={adminOrder} pagination={pagination} />
      )}
    </div>
  );
};

export default Orders;
