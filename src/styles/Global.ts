import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
}
body {
    -webkit-font-smoothing:antialised;
    background:#F0F0F5 url(${githubBackground}) no-repeat 70% top;
}
body,input,button {

 font:16px Roboto,sans-serif;   

}
button {
    cursor:pointer;
}
#root {
    max-width:960px;
    margin:0 auto;
    padding:40px 20px;
}
`;