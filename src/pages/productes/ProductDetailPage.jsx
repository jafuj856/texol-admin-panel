import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import ImageCarousel from "../../components/images/ImageCarousel";
import { useDeleteProduct } from "../../api/useApiCall";
import { toast } from "react-toastify";

function ProductDetailPage() {
  // name, price, category, stock, description;
  const navigate = useNavigate();
  const product = useLocation()?.state?.product;
  const { mutate, isPending } = useDeleteProduct();
  console.log(product);
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    console.log(confirmDelete);

    if (confirmDelete) {
      mutate(product?._id, {
        onSuccess: (data) => {
          console.log(data);
          toast.success("product deleted successfully");
          navigate("/");
        },
      });
    }
  };
  return (
    <div className="flex items-start gap-5  flex-col md:flex-row ">
      {/* 1111 */}
      <div className="w-full md:max-w-[70%] p-4 bg-white shadow-md rounded-md border border-black/10 text-wrap break-words">
        <div className="w-full flex items-center justify-center">
          <ImageCarousel images={product?.images} />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <h1 className="font-semibold text-lg">{product?.name}</h1>
          <p className="text-md font-semibold ">$ {product?.price}</p>
          <p>Category : {product.category}</p>
          <p className="text-xs md:text-sm ">
            Available Stock :{product?.stock}
          </p>
          <p className="font-semibold text-sm">Descrption</p>
          <pre className="text-gray-600 leading-relaxed text-sm text-wrap font-instrument">
            {product?.description}
          </pre>
        </div>
      </div>
      {/* 222 */}
      <div className="w-full md:max-w-[30%]">
        <div className=" bg-white shadow border border-black/10 p-4">
          <p className="text-xs text-red-500 text-center">
            You can edit or delete this product is permanent.
          </p>
          <div className="flex gap-2 w-full mt-4 ">
            <button
              className="w-full bg-green-500 text-white rounded-md p-2 text-sm font-medium hover:bg-green-600 transition"
              onClick={() =>
                navigate("/add-product", { state: { product, mode: "update" } })
              }
            >
              Edit
            </button>

            <button
              className="w-full bg-red-500 text-white rounded-md p-2 text-sm font-medium hover:bg-red-600 transition"
              onClick={() => handleDelete(product._id)}
            >
              {isPending ? "loading...." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
