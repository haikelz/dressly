import Layout from "./layout";
import { Paragraph } from "./ui/typography";

export default function Footer() {
  return (
    <Layout>
      <footer className="w-full pt-8 pb-4">
        <div className="flex md:flex-row flex-col w-full">
          <div className="w-full md:max-w-[285px]">
            <div className="flex justify-center items-center space-x-2 w-fit">
              <img src="/logo.svg" alt="logo" />
              <span className="font-semibold text-xl text-neutral-900 font-lora">
                DressLy
              </span>
            </div>
            <Paragraph className="mt-4">
              We are an online fashion store that provides a variety of the
              latest and trendy fashion products for men and women. We always
              try to provide our customers with a pleasant and easy shopping
              experience.
            </Paragraph>
          </div>
          <div className="w-full xl:ml-24 md:flex">
            <div className="w-full flex md:flex-row md:space-x-16 flex-col py-6 md:py-0">
              <div>
                <span className="text-neutral-900 font-ubuntu font-medium text-base">
                  Product Category
                </span>
                <ul className="mt-2 space-y-1">
                  <li>
                    <span>Women's clothing</span>
                  </li>
                  <li>
                    <span>Menswear</span>
                  </li>
                  <li>
                    <span>Accessories</span>
                  </li>
                  <li>
                    <span>Shoes</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0">
                <span className="text-neutral-900 font-ubuntu font-medium text-base">
                  Company
                </span>
                <ul className="mt-2 space-y-1">
                  <li>
                    <span>About</span>
                  </li>
                  <li>
                    <span>Contact</span>
                  </li>
                  <li>
                    <span>Privacy Policy</span>
                  </li>
                  <li>
                    <span>Terms of Service</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <span className="font-ubuntu font-medium text-neutral-900 text-base">
                Download Our App
              </span>
              <div className="flex w-fit space-x-3 mt-3">
                <button
                  type="button"
                  aria-label="download on app store"
                  className="w-full"
                >
                  <img src="/app-store.png" alt="app store" />
                </button>
                <button
                  type="button"
                  aria-label="download on play store"
                  className="w-full"
                >
                  <img src="/play-store.png" alt="play store" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
