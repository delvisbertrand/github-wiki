import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    position: relative;
    height: 62px;
    width: 80%;

    margin: 20px;

    input {
        position: absolute;
        background: transparent;
        border: 0;
        width: calc(100% - 40px);
        height: 62px;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 20px;
        border-radius: 20px;
    }
`