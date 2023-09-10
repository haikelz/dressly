import Layout from "./layout";

export default function OrderStep() {
  return (
    <Layout>
      <section className="rounded-md py-6 px-8 bg-primary-300 w-full flex justify-center items-center flex-col md:py-16">
        <div className="w-full md:flex md:flex-col flex-row md:justify-center items-center">
          <h2 className="text-neutral-900 text-center font-semibold text-2xl font-lora md:text-5xl">
            The Easy Way to Order
          </h2>
          <div className="flex flex-col mt-8 justify-center items-center w-full">
            <div className="flex flex-col relative md:flex-row items-start md:items-center justify-center w-fit">
              <div className="flex justify-center items-center space-x-4">
                <div className="bg-primary-200 rounded-full w-10 h-10 p-3 flex justify-center items-center">
                  <span className="font-semibold font-ubuntu text-base">1</span>
                </div>
                <span className="text-sm font-ubuntu md:hidden block font-normal tracking-wide">
                  Select Product
                </span>
              </div>
              <div className="w-0 ml-5 md:ml-0 md:w-24 h-10 md:h-0 border-primary-700 border-r-2 md:border-r-0 md:border-t-2 border-dotted"></div>
              <div className="flex justify-center items-center space-x-4 md:space-x-0">
                <div className="bg-primary-200 rounded-full w-10 h-10 p-3 flex justify-center items-center">
                  <span className="font-semibold font-ubuntu text-base">2</span>
                </div>
                <span className="text-sm font-ubuntu md:hidden block font-normal tracking-wide">
                  Login/Register
                </span>
              </div>
              <div className="w-0 ml-5 md:ml-0 md:w-24 h-10 md:h-0 border-primary-700 border-r-2 md:border-r-0 md:border-t-2 border-dotted"></div>
              <div className="flex justify-center items-center space-x-4">
                <div className="bg-primary-200 rounded-full w-10 h-10 p-3 flex flex-col justify-center items-center">
                  <span className="font-semibold font-ubuntu text-base">3</span>
                </div>
                <span className="text-sm font-ubuntu md:hidden block font-normal tracking-wide">
                  Shopping bag
                </span>
              </div>
              <div className="w-0 ml-5 md:ml-0 md:w-24 h-10 md:h-0 border-primary-700 border-r-2 md:border-r-0 md:border-t-2 border-dotted"></div>
              <div className="flex md:block justify-center w-fit items-center space-x-4 md:space-x-0">
                <div className="bg-primary-200 rounded-full w-10 h-10 p-3 flex flex-row md:flex-col justify-center items-center">
                  <span className="font-semibold font-ubuntu text-base">4</span>
                </div>
                <span className="text-sm font-ubuntu md:hidden block font-normal tracking-wide">
                  Payment
                </span>
              </div>
            </div>
            <div className="md:flex text-sm font-ubuntu font-normal tracking-wide text-center mt-4 hidden w-[500px] justify-between">
              <span className="-translate-x-1">Select Product</span>
              <span className="-translate-x-4">Login/Register</span>
              <span className="-translate-x-5">Shopping bag</span>
              <span className="-translate-x-4">Payment</span>
            </div>
            <div className="flex space-x-4 md:space-x-0 justify-center md:flex-col flex-row items-center"></div>
            <div className="flex flex-row md:flex-col justify-center items-center space-x-4 md:space-x-0 w-fit"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
