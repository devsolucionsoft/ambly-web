import styled from "styled-components";

export const Main = styled.main`
.container {
    padding : 50px 0;
    display : flex;
    flex-direction : column;
    gap : 10vh;
    justify-content: start;
    align-items : center;
    justify-content: space-between;
    h2{
        width: 100%;
    }
}
.title {
    display : flex;
    align-items : center;
    width : 100%;
    justify-content: center;
    flex-direction: column;
    gap: 100px;
    color: white;
    h1 {
        text-align: center;
        padding: 0 50px;
    }
    
}
h2 {
    
    color : white;
    font-size : 3rem;
    line-height : 3rem;
    text-align:center;
    width : 50%;

    @media (max-width:600px){
        font-size:2rem;
        line-height:2rem;
        width : 100%;
    }
}
p {
    color : white;
    font-size : 2rem;
    line-height : 2rem;
    text-align:center;
    font-weight : 800;

    @media (max-width:600px){
        font-size:1.5rem;
        line-height:1.5rem;
    }
}
.invalid {
    border: 1px solid red;
}

returnTime {
  width: 100%;
  color: white;
  font-size: 4rem;
  line-height: 4rem;
  text-align: center;
}

@media (max-width: 600px) {
  .returnTime {
    font-size: 2rem;
    line-height: 2rem;
  }
}

.timeContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5%;
  padding: 0 4px;
}

@media (min-width: 768px) {
  .timeContainer {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .timeContainer {
    grid-template-columns: repeat(4, 1fr);
  }
  .typeTimeContainer{
    padding: 40px !important;
  }
  .flip{
    height: 80px !important;
    width: 200px !important;
  }
}

.typeTimeContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 600;
  min-width: 100%;
}

@media (max-width: 600px) {
  .typeTimeContainer {
    font-size: 2rem;
    line-height: 2rem;
  }
  .typeDatteContainer {
    font-size: 1rem;
    line-heigth: 1rem;
  }

  .timeContainer{
    gap: 10px;
  }
}

.typeDateContainer {
  margin-top: 10px;
  color: black;
  font-size: 2rem;
  line-height: 2rem;
}

@media (max-width: 600px) {
  .typeDateContainer {
    font-size: 1rem;
    line-height: 1rem;
  }
}

.flip {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  perspective: 600px;
}

.flip .front,
.flip .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.1s cubic-bezier(1, 1, 1, 1);
  color: #EC4942;
  display: flex;
  justify-content: center;
}

.flip .front {
  transform: rotateX(0deg);
}

.flip .back {
  transform: rotateX(-180deg);
}

.flip.flip-animate .front {
  transform: rotateX(180deg);
}

.flip.flip-animate .back {
}
`