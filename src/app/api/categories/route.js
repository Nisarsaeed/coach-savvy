import Category from '@/models/Category';
import dbConnect from '@/config/connectDB';

export async function POST(req) {
  await dbConnect();

  try {
    const { name } = await req.json();
    const category = new Category({ name });
    await category.save();

    return new Response(JSON.stringify({ success: true, category }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to create category' }), { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();

    const categories = await Category.find();

    return new Response(JSON.stringify( categories ), {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return new Response(JSON.stringify({ message: 'Error fetching categories' }), {
      status: 500,
    });
  }
}

