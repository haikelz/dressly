import Layout from "./layout";
import { Paragraph } from "./ui/typography";

export default function Banner() {
  return (
    <Layout>
      <section className="w-full py-8 md:py-16 flex justify-center items-center flex-col md:space-x-4 md:flex-row-reverse">
        <img
          className="w-full lg:w-[598px] lg:h-[550px]"
          src="/hero.png"
          alt="hero"
        />
        <div className="py-8 md:py-0"></div>
        <div className="md:w-[598px]">
          <h1 className="font-lora text-[28px] md:text-[52.37px] md:leading-tight font-semibold">
            Discover the Latest Fashion Trends
          </h1>
          <Paragraph className="mt-2 mb-7">
            From stylish dresses to trendy tops and must-have accessories, we
            have everything you need to stay on top of the latest fashion
            trends. Our expertly curated collection features the hottest styles
            from top designers, so you can always find the perfect look for any
            occasion. Shop now and discover your new favorite fashion pieces.
          </Paragraph>
          <button
            type="button"
            aria-label="shop now"
            className="text-neutral-900 py-3 md:w-[286px] font-semibold text-base bg-primary-500 w-full rounded-md"
          >
            Shop Now
          </button>
        </div>
      </section>
    </Layout>
  );
}
