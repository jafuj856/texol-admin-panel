import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiService } from "./axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = apiService.post("auth/login", payload);
      return response;
    },
  });
};

export const useGetProducts = (
  search = "",
  category = "",
  minPrice = "",
  maxPrice = ""
) => {
  return useQuery({
    queryKey: ["getProduct", search, category, minPrice, maxPrice],
    queryFn: async () => {
      const res = await apiService.get(
        `/products?search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      return res;
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload) => {
      const res = await apiService.put("/products/updateById", payload);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getProduct"] });
    },
  });
};
