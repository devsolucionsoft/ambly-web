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
    font-weight : bold;
}
.card {
    width : 40%;
    figcaption {
        background-color : #ec4942;
        height : 200px;
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : space-around;
        padding: 0 5%;
        p {
            color : black;
            span {
                color : white;
            }
        }
        a {
            background-color : black;
            height : 40px;
            width : 150px;
            display : flex;
            align-items :center;
            justify-content : center;
            color : white;
            text-decoration : none;
            font-weight : bold;
            transition : all .3s ease;
            &:hover {
                background-color :  #ec4942;
                color : black;
                border : 1px solid  black;
                
            }
        }

    }
}
`