import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get a chance to earn 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        impedit optio odio sed quam temporibus eius! Dolores, dolore, numquam,
        veritatis alias qui molestiae sed maxime voluptate aliquid porro ipsum!
        Itaque?
      </p>
      <form
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        onSubmit={onSubmitHandler}
      >
        <input
          type="email"
          placeholder="Enter your email:"
          className=" w-full outline-none "
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-3 "
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
