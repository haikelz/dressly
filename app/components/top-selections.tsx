import Layout from "./layout";

export default function TopSelections() {
  return (
    <Layout>
      <section className="w-full py-8 md:py-20">
        <div className="w-full flex justify-center sm:justify-start sm:items-start items-center flex-col">
          <h2 className="text-neutral-900 text-2xl font-semibold font-lora md:text-5xl">
            Top Selections
          </h2>
          <div className="flex mt-6 flex-col sm:overflow-x-auto sm:flex-row w-full space-y-6 sm:space-y-0 sm:space-x-6">
            <div className="w-full">
              <img
                className="sm:w-full min-w-full sm:min-w-[343px] h-auto max-w-full"
                src="/elegant-eid-attire.png"
                alt="elegant eid attire"
              />
            </div>
            <div className="w-full">
              <img
                className="sm:w-full min-w-full sm:min-w-[343px] h-auto max-w-full"
                src="/accessory.png"
                alt="accessory"
              />
            </div>
            <div className="w-full">
              <img
                className="sm:w-full min-w-full sm:min-w-[343px] h-auto max-w-full"
                src="/shoes.png"
                alt="everyday shoes"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
