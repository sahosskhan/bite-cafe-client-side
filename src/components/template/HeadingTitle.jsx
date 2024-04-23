/* eslint-disable react/prop-types */

const HeadingTitle = ({ text }) => {
  return (
    <>
      <div className="mx-auto text-center md:w-[23%] my-16 p-2">
        <p className="text-amber-600 italic text-xl mb-6">
          --- {text?.short} ---
        </p>
        <h3 className="lg:text-4xl text-2xl font-semibold uppercase rounded-ss-xl rounded-ee-xl border-amber-600 text-center border-x-4 ">
          {text?.long}
        </h3>
      </div>
    </>
  );
};

export default HeadingTitle;
