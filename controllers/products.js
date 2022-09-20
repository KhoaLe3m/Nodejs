import Product from "../models/products";
export const listProduct = async (request, response) => {
    try {
        const products = await Product.find({}).exec();
        response.status(200).json(products);
    } catch (error) {
        response.status(400).json({
        });
    }
};
export const listProductDetail =async (request, response) => {
    try {
        const product = await Product.findById({_id:request.params.id}).exec();
        response.status(200).json(product);
    } catch (error) {
        response.status(400).json({ message: "Không thể lấy sản phẩm", });
    }
};
export const createProduct = async (request, response) => {
    try {
        const product = await new Product(request.body).save();
        response.status(201).json(product);
    } catch (error) {
        response.status(400).json({
            message: "Không thể thêm sản phẩm"
        });
    }
    // response.json(products);
};
export const deleteProduct = async (request, response) => {
    try {
        const product = await Product.findByIdAndDelete({_id:request.params.id}).exec();
        response.status(200).json(product);
    } catch (error) {
        response.status(400).json({
            message: "Không thể xóa sản phẩm"
        });
    }
};
export const updateProduct = async (request, response) => {
    try {
        const product = await Product.findByIdAndUpdate({_id:request.params.id},request.body).exec();
        response.status(200).json(product);
    } catch (error) {
        response.status(400).json({
            message: "Không thể sửa sản phẩm"
        });
    }
};