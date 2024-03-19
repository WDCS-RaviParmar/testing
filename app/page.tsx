import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="mt-10">
        <button>
          <Link className="bg-slate-500 m-3 px-5 py-2" href="/admin">
            Admin
          </Link>
          <Link className="bg-slate-500 m-3 px-5 py-2" href="/user">
            User
          </Link>
        </button>
      </div>
    </>
  );
}
