import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: #white;
        border: 1px solid #64748B;
        border-radius: 24px;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            background: #white;
            opacity: 0.8;
            border: none;
        }
        &:active {
            background: #white;
            opacity: 0.6;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;