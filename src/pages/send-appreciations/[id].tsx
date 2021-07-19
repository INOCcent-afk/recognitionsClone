import React from "react";
import { useRouter } from "next/router";

const SayThanks = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Header {router.query.id}</h1>
      {router.query.id === "say-thanks" ? <div>say Thanks</div> : null}
      {router.query.id === "say-thanks-team" ? (
        <div>say Thanks Team</div>
      ) : null}
      {router.query.id === "say-thanks-group" ? (
        <div>say Thanks Group</div>
      ) : null}
    </div>
  );
};

export default SayThanks;
