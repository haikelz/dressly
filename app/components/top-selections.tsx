export default function TopSelections() {
  return (
    <section className="w-full py-8 md:py-20">
      <div>
        <h2 className="text-neutral-900 text-2xl font-semibold font-lora md:text-5xl">
          Top Selections
        </h2>
        <div className="flex my-6 flex-col md:flex-row justify-center w-full items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="relative">
            <img src="/elegant-eid-attire.png" alt="elegant eid attire" />
          </div>
          <div className="relative">
            <img src="/accessory.png" alt="accessory" />
          </div>
          <div className="relative">
            <img src="/shoes.png" alt="everyday shoes" />
          </div>
        </div>
      </div>
    </section>
  );
}
