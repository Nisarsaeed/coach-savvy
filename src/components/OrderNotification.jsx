"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const OrderNotification = () => {
  const dummyUsers = [
    { name: "Alice", country: "USA" },
    { name: "Bob", country: "UK" },
    { name: "Charlie", country: "Canada" },
    { name: "David", country: "Australia" },
    { name: "Eva", country: "Germany" },
    { name: "Frank", country: "France" },
    { name: "Grace", country: "India" },
    { name: "Hannah", country: "Italy" },
    { name: "Ivy", country: "Japan" },
    { name: "Jack", country: "Brazil" },
  ];

  const [index, setIndex] = useState(0);
  const {toast} = useToast()

  useEffect(() => {
    const showToast = () => {
      const user = dummyUsers[index];
      toast({
        title: "Order Placed",
        description: `${user.name} from ${user.country} has just placed an order.`,
      });

      // Update index for the next user
      setIndex((prevIndex) => (prevIndex + 1) % dummyUsers.length);
    };

    // Show the first toast after 10 seconds
    const firstToastTimer = setTimeout(showToast, 10000);

    // Show subsequent toasts every 10-15 seconds
    const interval = setInterval(showToast, 30000);

    return () => {
      clearTimeout(firstToastTimer);
      clearInterval(interval);
    };
  }, [index, dummyUsers]);

  return null; // No UI needed for this component
};

export default OrderNotification;
