import Category from "../models/categoryModel.js"

export const createCategory = async (data) => {
  return await Category.create(data)
}

export const getCategories = async () => {
  return await Category.find()
}