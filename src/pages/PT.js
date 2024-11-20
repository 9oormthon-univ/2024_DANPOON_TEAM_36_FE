import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiLink } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import themeGet from "../utils/themeGet";
import NavigationBar from "../components/NavigationBar";
import GoToModalButton from "../components/PT/GoToModalButton";

const PT = () => {
  const navigate = useNavigate();

  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleTitleEdit = () => {
    navigate(`/upload`);
  };

  // 댓글에서 클릭 시 댓글 수정 처리
  const handleCommentEdit = () => {
    console.log('댓글 수정');
    // 댓글 수정 관련 로직
  };

  return (
    <Container>
      <InfoContainer>
        <InfoSemiContainer>
          <NavigationBar />
        </InfoSemiContainer>
        <MainSection>
          <TitleContainer>
            <Title>의사와 환자를 연결하는 원격 진료 서비스, 닥터나우</Title>
            <GoToModalButton size={36} onEdit={handleTitleEdit} />
          </TitleContainer>
          <Description>
            닥터나우는 현대인들이 언제 어디서나 쉽게 의료 서비스를 받을 수 있도록 돕기 위해 만들어졌습니다.<br />
            원격 진료를 통해 의료 접근성을 높이고, 환자와 의사 간의 소통을 간편하게 만들고자 했습니다.<br />
            우리 서비스는 특히 바쁜 일상 속에서 의료를 필요로 하는 많은 사람들에게 큰 도움을 주고 있습니다.<br />
            앞으로도 더욱 발전하여 더 많은 분들에게 신뢰받는 헬스케어 솔루션을 제공하겠습니다.<br />
          </Description>
        </MainSection>

        <ContentSection>
          <ContentSectionLeft>
            <VideoContainer>영상</VideoContainer>

            <CommentInput>
              <Input placeholder="댓글을 작성하세요" />
              <SubmitButton>등록</SubmitButton>
            </CommentInput>

            <CommentsWrapper>
              <Comment>
                <AurthorContainer>
                  <CommentAuthor>최규리</CommentAuthor>
                  <GoToModalButton color="#000000" size={24} onEdit={handleCommentEdit} />
                </AurthorContainer>
                <CommentText>영상 잘 보고 갑니다.</CommentText>
              </Comment>

              <Comment>
                <AurthorContainer>
                  <CommentAuthor>이상원</CommentAuthor>
                </AurthorContainer>
                <CommentText>영상 잘 보고 갑니다. 동종업계 창업가로서 힘내봐요~</CommentText>
              </Comment>

            </CommentsWrapper>
          </ContentSectionLeft>
          <ContentSectionRight>
            <VideoInfo>
              <DateText>2024.10.28</DateText>
              <PresenterWrapper>
                <Label>발표자</Label>
                <Name>최재형 대표님</Name>
              </PresenterWrapper>
              <CompanyWrapper>
                <Label>소속</Label>
                <CompanyContainer>
                  <Name>닥터 나우</Name>
                  <StyledBiLink size={24} />
                </CompanyContainer>
              </CompanyWrapper>
              <ButtonWrapper>
                <ButtonContainer>
                  <StyledHeartIcon
                    size={36}
                    filled={isHeartFilled}
                    onClick={handleHeartClick}
                  />
                  <InvestButton>투자 제안하기</InvestButton>
                </ButtonContainer>
              </ButtonWrapper>
            </VideoInfo>
          </ContentSectionRight>
        </ContentSection>

      </InfoContainer>
    </Container>
  );
};

export default PT;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${themeGet("color.neutral_100")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  width: 100%;
`;

const InfoSemiContainer = styled.div`
  background-color: ${themeGet('color.main')};
`;

const MainSection = styled.div`
  background-color: ${themeGet("color.main")};
  color: ${themeGet("color.white")};
  min-height: 328px;
  margin: 0 auto;
  padding: 40px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h1`
  font-size: ${themeGet("fonts.h1.font_size")};
  font-weight: bold;
`;

const Description = styled.div`
  font-size: ${themeGet("fonts.body1.font_size")};
  line-height: 1.6;
  margin: 40px auto;
`;

const ContentSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 80px auto;
  background: ${themeGet("color.white")};
  border-radius: 10px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ContentSectionLeft = styled.div`
  width: 820px;
  margin: 40px;
  background: ${themeGet("color.white")};
`;

const ContentSectionRight = styled.div`
  width: 380px;
  padding: 2rem 1.5rem;
  background: ${themeGet("color.neutral_100")};
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: ${themeGet("color.neutral_200")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${themeGet("color.300")};
`;

const DateText = styled.div`
  color: ${themeGet("color.neutral_500")};
  font-size: ${themeGet("fonts.sub_head.font_size")};
  font-weight: bold;
  margin-bottom: 20px;
`;

const PresenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${themeGet("fonts.body1.font_size")};
  background-color: ${themeGet("color.white")};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1); 
  border-radius: 50px;
  margin-bottom: 20px;
  position: relative;
  width: 300px;
  height: 60px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet("color.main")};
  color: ${themeGet("color.white")};
  font-weight: bold;
  border: none;
  border-radius: 50px;
  position: absolute;
  left: 0;
  width: 93px;
  height: 60px;
  z-index: 1;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  border: none;
  color: ${themeGet("color.neutral_500")};
  margin-left: 16px;
`;

const CompanyWrapper = styled(PresenterWrapper)``;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 20px;
  margin-left: 93px;
`;

const StyledBiLink = styled(BiLink)`
  cursor: pointer;
  color: ${themeGet("color.neutral_400")};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  cursor: pointer;
  background: none;
  margin-top: 40px;
`;

const StyledHeartIcon = styled(BsFillHeartFill)`
  color: ${(props) => (props.filled ? "#F25454" : themeGet("color.neutral_300"))};
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
`;

const InvestButton = styled.button`
  width: 224px;
  height: 60px;
  margin-left: 20px;
  border: 1px solid ${themeGet("color.main")};
  color: ${themeGet("color.main")};
  background: ${themeGet("color.white")};
  border-radius: 10px;
  font-size: ${themeGet("fonts.body1.font_size")};
  cursor: pointer;
`;

const CommentInput = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding-left: 20px;
  border: 2px solid ${themeGet("color.neutral_200")};
  border-radius: 0.5rem;
  font-size: ${themeGet("fonts.body2.font_size")};
  width: 655px;
  height: 60px;

    &:focus {
    border-color: ${themeGet("color.main")};
    outline: none;
    color: ${themeGet("color.neutral_400")}
  }
`;

const SubmitButton = styled.button`
  background-color: ${themeGet("color.main")};
  color: ${themeGet("color.white")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${themeGet("fonts.body1.font_size")};
  width: 75px;
  height: 64px;
`;

const CommentsWrapper = styled.div`
  margin-top: 40px;
`;

const Comment = styled.div`
  border-bottom: 1px solid ${themeGet("color.neutral_200")};
`;

const AurthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const CommentAuthor = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: ${themeGet("fonts.body1.font_size")};
`;

const CommentText = styled.p`
  color: ${themeGet("color.neutral_400")};
  font-size: ${themeGet("fonts.body2.font_size")};
`;

