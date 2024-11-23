import { useNavigate } from "react-router";
import styled from "styled-components";
import themeGet from "../../utils/themeGet";
import { BsArrowRight } from "react-icons/bs";

const Container=styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 16px 40px;

    max-width: 244px;
    max-height: 60px;

    color: ${themeGet('color.400')};
    background-color: ${themeGet('color.white')};

    border:none;
    border-radius: ${themeGet('border.radius.main')};
    box-shadow: 5px 5px 20px 2px #00000040;

    &:hover{
        color: ${themeGet('color.white')};
        background-color: ${themeGet('color.salmon')};
        font-weight: 600;
        transition: all 0.3s;
    }

    &:active{
        color: ${themeGet('color.main')};
        background-color: ${themeGet('color.white')};
        font-weight: 600;
        transition: all 0.3s;
    }
`;

function GotoUpload({
    className,
    summitId
}){
    // 추후 라우터 작업 진행하기
    const navigate = useNavigate();

    const handleClick = () => {
        // summitId가 있을 경우 해당 summitId를 포함한 /upload 경로로 네비게이트
        if (summitId) {
          navigate(`/upload/${summitId}`);
        } else {
          navigate('/upload'); // summitId가 없으면 기본 /upload 경로로 이동
        }
      };

    return(
        <>
            <Container 
                onClick={handleClick}
                className={className}
            >
                PT 영상 업로드 하기
                <BsArrowRight size={16}/>
            </Container>
        </>
    )
}

export default GotoUpload;