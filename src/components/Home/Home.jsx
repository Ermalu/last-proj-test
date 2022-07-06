import React, { useState, useEffect } from "react";
import Video from "../images/Home.mp4";
import { TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    setSearchParams({
      q: search,
      _limit: 2,
    });
  }, [search]);

  return (
    <div>
      <div>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}>
          <source src={Video} />
        </video>
        <TextField
          value={search}
          label="Search"
          onChange={e => setSearch(e.target.value)}
          variant="outlined"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, a!
        </p>
      </div>
    </div>
  );
};

export default Home;
