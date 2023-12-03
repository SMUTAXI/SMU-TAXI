import styled from "styled-components";
import theme from "../../../theme";
import { FONT_SIZE } from "../../../constants/size";
import { FONT } from "../../../constants/font";

const Container = styled.div`
    ${theme.ALIGN.COLUMN_CENTER};
    margin-top: 100px;
`;

const ImgBanner = styled.img`
    display: flex;
    width: 100%;
    height: 200px;
`;

const TabContainer = styled.div`
    ${theme.ALIGN.ROW_CENTER};
    width: 100%;
    height: 50px;
    gap: 10px;
    background-color: ${theme.COLOR.LIGHT.WHITE_GRAY};
`;

const TabButton = styled.button`
    display: flex;
    color: ${theme.MAIN_COLOR.TITLE};
    font-size: ${FONT_SIZE.XL};
    font-family: ${FONT.IBM_PLEX_SANS_KR.SEMI_BOLD};
    border: 0;
    background-color: transparent;
`;

const MemberContainer = styled.div`
    ${theme.ALIGN.ROW_CENTER};
    gap: 30px;
    flex-wrap: wrap;
    padding: 30px 0px;
    border-bottom: 1px solid ${theme.COLOR.DARK.VULCAN};
`;

export { Container, ImgBanner, TabContainer, MemberContainer, TabButton };
