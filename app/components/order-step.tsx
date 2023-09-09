export default function OrderStep() {
  return (
    <section className="rounded-md py-6 px-8 bg-primary-300 w-full flex justify-center items-center flex-col md:py-16">
      <div className="w-full md:flex md:flex-col md:justify-center md:items-center">
        <h2 className="text-neutral-900 font-semibold text-2xl font-lora md:text-5xl">
          The Easy Way to Order
        </h2>
        <div className="mt-3">
          <div className="flex justify-center items-center space-x-4 w-fit">
            <div className="bg-primary-200 rounded-full w-10 h-10 p-3 flex justify-center items-center">
              <span className="font-semibold font-ubuntu text-base">1</span>
            </div>
            <span className="font-ubuntu font-normal text-base text-left text-neutral-900">
              Select Product
            </span>
          </div>
          <div className="flex justify-center items-center space-x-4 w-fit">
            <div className="bg-primary-200 rounded-full w-10 h-10 p-3 flex justify-center items-center">
              <span className="font-semibold font-ubuntu text-base">2</span>
            </div>
            <span className="font-ubuntu font-normal text-base text-left text-neutral-900">
              Login/Register
            </span>
          </div>
          <div className="bg-primary-200 rounded-full w-10 h-10 p-3 flex justify-center items-center">
            <div className="flex justify-center items-center space-x-4 w-fit">
              <span className="font-semibold font-ubuntu text-base">3</span>
            </div>
            <span className="font-ubuntu font-normal text-base text-left text-neutral-900">
              Shopping bag
            </span>
          </div>
          <div className="flex justify-center items-center space-x-4 w-fit">
            <div className="bg-primary-200 rounded-full w-10 h-10 p-3 flex justify-center items-center">
              <span className="font-semibold font-ubuntu text-base">4</span>
            </div>
            <span className="font-ubuntu font-normal text-base text-left text-neutral-900">
              Payment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
