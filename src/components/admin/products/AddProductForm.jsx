import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../shared/InputField";
import { Description } from "@headlessui/react";
import Spinners from "../../shared/Spinners";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  fetchCategories,
  updateProductFromDashboard,
} from "../../../store/actions";
import SelectTextField from "../../shared/SelectTextField";
import Skeleton from "../../shared/Skeleton";
import ErrorPage from "../../shared/ErrorPage";

const AddProductForm = ({ setOpen, product, update }) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { categories } = useSelector((state) => state.products);
  const { categoryLoader, errorMessage } = useSelector((state) => state.errors);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const saveProductHandler = (data) => {
    if (!update) {
      // create new product logic
    } else {
      const sendData = {
        ...data,
        id: product.id,
      };
      dispatch(
        updateProductFromDashboard(sendData, toast, reset, setLoader, setOpen),
      );
    }
  };

  useEffect(() => {
    if (update && product) {
      setValue("productName", product?.productName);
      setValue("price", product?.price);
      setValue("quantity", product?.quantity);
      setValue("discount", product?.discount);
      setValue("specialPrice", product?.specialPrice);
      setValue("description", product?.description);
    }
  }, [update, product]);

  useEffect(() => {
    if (!update) {
      dispatch(fetchCategories());
    }
  }, [dispatch, update]);

  useEffect(() => {
    if (!categories) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  if (categoryLoader) {
    <Skeleton />;
  }

  if (errorMessage) {
    <ErrorPage message={errorMessage} />;
  }

  return (
    <div className="py-5 relative h-full">
      <form className="space-y-4" onSubmit={handleSubmit(saveProductHandler)}>
        <div className="flex md:flex-row flex-col gap-4 w-full">
          <InputField
            label="Product Name"
            required
            id="productName"
            type="text"
            message="This field is required"
            placeholder="Product name"
            register={register}
            errors={errors}
          />

          {!update && (
            <SelectTextField
              label="Select Categories"
              select={selectedCategory}
              setSelect={setSelectedCategory}
              lists={categories}
            />
          )}
        </div>

        <div className="flex md:flex-row flex-col gap-4 w-full">
          <InputField
            label="Price"
            required
            id="price"
            type="number"
            message="This field is required"
            placeholder="Product price"
            register={register}
            errors={errors}
          />
        </div>

        <div className="flex md:flex-row flex-col gap-4 w-full">
          <InputField
            label="Quantity"
            required
            id="quantity"
            type="number"
            message="This field is required"
            placeholder="Product quantity"
            register={register}
            errors={errors}
          />
        </div>

        <div className="flex md:flex-row flex-col gap-4 w-full">
          <InputField
            label="Discount"
            required
            id="discount"
            type="number"
            message="This field is required"
            placeholder="Product discount"
            register={register}
            errors={errors}
          />
        </div>

        <div className="flex md:flex-row flex-col gap-4 w-full">
          <InputField
            label="Special Price"
            required
            id="specialPrice"
            type="number"
            message="This field is required"
            placeholder="Product special price"
            register={register}
            errors={errors}
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="desc"
            className={`font-semibold text-sm text-slate-800`}
          >
            Description:
          </label>

          <textarea
            rows={5}
            placeholder="Add product description"
            className={`px-4 py-2 w-full border outline-none bg-transparent text-slate-800 rounded-md ${
              errors["description"]?.message
                ? "border-red-500"
                : "border-slate-700"
            }`}
            {...register("description", {
              required: {
                value: true,
                message: "Description is required*",
              },
            })}
          />
        </div>

        {errors["description"]?.message && (
          <p className="text-sm font-semibold text-red-600 mt-0">
            {errors["description"]?.message}
          </p>
        )}

        <div className="flex w-full justify-between items-center absolute bottom-14">
          <Button
            disabled={loader}
            onClick={() => setOpen(false)}
            variant="outlined"
            className="text-white py-2.5 px-4 text-sm font-medium"
          >
            Cancel
          </Button>

          <Button
            disabled={loader}
            type="submit"
            variant="contained"
            color="primary"
            className="bg-custom-blue text-white py-2.5 px-4 text-sm font-medium "
          >
            {loader ? <Spinners /> : "Update"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
