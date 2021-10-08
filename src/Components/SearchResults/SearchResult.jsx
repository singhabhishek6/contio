import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { SearchStyle } from "./SearchStyle";

export const SearchResult = () => {
    const [users,setuser] = useState([])
    const {data} = useParams()
  const x = [1, 1, 1, 1, 1];

  useEffect(() => {
    axios("http://localhost:1234/users")
    .then(res=>{
        console.log(res);
        setuser(res.data.users)
    })
    
  }, [data])
  return (
    <SearchStyle>
        <h2>Total {data.toUpperCase() } Users Found {x.length}</h2>
        <div className="wrapper">
      {users.map((el,i) => {
        return (
         <Link to={`/search/${data}/${el._id}`}>
           <div className="a-box" key={i}>
            <div className="img-container">
              <div className="img-inner">
                <div className="inner-skew">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU" />
                </div>
              </div>
            </div>
            <div className="text-container">
              <h3>{el.name}</h3>
              <Rating name="read-only" value={2.5} readOnly />
              <div>
                This a demo experiment to skew image container. It looks good.
              </div>
            </div>
          </div>
         </Link>
        );
      })}
      </div>
    </SearchStyle>
  );
};
