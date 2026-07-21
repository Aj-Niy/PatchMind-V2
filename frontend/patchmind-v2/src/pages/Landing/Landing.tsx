import Navbar from "../../components/layout/Navbar";
import AuthPanel from "./sections/AuthPanel";
import ProductShowcase from "./sections/ProductShowcase";

export default function Landing() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl px-8">
        <AuthPanel />
        <ProductShowcase />
      </main>
    </>
  );
}