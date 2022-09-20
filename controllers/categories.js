import Category from "../models/categories";
import Product from "../models/products";
export const listCategories = async (request, response) => {
    try {
        const categories = await Category.find({}).exec();
        response.status(200).json(categories);
    } catch (error) {
        response.status(400).json(error);
    }
};
export const listCategoriesDetail = async (request, response) => {
    try {
        const category = await Category.findById({ _id: request.params.id }).exec();
        const products = await Product.find();
        response.status(200).json(category);
    } catch (error) {
        response.status(400).json(error);
    }
};
export const createCategory = async (request, response) => {
    try {
        const category = await new Category(request.body).save();
        response.status(201).json(category);
    } catch (error) {
        response.status(400).json(error);
    }
};
export const deleteCategory = async (request, response) => {
    try {
        const category = await Category.findByIdAndDelete({ _id: request.params.id }).exec();
        response.status(200).json(category);
    } catch (error) {
        response.status(400).json(error);
    }
};
export const updateCategory = async (request, response) => {
    try {
        const category = await Category.findByIdAndUpdate({ _id: request.params.id }, request.body).exec();
        response.status(200).message("Sửa thành công").json(category);
    } catch (error) {
        response.status(400).json(error);
    }
};