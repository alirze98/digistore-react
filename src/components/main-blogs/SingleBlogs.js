import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBlog from "./SingleBlog";

const SingleBlogs = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://digistore.glitch.me/blogs/${params.blogId}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  return (
    <div>
      <SingleBlog
        image={data.image}
        title={data.title}
        description={data.body}
      />
    </div>
  );
};

export default SingleBlogs;
