import Layout from "./layout";

export default function BrandsList() {
  return (
    <Layout>
      <section className="py-8 md:py-16 w-full">
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2 items-center">
          <div className="flex justify-between sm:justify-evenly md:justify-center md:space-x-3 p-4 items-center w-full">
            <img src="/berluti-logo.svg" alt="berluti" />
            <img src="/gucci-logo.svg" alt="gucci" />
          </div>
          <div className="flex justify-between sm:justify-evenly md:justify-center md:space-x-3 p-4 items-center w-full">
            <img src="/jimmy-logo.svg" alt="jimmy" />
            <img src="/burberry-logo.svg" alt="burberry" />
          </div>
          <div className="flex justify-between sm:justify-evenly md:justify-center md:space-x-3 p-4 items-center w-full">
            <img src="/balenciaga-logo.svg" alt="balenciaga" />
            <img src="/louis-logo.svg" alt="louis" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
