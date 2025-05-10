import { redirect } from "next/navigation"
import { FaShoppingCart } from "react-icons/fa"

function EmptyCart() {
  return (
    <div className="min-h-screen w-full px-4 py-12" >
        <div className="text-center py-16 rounded-2xl border bg-accentBlue" >
          <FaShoppingCart size={48}  className="mx-auto mb-4 text-neutral-400" />
          <h2 className="text-2xl font-bold mb-2 text-primary">Your cart is empty</h2>
          <p className="mb-6 text-neutral-400" >Looks like you haven't added any items to your cart yet.</p>
          <button 
            onClick={() => redirect("/products")}
            className="px-6 py-3 rounded-full font-medium transition-colors duration-200 bg-accentPurple text-primary"
            
          >
            Continue Shopping
          </button>
        </div>
      </div>
  )
}

export default EmptyCart