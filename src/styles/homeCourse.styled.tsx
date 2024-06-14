import styled from "styled-components";

export const Main = styled.main`
.container {
    padding : 100px 0;
    display : flex;
    flex-direction : column;
    gap : 4rem;
    align-items : center;
    h2{
        width: 100%;
    }
}
.title {
    display : flex;
    align-items : center;
    width : 100%;

    h1 {
        color : white;
    font-size : 4rem;
    line-height : 4rem;
    text-align:center;
        @media (max-width:600px){
            font-size:2rem;
            line-height:2rem;
        }
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
.card {
    width: 600px;
    display: flex;
    flex-direction: column;
    figcaption {
        background-color : #ec4942;
        min-height : 250px;
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : space-around;
        padding: 5%;
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
            font-weight : 800;
            transition : all .3s ease;
            &:hover {
                background-color :  #ec4942;
                color : black;
                border : 1px solid  black;
                
            }
        }
    }
    @media (max-width:600px){
        figcaption{
            height: 200px;
            min-height : 100%;
        }
        width:100%;
    }
}
form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 25px;
    width: 100%;
    padding: 0 5%;

    small{
        font-size : 2rem;
        line-height : 2rem;
        text-align:center;
        font-weight : 800;
        color:white;
        margin-bottom: 1rem;
    }
    label{
        display: flex;
        flex-direction: row;
        width:80%;
        justify-content: space-between;
        text-transform: uppercase;
        font-weight: 800;
        color: white;
        align-items: start;

                .errorContainer{
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                    align-items: start;
                    max-width: 75%;
                    width: 100%;
                    @media (max-width:600px){
                    max-width: 100%;
                    }
                }


                input{
                    width: 100%;
                    height: 35px;
                    border-radius: 5px;
                    padding: 0 5px;
                    outline: none;
                    font-size : 1.2rem;
                    line-height : 1.2rem;
                    border: 1px solid #F1F1F1;
                }
                @media (max-width:600px){
                    flex-direction:column;
                    align-items:start;
                    width: 100%;
                    text-align:left;

                    input{
                        width:100%;
                        min-width: 100%;
                    }
                
            }
        }
    span{
        color:#ec4942;
    }
    
    }

    button{
            background-color : #ec4942;
            border: 1px solid transparent;
            height : 40px;
            width : 150px;
            display : flex;
            align-items :center;
            justify-content : center;
            color : white;
            text-decoration : none;
            font-weight : 800;
            transition : all .3s ease;
            &:hover {
                background-color :  white;
                color : black;
                border : 1px solid  black;
            }
    }
    
}
.invalid {
    border: 1px solid red;
}
`