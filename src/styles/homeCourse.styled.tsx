import styled from "styled-components";

export const Main = styled.main`
.container {
    padding : 5%;
    backgroun : red;
    display : flex;
    flex-direction : column;
    gap : 4rem;
    align-items : center;
}
.title {
    display : flex;
    align-items : center;
    width : 100%;

    h1 {
        color : white;
    font-size : 4rem;
    line-height : 3.5rem;
    text-align:center;
    }
}
.bars {
    display : flex;
    flex-direction : column;
    gap : 8px;
    align-items : end;
    width : 100%;
    div {
        background : #ec4942;
        &:first-child, &:last-child {
            height : 2px;
            width : 90%
        }
        &:nth-child(2) {
            height : 8px;
            width : 70%;

        }
        &:nth-child(3) {
            height : 5px;
            width : 80%;

        }
        &:last-child {
            width : 70%;
        }
    
    }
}
.left {
    align-items: flex-start;
}
.image {
    object-fit : cover;
    width : 100%;
}
h2 {
    
    color : white;
    font-size : 3rem;
    line-height : 3rem;
    text-align:center;
    width : 50%;
}
p {
    color : white;
    font-size : 2rem;
    line-height : 2rem;
    text-align:center;
}
.card {
    figcaption {
        background-color : #ec4942;
        height : 300px;

    }
}
`