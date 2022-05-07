import axiosInstance from '../config/axios';

class ProductService {
  static async list() {
    const response = await axiosInstance.get('/products');
    return response?.data || [];
  }
}

export default ProductService;
