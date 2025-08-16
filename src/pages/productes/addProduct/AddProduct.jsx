import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addProductSchema,
  editProductSchema,
} from "../../../utils/Validation/validation";
import { useAddProduct, useUpdateProduct } from "../../../api/useApiCall";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddProductForm() {
  const navigate = useNavigate();
  const initialData = useLocation()?.state?.product ?? {};
  const mode = useLocation()?.state?.mode ?? "add";
  const { mutate, isPending } = useAddProduct();
  const { mutate: updateProduct, isPending: updating } = useUpdateProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(
      mode === "add" ? addProductSchema : editProductSchema
    ),
    defaultValues: initialData,
  });
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("stock", data.stock);

    if (mode === "add") {
      if (data.images && data.images.length > 0) {
        Array.from(data.images).forEach((file) => {
          formData.append("images", file);
        });
      }
    } else {
      formData.append("id", initialData._id);
      if (data.images && data.images.length > 0) {
        if (data.images[0] instanceof File) {
          Array.from(data.images).forEach((file) => {
            formData.append("images", file);
          });
        } else {
          initialData.images?.forEach((url) => {
            formData.append("images", url);
          });
        }
      }
    }

    if (mode === "add") {
      mutate(formData, {
        onSuccess: () => {
          toast.success("Product added successfully");
          reset();
          navigate("/");
        },
      });
    } else {
      updateProduct(formData, {
        onSuccess: () => {
          toast.success("Product updated successfully");
          reset();
          navigate("/"); // redirect after edit
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-white shadow-md font-instrument max-w-lg mx-auto space-y-4 border border-black/20 rounded-lg"
    >
      <h1 className="text-buttonColor text-center text-2xl font-bold mt-2 mb-3">
        Add product
      </h1>
      <div>
        <p className="">Product name</p>
        <input
          type="text"
          placeholder="Product Name"
          {...register("name")}
          className="border p-2 w-full rounded md:h-10 h-8"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <p>Descrption</p>
        <textarea
          placeholder="Description"
          {...register("description")}
          className="border p-2 w-full rounded "
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div>
        <p>Price</p>
        <input
          type="number"
          onWheel={(e) => e.currentTarget.blur()}
          placeholder="Price"
          {...register("price", { valueAsNumber: true })}
          className="border p-2 w-full rounded md:h-10 h-8"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>
      <div className="">
        <p>Category</p>
        <select
          {...register("category")}
          className="border p-2 w-full rounded md:h-10 h-8"
          id=""
        >
          <option value="" disabled selected>
            select category
          </option>
          <option value="cosmetics">cosmetics</option>
          <option value="electronics">Electronics</option>
        </select>
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div>
        <p>Stock</p>
        <input
          type="number"
          onWheel={(e) => e.currentTarget.blur()}
          placeholder="Stock"
          {...register("stock", { valueAsNumber: true })}
          className="border p-2 w-full rounded md:h-10 h-8"
        />
        {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}
      </div>

      {/* File Upload */}
      <div>
        <p className="">
          Upload image{" "}
          <span className="text-red-500 text-xs">
            (you can select multiple images 5)
          </span>
        </p>

        <input
          type="file"
          multiple
          {...register("images")}
          className="border p-2 w-full rounded md:h-10 h-8"
        />
        {errors.images && (
          <p className="text-red-500">{errors.images.message}</p>
        )}
      </div>
      <button
        disabled={isPending || updating}
        type="submit"
        className="bg-buttonColor w-full flex items-center justify-center text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {isPending || updating ? "Laoding..." : " Add Product"}
      </button>
    </form>
  );
}
