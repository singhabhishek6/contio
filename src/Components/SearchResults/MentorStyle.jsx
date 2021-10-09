import styled from "styled-components";

export const MentorStyled = styled.div`
  background: rgb(189, 232, 222);
  background: linear-gradient(90deg, #97f8e2 0%, #e6e6e6 100%);
  min-height: 100vh;

  & .wrapper {
    position: relative;
    & .profileInfo {
      max-width: 100%;
      width: 100%;
      z-index: 100;
      position: sticky;
      top: 0;

      height: 300px;
      transition: 100ms ease-in-out;
      margin: auto;
      padding: 20px 0;
      display: flex;
      align-items: center;
      & .bb {
        margin-left: 100px;
        width: 250px;
        transition: 100ms ease-in-out;
        height: 250px;
        border-radius: 50%;
        margin-right: 20px;
      }
      & .info {
        display: flex;
        width: 90%;
        align-items: center;
        justify-content: space-between;

        & .name {
          h2 {
            color: rgba(0, 0, 0, 0.7);
            margin: 0;
            font-size: 50px;
          }
        }

        .chat {
          padding: 10px 15px;
          margin-right: 140px;
          border-radius: 5px;
          font-weight: 500;
          color: white;
          letter-spacing: 1px;
          cursor: pointer;
          background-color: rgb(82, 192, 245);
        }
      }
    }

    .review {
      width: 80%;
      margin: auto;
      .recDet {
        width: 100%;
        margin: 20px auto;
        border-radius: 10px;
        padding: 20px 0;
        background-color: white;

        .r {
          font-size: 35px;
          font-weight: 700;
          margin-left: 50px;
          margin-right: 30px;
        }
        .df {
          display: flex;
          align-items: center;
        }
        p {
          margin-left: 50px;
        }
        .g {
          margin-left: 10px;
          color: black;
          font-weight: 500;
        }
      }
    }

    ul {
      padding: 0;
      list-style: none;

      li {
        background-color: white;
        padding: 15px;
        margin-bottom: 5px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        .avtar {
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
        .n {
          width: 120px;
          font-weight: 500;
          margin-right: 10px;
          border-right: 2px solid rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
  .CONTAINER_STYLE {
    position: relative;
    height: 20vh;
    width: 100%;
    padding-bottom: 50px;
    padding-top: 100px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: middle;
  }
  .h {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
  }
  .status {
    width: 100px;
    text-align: left;
    margin-left: 20px;

    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: green;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
  .cardStyle {
    position: relative;
    height: 180px;
    cursor: pointer;
    width: 400px;
    /* padding-top: 80px; */
    text-align: center;
    background-color: #52c0f5;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;

    img {
      width: 200px;
      margin-right: 20px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
    }
  }
  .expand {
    box-shadow: 0 15px 6px -6px rgba(0, 0, 0, 0.3);
    height: 150px !important;
    transition: 100ms ease-in-out;
    background: rgb(189, 232, 222);
    background: linear-gradient(90deg, #97f8e2 0%, #e6e6e6 100%);
  }
  .shrink {
    width: 150px !important;
    height: 150px !important;
    box-shadow: 0 8px 6px -6px black;
    transition: 100ms ease-in-out;
  }

  .bio {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    .left {
      padding-left: 45px;
      padding-right: 10px;
      width: 25%;
      background-color: white;
      border-radius: 10px;
      text-overflow: clip;

      h3 {
        color: rgba(0, 0, 0, 0.7);
      }
      div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        span {
          color: white;
          margin-bottom: 10px;
          padding: 5px 10px;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 5px;
          margin-right: 10px;
        }
      }
    }

    .right {
      width: 60%;
      padding-left: 45px;
      padding-right: 45px;
      background-color: white;
      border-radius: 10px;
      h3 {
        color: rgba(0, 0, 0, 0.7);
        margin-bottom: 0;
      }
      p {
        /* margin-bottom: 0; */
      }
    }
  }

  .sdf {
    width: 100%;
    margin-right: 15px;
    display: flex;
    flex-wrap: wrap;

    span {
      color: white;
      margin-top: 10px;
      padding: 4px 10px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 5px;
      margin-right: 8px;
    }
  }
`;
