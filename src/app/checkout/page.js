"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/store/cartSlice";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDinersClub,
  FaCcPaypal,
} from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";

import PaymentComponent from "@/components/PaymentBrainTree";
import Image from "next/image";
import EmptyCart from "@/components/EmptyCart";

// Define color variables
const colors = {
  background: "hsla(233, 100%, 5%, 1)", // The background color you specified
  accentPurple: "#6617CB",
  accentBlue: "#01062D",
  textLight: "#e2e2e2",
  textDim: "#9ca3af",
  cardBg: "#121740",
  borderColor: "#2c2c4a",
};

export default function CheckoutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  console.log(items)
  const dispatch = useDispatch();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handlePaymentCompleted = async () => {
    setShowSuccessModal(true);
    let productNames = []

    for(let i=0; i<items.length;i++){
      productNames.push(items[i].name)
    }

    const orderDetails = {
      userName: session?.user?.name,
      email: session?.user?.email,
      price: totalAmount,
      productName: productNames
        
      }
      const res = await fetch('/api/discord',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails)
        
      })
    }

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    dispatch(clearCart());
    router.push('/products')
  };

  if (status === "loading") {
    return (
      <div
        className="flex items-center justify-center h-screen"
        style={{ backgroundColor: colors.background }}
      >
        <div
          className="text-center p-6 rounded-lg"
          style={{ backgroundColor: colors.cardBg }}
        >
          <div className="animate-pulse mb-3">
            <div
              className="h-8 w-8 mx-auto rounded-full"
              style={{ backgroundColor: colors.accentPurple }}
            ></div>
          </div>
          <p
            className="text-xl font-medium"
            style={{ color: colors.textLight }}
          >
            Verifying your account...
          </p>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div
      className="min-h-screen w-full px-4 py-10"
      style={{ backgroundColor: colors.background }}
    >
      <div className="w-full max-w-screen-2xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row items-center justify-between mb-8 p-6 rounded-xl"
          style={{
            backgroundColor: colors.cardBg,
            borderColor: colors.borderColor,
          }}
        >
          <span
            className="text-neutral-50 cursor-pointer"
            onClick={() => router.push("/products")}
          >
            <TbArrowBack size={30} />
            Back
          </span>
          <h1
            className="text-3xl font-bold mb-4 md:mb-0"
            style={{ color: colors.textLight }}
          >
            <span style={{ color: colors.accentPurple }}>Secure</span> Checkout
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-sm" style={{ color: colors.textDim }}>
              Welcome,{" "}
              <strong style={{ color: colors.textLight }}>
                {session?.user?.name}
              </strong>
            </span>
            <div
              className="p-2 rounded-full"
              style={{ backgroundColor: `${colors.accentPurple}30` }}
            >
              <img
                alt="user avatar"
                height={30}
                width={30}
                src={session?.user?.image}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Items */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: colors.cardBg }}
            >
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: colors.textLight }}
              >
                Order Items
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border rounded-lg transition-colors"
                    style={{
                      borderColor: colors.borderColor,
                      backgroundColor: `${colors.accentBlue}50`,
                    }}
                  >
                    <div
                      className="rounded-lg p-2 flex-shrink-0"
                      style={{ backgroundColor: colors.cardBg }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3
                        className="font-medium"
                        style={{ color: colors.textLight }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-sm" style={{ color: colors.textDim }}>
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className="font-bold"
                        style={{ color: colors.accentPurple }}
                      >
                        ${(item.quantity * item.price).toFixed(2)}
                      </p>
                      <p className="text-xs" style={{ color: colors.textDim }}>
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Component Container */}
            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: colors.cardBg }}
            >
              <h2
                className="text-xl font-semibold mb-4 flex items-center"
                style={{ color: colors.textLight }}
              >
                <FaLock
                  className="mr-2"
                  style={{ color: colors.accentPurple }}
                />{" "}
                Secure Payment
              </h2>
              <div
                className="p-4 rounded-lg mb-4"
                style={{ backgroundColor: colors.accentBlue }}
              >
                <p className="text-sm" style={{ color: colors.textDim }}>
                  Your payment information is encrypted and secure. We never
                  store your card details.
                </p>
              </div>
              <PaymentComponent
                amount={totalAmount}
                onPaymentCompleted={handlePaymentCompleted}
              />
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div
              className="p-6 rounded-xl sticky top-20"
              style={{ backgroundColor: colors.cardBg }}
            >
              <h2
                className="text-xl font-semibold mb-4 border-b pb-4"
                style={{
                  color: colors.textLight,
                  borderColor: colors.borderColor,
                }}
              >
                Order Summary
              </h2>

              <div className="space-y-3 mb-4">
                <div
                  className="flex justify-between"
                  style={{ color: colors.textDim }}
                >
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div
                  className="flex justify-between"
                  style={{ color: colors.textDim }}
                >
                  <span>Software License</span>
                  <span style={{ color: "#22c55e" }}>Included</span>
                </div>
                <div
                  className="flex justify-between"
                  style={{ color: colors.textDim }}
                >
                  <span>Tax</span>
                  <span>$0</span>
                </div>
              </div>

              <div
                className="border-t border-b py-4 mt-4"
                style={{ borderColor: colors.borderColor }}
              >
                <div className="flex justify-between font-bold text-lg">
                  <span style={{ color: colors.textLight }}>Total</span>
                  <span className="text-primary">
                    ${(totalAmount + totalAmount * 0.0825).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: `${colors.accentPurple}15`,
                    borderColor: `${colors.accentPurple}30`,
                  }}
                >
                  <div className="flex items-start">
                    <FaEnvelope
                      className="mr-3 mt-1"
                      size={20}
                      style={{ color: colors.accentPurple }}
                    />
                    <div>
                      <h3
                        className="font-medium mb-1"
                        style={{ color: colors.textLight }}
                      >
                        Digital Delivery
                      </h3>
                      <p className="text-sm" style={{ color: colors.textDim }}>
                        Your software license will be sent to your email
                        immediately after purchase
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm" style={{ color: colors.textDim }}>
                <p className="flex items-center mb-2">
                  <FaLock className="mr-2" style={{ color: "#22c55e" }} />{" "}
                  Secure checkout
                </p>
                <p>We accept:</p>
                <div className="flex gap-2 mt-2">
                  <FaCcMastercard size={40} />
                  <FaCcVisa size={40} />
                  <FaCcDinersClub size={40} />
                  <FaCcPaypal size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div
            className="rounded-xl p-6 max-w-md w-full animate-fadeIn"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="text-center mb-6">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: `${colors.accentPurple}30` }}
              >
                <FaCheckCircle
                  size={32}
                  style={{ color: colors.accentPurple }}
                />
              </div>
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: colors.textLight }}
              >
                Purchase Successful!
              </h2>
              <p style={{ color: colors.textDim }}>
                Thank you for your purchase. Your software license is being
                processed.
              </p>
            </div>

            <div
              className="p-4 rounded-lg mb-6"
              style={{ backgroundColor: colors.accentBlue }}
            >
              <div className="flex justify-between mb-2">
                <span style={{ color: colors.textDim }}>Order Number:</span>
                <span
                  className="font-semibold"
                  style={{ color: colors.textLight }}
                >
                  #ORD-
                  {Math.floor(Math.random() * 10000)
                    .toString()
                    .padStart(4, "0")}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: colors.textDim }}>Total Amount:</span>
                <span
                  className="font-semibold"
                  style={{ color: colors.textLight }}
                >
                  ${(totalAmount + totalAmount * 0.0825).toFixed(2)}
                </span>
              </div>
            </div>

            <div
              className="p-4 rounded-lg mb-6 border"
              style={{
                borderColor: `${colors.accentPurple}30`,
                backgroundColor: `${colors.accentPurple}15`,
              }}
            >
              <div className="flex items-start">
                <FaEnvelope
                  className="mr-3 mt-1"
                  style={{ color: colors.accentPurple }}
                />
                <div>
                  <h3
                    className="font-medium mb-1"
                    style={{ color: colors.textLight }}
                  >
                    Check Your Email
                  </h3>
                  <p className="text-sm" style={{ color: colors.textDim }}>
                    We&apos;ve sent your software license and receipt to your
                    email address. If you don&apos;t see it within a few
                    minutes, please check your spam folder.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={closeSuccessModal}
                className="py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                style={{
                  backgroundColor: colors.accentPurple,
                  color: colors.textLight,
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
