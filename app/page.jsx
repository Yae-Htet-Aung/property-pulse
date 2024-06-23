import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl mb-5">Welcome</h1>
      <Link href="/properties/123" className="px-5 py-3 bg-blue-500">
        Go to property
      </Link>
    </div>
  );
};

export default page;
