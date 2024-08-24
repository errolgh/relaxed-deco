import * as React from 'react';

const IndexPage = () => {
  return (
    <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
      <header className='sticky top-0 h-[90px] shadow-xl z-30'></header>
      <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0  left-0 right-0 z-10"></div>
      <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
          <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
            <h1 className="h1 mb-8">Let Your Home Be Unique</h1>
            <p className="mb-8">
              There are many variations of the passages of lorem Ipsum from
              available, variations of the passages.
            </p>
            <button className="btn btn-primary mx-auto xl:mx-0">
              Get a free estimate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-accent"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <div className="h-[3000px]"></div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Interno</title>;
