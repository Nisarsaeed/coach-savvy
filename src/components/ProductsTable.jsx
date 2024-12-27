"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/store/productsSlice";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ProductsTable = () => {
  const [categories, setCategories] = useState(null);
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  

  const addNewProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const productData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price")),
      category: formData.get("category"),
      image: formData.get("image"),
    };
    console.log(productData,'form')
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!response.ok) throw new Error("Failed to add product");
      alert("Product added successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Error adding product: " + error.message);
    }
  };
  const handleDelete = async (id) =>
    await fetch(`/api/products/${id}`, { method: "DELETE" });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories", { method: "GET" });
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();

        // Assuming the API returns an object with a `categories` field
        if (Array.isArray(data.categories)) {
          setCategories(data.categories); // Extract the array
        } else {
          throw new Error("Unexpected API response structure");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status, addNewProduct]);
  if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Failed to load products.</p>;
  const filteredCategories = categories?.filter(
    (category) => category.name !== "All"
  );
  console.log(filteredCategories)

  return (
    <div className="space-y-6 ">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <Dialog className="!text-primary overflow-auto max-h-[80vh]">
          <DialogTrigger asChild>
            <Button
              className={
                "bg-accentPurple text-primary hover:bg-accentPurple/70"
              }
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription className="text-primary">
                Fill in the details for the new product.
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-6 py-2" onSubmit={addNewProduct}>
              <Input
                id="name"
                name="name"
                placeholder="Product name"
                required
              />
              <Input
                id="description"
                name="description"
                placeholder="Short product description"
                required
              />
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="99.99"
                required
              />
              <Select id="category" name="category">
                <SelectTrigger className="bg-primary">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {filteredCategories?.map((cat) => ( 
                      <SelectItem key={cat?._id} value={cat?._id}>
                        {cat?.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Input
                id="image"
                name="image"
                type="url"
                placeholder="Image URL"
                required
              />
              <Button type="submit" className="w-full" variant="destructive">
                Add Product
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input placeholder="Search products..." className="pl-8" />
        </div>
      </div>

      <div className="rounded-md border border-gray-200 dark:border-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                  Image
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                  Name
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                  Price
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                  Category
                </th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 dark:text-gray-400">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {products.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900"
                >
                  <td className="px-4">
                    <Image
                      alt={"product thumb"}
                      width={50}
                      height={50}
                      src={item?.image}
                    />
                  </td>
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                    £{item.price}
                  </td>
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                    { categories?.find(cat => cat?._id === item?.category)?.name }
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleDelete(item._id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
