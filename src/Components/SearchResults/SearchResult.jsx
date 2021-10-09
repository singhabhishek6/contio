import { Pagination, Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar";
import { SearchStyle } from "./SearchStyle";

export const SearchResult = () => {
    const [users,setuser] = useState([])
    const {data} = useParams()
    const [page,setPage] = useState(1)
  const [pages, setPages] = useState(1);


  useEffect(() => {
    let x= []
    axios(`http://localhost:1234/users?data=${data}&page=${page}`)
    .then(res=>{
        console.log(res);
        
        setuser(res.data.users)
        setPages(res.data.totalPages)
    })
    
  }, [data , page])

  const handlePage =(e,value)=>{
    setPage(value)
  }
  return (
    <>
    <SearchStyle>
        <h2>Total {data.toUpperCase() } Users Found {users.length}</h2>
        <div className="wrapper">
      {users.map((el,i) => {
        return (
         <Link to={`/search/${data}/${el._id}`}>
           <div className="a-box" key={i}>
            <div className="img-container">
              <div className="img-inner">
                <div className="inner-skew">
                  <img src={`https://joeschmoe.io/api/v1/${el.name}`} alt="User" />
                </div>
              </div>
            </div>
            <div className="text-container">
              <h3>{el.name}</h3>
              <Rating name="read-only" value={el.teacher_review} readOnly />
              <div className="sdf">
           {
              el.proficiency!=undefined ? el.proficiency.map(r=>{
                return <span>{r}</span>
              }):null
            }
           </div>
              {el.isOnline?<div className="status">
                <span style={{backgroundColor:"green"}} className="dot"></span>
                <span>Online</span>
              </div>:<div className="status">
                <span style={{backgroundColor:"red"}} className="dot"></span>
                <span>Offline</span>
              </div>}
            </div>
          </div>
         </Link>
        );
      })}
      </div>
    <Pagination page={page} count={pages} variant="outlined" shape="rounded" onChange={handlePage}/>
    </SearchStyle>
    <Footer/>
    </>
  );
};
