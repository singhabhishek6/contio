import styled from "styled-components"

export const MentorStyled = styled.div`
background: rgb(189, 232, 222);
  background: linear-gradient(
    90deg,
    rgba(189, 232, 222, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 120vh;
  min-height: 100vh;
  & .wrapper{
      width: 100%;
      position: sticky;
      top: 0;
      
      & .profileInfo{
          max-width: 80%;
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
  }

  .expand{
      height: 150px !important;
      transition: 100ms ease-in-out;

  }
  .shrink{
      width: 150px !important;
      height: 150px !important;
      transition: 100ms ease-in-out;

  }
`