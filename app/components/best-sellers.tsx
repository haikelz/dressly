import Layout from "./layout";

export default function BestSellers() {
  return (
    <Layout>
      <section className="w-full py-8 md:py-20">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-lora font-semibold text-2xl md:text-5xl leading-relaxed text-neutral-900">
            Bestsellers
          </h2>
          <button
            type="button"
            aria-label="see all"
            className="md:text-neutral-900 text-primary-500 md:bg-primary-500 py-2 px-6 rounded-md text-sm font-semibold font-poppins md:font-ubuntu leading-relaxed"
          >
            See All
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto w-full mt-4">
          <div className="p-3 w-full rounded-md border-background-900 border-2">
            <img
              className="min-w-[200px] h-auto md:w-full max-w-full"
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
              <div className="flex font-ubuntu text-sm justify-center items-center w-fit space-x-2">
                <span>Rp. 965.500</span>
                <span className="text-danger-500 line-through">
                  Rp. 1.097.500
                </span>
              </div>
            </div>
          </div>
          <div className="p-3 w-full rounded-md border-background-900 border-2">
            <img
              className="min-w-[200px] h-auto md:w-full max-w-full"
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
              <div className="flex font-ubuntu text-sm justify-center items-center w-fit space-x-2">
                <span>Rp. 755.000</span>
              </div>
            </div>
          </div>
          <div className="p-3 w-full rounded-md border-background-900 border-2">
            <img
              className="min-w-[200px] h-auto md:w-full max-w-full"
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
              <div className="flex font-ubuntu text-sm justify-center items-center w-fit space-x-2">
                <span>Rp. 920.500</span>
                <span className="line-through text-danger-500">
                  Rp. 1.000.500{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="p-3 w-full rounded-md border-background-900 border-2">
            <img
              className="min-w-[200px] h-auto md:w-full max-w-full"
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
              <div className="flex font-ubuntu text-sm justify-center items-center w-fit space-x-2">
                <span>Rp. 680.000</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
