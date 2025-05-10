"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaShoppingCart, FaTrashAlt, FaMinus, FaPlus, FaArrowRight, FaSave, FaTag, FaUndo } from "react-icons/fa";

// Define color variables
const colors = {
  background: "hsla(233, 100%, 5%, 1)", // The background color you specified
  accentPurple: "#6617CB",
  accentBlue: "#01062D",
  textLight: "#e2e2e2",
  textDim: "#9ca3af",
  cardBg: "#0a0d24",
  borderColor: "#2c2c4a"
};

export default function CartPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [savedForLater, setSavedForLater] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  // Function to increment quantity
  const incrementQuantity = (itemId) => {
    setIsUpdating(true);
    setTimeout(() => {
      dispatch({
        type: "cart/updateQuantity",
        payload: { id: itemId, quantity: 1, action: "increment" }
      });
      setIsUpdating(false);
    }, 300); // Simulate network request
  };

  // Function to decrement quantity
  const decrementQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      setIsUpdating(true);
      setTimeout(() => {
        dispatch({
          type: "cart/updateQuantity",
          payload: { id: itemId, quantity: 1, action: "decrement" }
        });
        setIsUpdating(false);
      }, 300); // Simulate network request
    }
  };

  // Function to remove item from cart
  const removeItem = (itemId) => {
    setIsUpdating(true);
    setTimeout(() => {
      dispatch({
        type: "cart/removeItem",
        payload: { id: itemId }
      });
      setIsUpdating(false);
    }, 300); // Simulate network request
  };

  // Function to save item for later
  const saveForLater = (item) => {
    setSavedForLater([...savedForLater, item]);
    removeItem(item.id);
  };

  // Function to move item back to cart
  const moveToCart = (item, index) => {
    dispatch({
      type: "cart/addItem",
      payload: { ...item, quantity: 1 }
    });
    
    const updatedSavedItems = [...savedForLater];
    updatedSavedItems.splice(index, 1);
    setSavedForLater(updatedSavedItems);
  };

  // Function to apply promo code
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setPromoApplied(true);
      setDiscount(totalAmount * 0.1); // 10% discount
    } else {
      alert("Invalid promo code");
    }
  };

  // Function to remove promo code
  const removePromoCode = () => {
    setPromoApplied(false);
    setDiscount(0);
    setPromoCode("");
  };

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen" style={{ backgroundColor: colors.background }}>
        <div className="text-center p-6 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
          <div className="animate-pulse mb-3">
            <div className="h-8 w-8 mx-auto rounded-full" style={{ backgroundColor: colors.accentPurple }}></div>
          </div>
          <p className="text-xl font-medium" style={{ color: colors.textLight }}>Loading your cart...</p>
        </div>
      </div>
    );
  }

  // Calculate final amounts
  const subtotal = totalAmount;
  const tax = subtotal * 0.0825;
  const finalTotal = subtotal + tax - discount;

  if (items.length === 0 && savedForLater.length === 0) {
    return (
      <div className="min-h-screen w-full px-4 py-12" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-16 rounded-2xl border" 
            style={{ backgroundColor: colors.cardBg, borderColor: colors.borderColor }}>
            <FaShoppingCart size={48} style={{ color: colors.textDim }} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2" style={{ color: colors.textLight }}>Your cart is empty</h2>
            <p className="mb-6" style={{ color: colors.textDim }}>Looks like you haven't added any items to your cart yet.</p>
            <button 
              onClick={() => router.push("/products")}
              className="px-6 py-3 rounded-full font-medium transition-colors duration-200"
              style={{ backgroundColor: colors.accentPurple, color: colors.textLight }}
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-4 py-10" style={{ backgroundColor: colors.background }}>
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 p-6 rounded-xl" 
          style={{ backgroundColor: colors.cardBg, borderColor: colors.borderColor }}>
          <h1 className="text-3xl font-bold mb-4 md:mb-0" style={{ color: colors.textLight }}>
            Shopping <span style={{ color: colors.accentPurple }}>Cart</span>
          </h1>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full" style={{ backgroundColor: `${colors.accentPurple}30` }}>
              <FaShoppingCart size={20} style={{ color: colors.accentPurple }} />
            </div>
            <span className="text-sm" style={{ color: colors.textDim }}>
              {totalQuantity} {totalQuantity === 1 ? "item" : "items"} in cart
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Cart Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Loading Overlay */}
            {isUpdating && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 rounded-xl">
                <div className="animate-spin h-10 w-10 border-4 border-t-transparent rounded-full" 
                  style={{ borderColor: `${colors.accentPurple} transparent ${colors.accentPurple} transparent` }}></div>
              </div>
            )}

            {/* Cart Items */}
            <div className="relative p-6 rounded-xl" style={{ backgroundColor: colors.cardBg }}>
              <h2 className="text-xl font-semibold mb-6" style={{ color: colors.textLight }}>Cart Items</h2>
              
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <p style={{ color: colors.textDim }}>Your cart is currently empty.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row md:items-center gap-4 p-4 border rounded-lg transition-colors"
                      style={{ borderColor: colors.borderColor, backgroundColor: `${colors.accentBlue}50` }}
                    >
                      <div className="rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: colors.cardBg }}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-medium text-lg mb-1" style={{ color: colors.textLight }}>{item.name}</h3>
                        <p className="text-sm mb-2" style={{ color: colors.textDim }}>
                          ${item.price.toFixed(2)} per license
                        </p>
                        
                        {/* Quantity Controls - Mobile */}
                        <div className="flex items-center justify-between gap-4 md:hidden mt-2">
                          <div className="flex items-center">
                            <button 
                              onClick={() => decrementQuantity(item.id, item.quantity)}
                              className="p-2 rounded-l-md"
                              style={{ backgroundColor: colors.borderColor }}
                              disabled={item.quantity <= 1}
                            >
                              <FaMinus size={12} style={{ color: item.quantity <= 1 ? colors.textDim : colors.textLight }} />
                            </button>
                            <div className="px-4 py-1 text-center w-12" style={{ backgroundColor: colors.cardBg, color: colors.textLight }}>
                              {item.quantity}
                            </div>
                            <button 
                              onClick={() => incrementQuantity(item.id)}
                              className="p-2 rounded-r-md"
                              style={{ backgroundColor: colors.borderColor }}
                            >
                              <FaPlus size={12} style={{ color: colors.textLight }} />
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-bold" style={{ color: colors.accentPurple }}>
                              ${(item.quantity * item.price).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Desktop Price and Controls */}
                      <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center">
                          <button 
                            onClick={() => decrementQuantity(item.id, item.quantity)}
                            className="p-2 rounded-l-md"
                            style={{ backgroundColor: colors.borderColor }}
                            disabled={item.quantity <= 1}
                          >
                            <FaMinus size={12} style={{ color: item.quantity <= 1 ? colors.textDim : colors.textLight }} />
                          </button>
                          <div className="px-4 py-1 text-center w-12" style={{ backgroundColor: colors.cardBg, color: colors.textLight }}>
                            {item.quantity}
                          </div>
                          <button 
                            onClick={() => incrementQuantity(item.id)}
                            className="p-2 rounded-r-md"
                            style={{ backgroundColor: colors.borderColor }}
                          >
                            <FaPlus size={12} style={{ color: colors.textLight }} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-right hidden md:block">
                        <p className="font-bold" style={{ color: colors.accentPurple }}>
                          ${(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-row md:flex-col gap-2 justify-end">
                        <button 
                          onClick={() => saveForLater(item)}
                          className="flex items-center justify-center p-2 rounded-md text-xs"
                          style={{ backgroundColor: colors.borderColor, color: colors.textLight }}
                        >
                          <FaSave className="mr-1" /> Save
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="flex items-center justify-center p-2 rounded-md text-xs"
                          style={{ backgroundColor: `${colors.accentPurple}30`, color: colors.accentPurple }}
                        >
                          <FaTrashAlt className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Saved For Later Section */}
            {savedForLater.length > 0 && (
              <div className="p-6 rounded-xl" style={{ backgroundColor: colors.cardBg }}>
                <h2 className="text-xl font-semibold mb-6" style={{ color: colors.textLight }}>Saved For Later</h2>
                <div className="space-y-4">
                  {savedForLater.map((item, index) => (
                    <div
                      key={`saved-${item.id}-${index}`}
                      className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg transition-colors"
                      style={{ borderColor: colors.borderColor, backgroundColor: `${colors.accentBlue}30` }}
                    >
                      <div className="rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: colors.cardBg }}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium" style={{ color: colors.textLight }}>{item.name}</h3>
                        <p className="text-sm" style={{ color: colors.textDim }}>
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => moveToCart(item, index)}
                          className="flex items-center justify-center p-2 rounded-md text-xs"
                          style={{ backgroundColor: colors.borderColor, color: colors.textLight }}
                        >
                          <FaUndo className="mr-1" /> Move to Cart
                        </button>
                        <button 
                          onClick={() => {
                            const updatedSavedItems = [...savedForLater];
                            updatedSavedItems.splice(index, 1);
                            setSavedForLater(updatedSavedItems);
                          }}
                          className="flex items-center justify-center p-2 rounded-md text-xs"
                          style={{ backgroundColor: `${colors.accentPurple}30`, color: colors.accentPurple }}
                        >
                          <FaTrashAlt className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-xl sticky top-20" style={{ backgroundColor: colors.cardBg }}>
              <h2 className="text-xl font-semibold mb-4 border-b pb-4" 
                style={{ color: colors.textLight, borderColor: colors.borderColor }}>
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between" style={{ color: colors.textDim }}>
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between" style={{ color: colors.textDim }}>
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                {promoApplied && (
                  <div className="flex justify-between text-green-400">
                    <span className="flex items-center">
                      <FaTag className="mr-1" /> Discount (10%)
                      <button 
                        onClick={removePromoCode}
                        className="ml-2 text-xs p-1 rounded"
                        style={{ backgroundColor: `${colors.accentPurple}30`, color: colors.accentPurple }}
                      >
                        Remove
                      </button>
                    </span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
              </div>
              
              {/* Promo Code Input */}
              {!promoApplied && (
                <div className="mb-4 pb-4 border-b" style={{ borderColor: colors.borderColor }}>
                  <p className="text-sm mb-2" style={{ color: colors.textDim }}>Have a promo code?</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-grow p-2 rounded"
                      style={{ backgroundColor: colors.accentBlue, color: colors.textLight, borderColor: colors.borderColor }}
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-3 py-2 rounded text-sm"
                      style={{ backgroundColor: colors.borderColor, color: colors.textLight }}
                      disabled={!promoCode}
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs mt-1" style={{ color: colors.accentPurple }}>Try "WELCOME10" for 10% off</p>
                </div>
              )}
              
              <div className="border-t border-b py-4" style={{ borderColor: colors.borderColor }}>
                <div className="flex justify-between font-bold text-lg">
                  <span style={{ color: colors.textLight }}>Total</span>
                  <span style={{ color: colors.accentPurple }}>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={() => router.push("/checkout")}
                  disabled={items.length === 0}
                  className="w-full py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                  style={{ 
                    backgroundColor: items.length === 0 ? colors.borderColor : colors.accentPurple, 
                    color: colors.textLight 
                  }}
                >
                  Proceed to Checkout <FaArrowRight className="ml-2" />
                </button>
                
                <button
                  onClick={() => router.push("/products")}
                  className="w-full mt-3 py-3 rounded-lg font-medium transition-colors duration-200"
                  style={{ backgroundColor: colors.borderColor, color: colors.textLight }}
                >
                  Continue Shopping
                </button>
              </div>
              
              <div className="mt-6 text-xs" style={{ color: colors.textDim }}>
                <p>
                  By proceeding to checkout, you agree to our Terms of Service and Privacy Policy.
                  All software licenses are subject to our License Agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}