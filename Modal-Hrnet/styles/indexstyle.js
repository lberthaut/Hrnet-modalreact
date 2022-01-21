import { createGlobalStyle } from "styled-components";

/*CSS style with Styled-components */
const Indexstyle = createGlobalStyle`
body{
    margin: 0%;

}

.menu{
    display: flex;
    flex-direction: column;
    width: 40%;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 45px 5px rgba(0,0,0,0.73);
    margin-left: 30%;
    padding-top: 4%;
    position: fixed;
    height: 100%;
    z-index: -1;
}

img{
    width: 40%;
    margin: 0 auto;
    padding-bottom: 8%;
}

.title{
    margin: 0 auto;
    padding-bottom: 40%;
}

.button_modal{
    margin: 0 auto;
    height: 45px;
    width: 150px;
    border: none;
    font-weight: bold;
    background-color: #6e850f;
    box-shadow: 2px 5px 16px 0px #0B325E, 5px 5px 40px 5px rgba(0,0,0,0.28);
    border-radius: 5px;
    transition: transform 300ms ease-out;
        &:hover{
            transform: scale(1.2);
        }
}
`;

export default Indexstyle;
