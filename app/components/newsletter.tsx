export default function Newsletter() {
  return (
    <section className="flex py-10 md:py-20 justify-center items-center w-full">
      <div className="w-full md:flex-col md:flex md:justify-center md:items-center">
        <h2 className="font-semibold text-2xl text-neutral-900 font-lora md:text-5xl">
          Subscribe Our Newsletter
        </h2>
        <div className="space-x-2 flex justify-center items-center w-full max-w-3xl mt-3 md:mt-8">
          <input
            type="email"
            name="email"
            placeholder="Type your mail"
            className="rounded-md border border-gray-300 py-2 px-4 w-full focus:outline-primary-500"
          />
          <button
            type="button"
            aria-label="send"
            className="bg-primary-500 p-3 rounded-lg"
          >
            <img src="/send.svg" alt="send" />
          </button>
        </div>
      </div>
    </section>
  );
}
