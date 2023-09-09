export default function BestSellers() {
  return (
    <section className="w-full py-8 md:py-20">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-lora font-semibold text-2xl md:text-5xl leading-relaxed text-neutral-900">
          Bestsellers
        </h2>
        <span
          role="button"
          className="text-neutral-900 bg-primary-500 py-2 px-4 rounded-md text-sm font-semibold font-ubuntu leading-relaxed"
        >
          See All
        </span>
      </div>
      <div className="flex space-x-4 overflow-x-auto w-full md:overflow-x-visible mt-4">
        <div className="p-2 w-full rounded-md border-background-900 hover:scale-105 transition-all cursor-pointer border-2">
          <img
            className="w-[200px] h-[150px] md:w-full md:h-[255px]"
            src="/sneaker.png"
            alt="sneaker"
          />
          <div className="mt-4">
            <h4 className="font-ubuntu font-medium text-xl">Sneaker</h4>
            <div className="flex my-1 justify-center items-center w-fit">
              <img className="mr-2" src="/star.svg" alt="star" />
              <p className="text-sm font-ubuntu">
                4.5 <span className="text-neutral-300"> (325)</span>
              </p>
            </div>
            <div className="flex justify-center items-center w-fit space-x-2">
              <span>Rp. 965.500</span>
              <span className="text-danger-500 text-xs line-through">
                Rp. 1.097.500
              </span>
            </div>
          </div>
        </div>
        <div className="p-2 w-full rounded-md border-background-900 hover:scale-105 transition-all cursor-pointer border-2">
          <img
            className="w-[200px] h-[150px] md:w-full md:h-[255px]"
            src="/womens-robes.png"
            alt="women's robes"
          />
          <div className="mt-4">
            <h4 className="font-ubuntu font-medium text-xl">
              Women&#039;s Robes
            </h4>
            <div className="flex my-1 justify-center items-center w-fit">
              <img className="mr-2" src="/star.svg" alt="star" />
              <p className="text-sm font-ubuntu">
                4.5 <span className="text-neutral-300"> (325)</span>
              </p>
            </div>
            <div className="flex justify-center items-center w-fit space-x-2">
              <span>Rp. 755.000</span>
            </div>
          </div>
        </div>
        <div className="p-2 w-full rounded-md border-background-900 hover:scale-105 transition-all cursor-pointer border-2">
          <img
            className="w-[200px] h-[150px] md:w-full md:h-[255px]"
            src="/bag.png"
            alt="bag"
          />
          <div className="mt-4">
            <h4 className="font-ubuntu font-medium text-xl">Bag</h4>
            <div className="flex my-1 justify-center items-center w-fit">
              <img className="mr-2" src="/star.svg" alt="star" />
              <p className="text-sm font-ubuntu">
                4.5 <span className="text-neutral-300"> (325)</span>
              </p>
            </div>
            <div className="flex justify-center items-center w-fit space-x-2">
              <span>Rp. 920.500</span>
            </div>
          </div>
        </div>
        <div className="p-2 w-full rounded-md border-background-900 hover:scale-105 transition-all cursor-pointer border-2">
          <img
            className="w-[200px] h-[150px] md:w-full md:h-[255px]"
            src="/mens-robes.png"
            alt="men's robes"
          />
          <div className="mt-4">
            <h4 className="font-ubuntu font-medium text-xl">
              Men&#039;s Robes
            </h4>
            <div className="flex my-1 justify-center items-center w-fit">
              <img className="mr-2" src="/star.svg" alt="star" />
              <p className="text-sm font-ubuntu">
                4.5 <span className="text-neutral-300"> (325)</span>
              </p>
            </div>
            <div className="flex justify-center items-center w-fit space-x-2">
              <span>Rp. 680.000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
