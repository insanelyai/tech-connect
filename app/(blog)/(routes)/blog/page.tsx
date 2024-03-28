import React from "react";
import AddArticles from "../../_components/AddArticles";
import Featured from "../../_components/Featured";
import Special from "../../_components/Special";
import Member from "../../_components/Member";

const page = () => {
  return (
    <div className=''>
      <Featured />
      <Special />
      <Member />
      <AddArticles />
    </div>
  );
};

export default page;
