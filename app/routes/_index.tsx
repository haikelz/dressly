import Banner from "~/components/banner";
import BestSellers from "~/components/best-sellers";
import BrandsList from "~/components/brands-list";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Newsletter from "~/components/newsletter";
import OrderStep from "~/components/order-step";
import TopSelections from "~/components/top-selections";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  console.log(
    "This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
  );
  return {
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export default function Index() {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <main className="flex justify-center items-center max-w-7xl flex-col w-full p-4">
        <Navbar />
        <Banner />
        <BrandsList />
        <TopSelections />
        <BestSellers />
        <OrderStep />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
