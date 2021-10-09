import styled from "styled-components"

export const MentorStyled = styled.div`
background: rgb(189, 232, 222);
  background: linear-gradient(
    90deg,
    rgba(189, 232, 222, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  min-height: 100vh;
 
  & .wrapper{
      position: relative;
      & .profileInfo{
          max-width: 80%;
          width: 100%;
          z-index: 100;
          position: sticky;
          top: 0;
          height: 300px;
          transition: 100ms ease-in-out;
          margin: auto ;
          padding: 20px 0;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, .3);
          & img{
              width: 250px;
              transition: 100ms ease-in-out;
              height: 250px;
              border-radius: 50%;
              margin-right: 20px;
          }
          & .info{
              display: flex;
              width: 90%;
              align-items: center;
              justify-content: space-between;

              & .name{
                  h2{
                      margin: 0;
                      font-size: 50px;
                  }
              }

              .chat{
                  padding: 10px 15px;
                  border-radius: 5px;
                  cursor: pointer;
                  background-color: greenyellow;
              }
          }
      }

      .review{
          width: 80%;
          margin: auto;
          .recDet{
          width: 100%;  
          margin: 20px auto;
          padding: 20px 0;
          background-color: white;
          
          .r{
              font-size: 35px;
              font-weight: 700;
              margin-left: 50px;
              margin-right: 30px;
            }
            .df{

                display: flex;
                align-items: center;
            }
            p{
                margin-left: 50px;
            }
            .g{
                margin-left: 10px;
                color: black;
                font-weight: 500;
            }
        }
        }

        ul{
            padding: 0;
            list-style: none;

            li{
                background-color: white;
                padding: 15px;
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                .avtar{
                    display: inline;
                    width: 30px;
                    margin-left: 40px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    color: white;
                    font-weight: 500;
                    margin-right: 10px;
                    background-color: red;
                }
                .n{
                    width: 120px;
                    font-weight: 500;
                    margin-right: 10px;
                    border-right: 2px solid rgba(0, 0, 0, .3);
                }
            }
        }

  }
   .CONTAINER_STYLE{
       position: relative;
      height: 20vh;
      width: 100%;
      padding-top: 100px;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items : middle;
}
  .cardStyle{
      position: relative;
      height: 180px;
      cursor: pointer;
      width: 400px;
      /* padding-top: 80px; */
      text-align: center;
      background-color:#52C0F5 ;
      color:#FFF ;
      font-size:12px ;
      text-transform: uppercase;
      border-radius: 10px;
      box-sizing: border-box;
      display:flex ;

      img{
          width: 200px;
          margin-right: 20px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
      }
   
  }
  .expand{
   
      height: 150px !important;
      transition: 100ms ease-in-out;
      background-color: white;

  }
  .shrink{
      width: 150px !important;
      height: 150px !important;
 
      transition: 100ms ease-in-out;

  }
`