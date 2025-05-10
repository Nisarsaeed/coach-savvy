"use client";
import React from "react";
import useFetchCategories from "@/hooks/useFetchCategories";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function CatPage() {
  const { categories, isCatLoading } = useFetchCategories();
  if (isCatLoading) return <p>Loading categories...</p>;
  const filteredCategories = categories?.filter(
    (category) => category.name !== "All"
  );

  const addNewCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = {
      name: formData.get("name"),
    };
    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!response.ok) throw new Error("Failed to add product");
      alert("Category added successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Error adding category: " + error.message);
    }
  };

  const handleDelete = async (id) =>
    await fetch(`/api/categories/${id}`, { method: "DELETE" });
  return (
    <div className="h-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
        <Dialog className="!text-primary overflow-auto max-h-[80vh]">
          <DialogTrigger asChild>
            <Button
              className={
                "bg-accentPurple text-primary hover:bg-accentPurple/70"
              }
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>Fill in the name below</DialogDescription>
            </DialogHeader>
            <form className="grid gap-6 py-2" onSubmit={addNewCategory}>
              <Input
                id="name"
                name="name"
                placeholder="Category name"
                required
              />
              <Button type="submit" className="w-full" variant="destructive">
                Add Category
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto mt-10 ">
        <table className="w-full text-sm bg-gray-100 rounded-lg">
          <thead className="divide-y divide-gray-400">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                Name
              </th>
              <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 text-right">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {filteredCategories?.map((item) => (
              <tr
                key={item._id}
                className=" hover:bg-gray-200 dark:bg-gray-950 dark:hover:bg-gray-900"
              >
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                  {item.name}
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
      <div className="text-red-500 font-semibold text-lg mt-5">
        Note: before deleting any category you must have to delete all of the
        products in that category.
      </div>
    </div>
  );
}

export default CatPage;
