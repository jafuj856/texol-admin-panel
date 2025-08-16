import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../../utils/Validation/validation";

export default function AddProductForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

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
          className="border p-2 w-full rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <p>Descrption</p>
        <textarea
          placeholder="Description"
          {...register("description")}
          className="border p-2 w-full rounded"
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
          className="border p-2 w-full rounded"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>
      <div className="">
        <p>Category</p>
        <input
          type="text"
          placeholder="Category"
          {...register("category")}
          className="border p-2 w-full rounded"
        />
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
          className="border p-2 w-full rounded"
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
          className="border p-2 w-full rounded"
        />
        {errors.images && (
          <p className="text-red-500">{errors.images.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-buttonColor w-full flex items-center justify-center text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
}
