"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const name = searchParams.get("who");

  console.log("Hello, id is", id);
  console.log("Name is", name);
  console.log("Path name is", pathName);
  return (
    <div>
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
