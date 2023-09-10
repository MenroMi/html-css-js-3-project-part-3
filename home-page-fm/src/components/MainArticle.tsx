import MainIcon from '../assets/images/image-web-3-desktop.jpg';

const MainArticle = () => {
  return (
    <div className="border-neutral-grayish-blue flex flex-col gap-10 max-w-[1000px]">
      <img
        src={MainIcon}
        alt="icon for new"
        className="object-cover w-full h-full"
      />

      <div className="flex flex-col lg:flex-row gap-5">
        <h1 className="text-title leading-10 lg:leading-[3rem] xl:text-6xl font-extrabold text-left">
          The Bright Future of Web 3.0?
        </h1>

        <div className="flex flex-col justify-between gap-5">
          <p className="text-neutral-dark-grayish-blue text-descr lg:text-lg text-left">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="self-start bg-primary-red hover:bg-neutral-very-dark-blue active:bg-neutral-dark-grayish-blue py-5 px-10 text-neutral-off-white tracking-[0.3em] font-semibold transition">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainArticle;
