import Product from '@/models/Product';
import dbConnect from '@/config/connectDB';

export async function POST(req) {
  await dbConnect();
  
  try {
    const { name, description, price, category, image } = await req.json();
    const product = new Product({ name, description, price, category, image });
    await product.save();

    return new Response(JSON.stringify({ success: true, product }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to create product' }), { status: 500 });
  }
}

export async function GET() {
    try {
      await dbConnect();
  
      const products = await Product.find();
  
      return new Response(JSON.stringify({ products }), {
        status: 200,
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      return new Response(JSON.stringify({ message: 'Error fetching products' }), {
        status: 500,
      });
    }
  }

  