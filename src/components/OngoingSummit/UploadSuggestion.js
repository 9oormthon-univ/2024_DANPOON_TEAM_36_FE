import styled from 'styled-components';
import themeGet from '../../utils/themeGet';

import GotoUpload from '../Summit/GotoUpload';

function UplaodSuggestion({
    header,
    caption,
    // 추후 라우터 작업 진행하기
    // router
}){

    return(
        <>
            <Container>
                <Header>{header} 를 선도하는 청년 창업가가 되고 싶으신가요?</Header>
                <Caption>{caption}</Caption>
                <GotoUpload
                
                    // 추후 라우터 작업 진행하기
                    // router
                />
            </Container>
        </>
    )
}

export default UplaodSuggestion;

const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;

    padding: 40px;

    max-width: 1020px;
    max-height: 260px;

    background-color: ${themeGet('color.salmon')};
    border-radius: 10px;

    box-shadow: 5px 5px 20px 2px #00000040;
`;

const Header=styled.p`
    color: ${themeGet('color.white')};

    font-family: Pretendard;
    font-size: 30px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: -0.015em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;
const Caption=styled.p`
    text-align: left;
    margin: 16px auto 40px 0;

    color: ${themeGet('color.white')};

    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.015em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`;