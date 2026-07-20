import Navbar from "../../components/layout/Navbar";
import AuthPanel from "./sections/AuthPanel";
import ProductShowcase from "./sections/ProductShowcase";

export default function Landing() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl py-12">
        <div className="flex w-full">
          <AuthPanel />
          <ProductShowcase />
        </div>
      </main>
    </>
  );
}