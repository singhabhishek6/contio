import styled from "styled-components";

export const SearchStyle = styled.div`
  background: rgb(189, 232, 222);
  background: linear-gradient(90deg, #97f8e2 0%, #e6e6e6 100%);
  width: 80%;
  padding: 0 135px;
  padding-top: 50px;
  padding-bottom: 20px;
  min-height: 100vh;
.wrapper{

    display: flex;
    flex-wrap: wrap;
}

  .a-box {
    cursor: pointer;
    margin-left: 65px;
    display: inline-block;
    width: 270px;
    margin-bottom: 30px;
    height: 420px;
    text-align: center;

    &:hover {
      & .img-container img,
      .inner-skew {
        transform: skew(0deg, -0deg);
        transition: 300ms ease-in-out;
      }
    }
  }

  .img-container {
    height: 240px;
    width: 200px;
    overflow: hidden;
    border-radius: 0px 0px 20px 20px;
    display: inline-block;
  }

  .img-container img {
    transform: skew(0deg, -10deg);
    height: 250px;
    margin: -35px 0px 0px -70px;
    transition: 300ms ease-in-out;
  }

  .inner-skew {
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    padding: 0px;
    transform: skew(0deg, 10deg);
    transition: 300ms ease-in-out;

    font-size: 0px;
    margin: 30px 0px 0px 0px;
    background: #c8c2c2;
    height: 240px;

    width: 200px;
  }

  .text-container {
    height: 160px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 120px 20px 20px 20px;
    border-radius: 20px;
    background: #fff;
    margin: -120px 0px 0px 0px;
    line-height: 19px;
    font-size: 14px;
  }

  .text-container h3 {
    margin: 20px 0px 10px 0px;
    color: #04bcff;
    font-size: 18px;
  }
  .status{
      width: 100px;
      text-align: left;
      margin-top: 10px;
      
      /* margin-left: 20px; */

      .dot{
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: green;
        border-radius: 50%;
        margin-right: 5px;
      }
  }
  .sdf{
              width: 100%;
              margin-right: 15px;
              display: flex;
              flex-wrap: wrap;
          
          span{
              color: white;
              margin-top: 10px;
              padding: 4px 6px;
              background-color: rgba(0, 0, 0, .7);
              border-radius: 5px;
              margin-right: 5px;
          }
        }
        .MuiPagination-root{
          width: 100%;
          margin: auto;
          margin-top:30px ;
          text-align: center;
          ul{
            justify-content: center;
            /* width: 20%; */
            margin: auto;
          }
        }
`
