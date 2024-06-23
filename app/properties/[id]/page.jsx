"use client";

import { useRouter } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl">Detail Page</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 p-3 rounded-md"
      >
        Go Home
      </button>
    </div>
  );
};

export default PropertyPage;
