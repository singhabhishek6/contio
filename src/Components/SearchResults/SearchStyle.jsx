import styled  from 'styled-components'

export const SearchStyle =styled.div`
background: rgb(189, 232, 222);
  background: linear-gradient(
    90deg,
    rgba(189, 232, 222, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
 width: 80%;
 padding: 0 135px;
 padding-top: 50px;
 border: 1px solid;
 min-height: 100vh;
 display: flex;

 flex-wrap: wrap;
 justify-content: flex-start;
 .a-box {
     margin-right: 80px;
     cursor: pointer;
  display: inline-block;
  width: 270px;
  height: 420px;
  text-align: center;

  &:hover{
      & .img-container img,.inner-skew {
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
    transform: skew(0deg, -13deg);
    height: 250px;
    margin: -35px 0px 0px -70px;
    transition: 300ms ease-in-out;

}

.inner-skew {
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    padding: 0px;
    transform: skew(0deg, 13deg);
    transition: 300ms ease-in-out;

    font-size: 0px;
    margin: 30px 0px 0px 0px;
    background: #c8c2c2;
    height: 240px;

    width: 200px;
}

.text-container {
    height: 120px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
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
`
