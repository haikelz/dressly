import Layout from "./layout";

export default function TopSelections() {
  return (
    <Layout>
      <section className="w-full py-8 md:py-20">
        <div className="w-full flex justify-start items-start flex-col">
          <h2 className="text-neutral-900 text-2xl text-start font-semibold font-lora md:text-5xl">
            Top Selections
          </h2>
          <div className="flex mt-6 flex-col sm:overflow-x-auto sm:flex-row w-full space-y-6 sm:space-y-0 sm:space-x-6">
            <div className="w-full relative flex flex-col justify-center items-center">
              <img
                className="sm:w-full min-w-full sm:min-w-[343px] h-auto max-w-full"
                src="/elegant-eid-attire.png"
                alt="elegant eid attire"
              />
              <span className="absolute text-neutral-100 left-16 font-semibold text-[26.41px] bottom-10 font-lora">
                Elegant Eid Attire
              </span>
            </div>
            <div className="w-full relative flex-col flex items-center justify-center">
              <img
                className="sm:w-full min-w-full sm:min-w-[343px] h-auto max-w-full"
                src="/accessory.png"
                alt="accessory"
              />
              <span className="absolute text-neutral-100 font-semibold text-[23.17px] left-12 bottom-12 font-lora">
                Accessory Essentials
              </span>
            </div>
            <div className="w-full relative flex-col flex items-center justify-center">
              <img
                className="sm:w-full min-w-full sm:min-w-[343px] h-auto max-w-full"
                src="/shoes.png"
                alt="everyday shoes"
              />
              <span className="absolute text-neutral-100 font-semibold text-[23.17px] bottom-12 left-26 font-lora">
                Everyday Shoes
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
