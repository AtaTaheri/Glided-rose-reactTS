import styled from "styled-components"

const primaryColor:string = '#CBC5EA';
const normalHover:string = 'rgba(203,197,234,0.4)';
const primaryHover:string = 'rgba(215,209,246,0.79)';
const borderRadius: string = '15px'

interface Props {
    primary? : any;
}
const Button = styled.button<Props>`
    background: ${props => props.primary ? `${primaryColor}` : "transparent"};
    color: ${props => props.primary ? '#313D5A' : `${primaryColor}`};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${primaryColor};
    border-radius: ${borderRadius};
    cursor: pointer;
    -webkit-transition: background-color 100ms linear;
    -ms-transition: background-color 100ms linear;
    transition: background-color 100ms linear;
    &:hover{
        background: ${props => props.primary ? `${primaryHover}` : `${normalHover}`};
    }
`;

export default Button;