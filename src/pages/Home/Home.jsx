import React from "react";

const Home = () => {
  return (
    <div className="flex md:w-6xl mx-auto gap-3 items-center justify-around">
      <div className="py-20">
        <h1 className="text-xl font-semibold">This is home</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Voluptatibus dolorum voluptatem, praesentium non consequuntur eum
          consequatur modi <br />
          vero cumque quia nihil at tempora quos iste. Reiciendis debitis fuga
          modi sequi?
        </p>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Please Sign up</h1>
        <button className="btn btn-primary">Home page you can sing Up</button>
      </div>
    </div>
  );
};

export default Home;
