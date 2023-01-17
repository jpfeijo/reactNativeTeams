import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        background-color: ${theme.COLORS.GRAY_700};
        
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};

    padding: 16px;
    border-radius: 6px;
`;