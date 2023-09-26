import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navi = useNavigate();
  useEffect(() => {
    navi("/user");
  }, []);

  return <div>Redirect</div>;
};

export default Redirect;
