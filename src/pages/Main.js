import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { BsChevronCompactDown } from "react-icons/bs";
import themeGet from "../utils/themeGet";
import NavigationBar from "../components/NavigationBar";
import main_ongoingsummit from '../assets/img/main-ongoingsummit.png';
import main_signup from "../assets/img/main_signup.png";
import main_pt from "../assets/img/main_pt.png";
import main_my from "../assets/img/main_my.png";


const Main = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <InfoContainer>
        <InfoSemiContainer>
          <NavigationBar />
        </InfoSemiContainer>

        <TitleContainer>
          <Title>청년 창업가의 반짝이는 아이디어가<br />투자자의 귀에 닿는 순간</Title>
          <MovingIcon size={90} />
        </TitleContainer>

        <Description>
          다양한 써밋 무대에서 피칭을 선보이고 투자 제안까지 받아보세요. <br />
          YE;Summit에서 지속 가능한 미래를 이끌 (예비) 청년 창업가분들을 <br />
          스페셜리스트로 초대합니다.
        </Description>

        <ContentContainer1>
          <ContentLabel1>진행 중인 써밋</ContentLabel1>
          <ContentDescription>YE;Summit에서는<br />매일이 써밋 데이</ContentDescription>
          <ImgBox><ContentImg src={main_ongoingsummit} alt="OngoingSummit Image" /></ImgBox>
          <ContentSubDescription1>
            주 2회 새로운 주제로 써밋이 열려요. <br />
            누구든지 언제 어디서나 <br />
            써밋에 참가할 수 있습니다.
          </ContentSubDescription1>
        </ContentContainer1>

        <ContentContainer2>
          <ContentLabel2>마이페이지</ContentLabel2>
          <ContentDescription>쉽고 빠른 참가 등록</ContentDescription>
          <ContentImg src={main_signup} alt="SignUp Image" />
          <ContentSubDescription2>
            카카오 소셜 로그인과 단 한 번의 회원정보 등록만으로 <br />
            YE;Summit의 모든 서비스를 사용하실 수 있습니다.
          </ContentSubDescription2>
        </ContentContainer2>

        <ContentContainer3>
          <ContentLabel3>써밋 ・ PT</ContentLabel3>
          <ContentDescription>PT 영상 올리고<br />투자 제안까지</ContentDescription>
          {/* <DesignBox/> */}
          <ImgBox2><ContentImg2 src={main_my} alt="My Image" /></ImgBox2>
          <ImgBox3><ContentImg2 src={main_pt} alt="PT Image" /></ImgBox3>
          <ContentSubDescription3>
            PT 영상을 업로드하고 <br /> 투자를 제안한 예비 투자자와 미팅을 가져보세요.
          </ContentSubDescription3>
        </ContentContainer3>
        <ButtonContainer><Button onClick={() => navigate('/ongoingsummit')}>YE;Summit 시작하기</Button></ButtonContainer>
      </InfoContainer>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${themeGet("color.100")};
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow-x: hidden; */
  `;

const InfoContainer = styled.div`
  width: 100%;
  `;

const InfoSemiContainer = styled.div`
  background-color: ${themeGet('color.main')};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    text-align: center;
  background-color: ${themeGet("color.main")};
  color: ${themeGet("color.white")};
  height: 88vh;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  line-height: 1.5;
  padding-top: 70px;
  margin-bottom: 210px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 87vh;
  background-color: ${themeGet("color.100")};
  color: ${themeGet("color.500")};
  font-size: ${themeGet("fonts.h1.size")};
  line-height: 1.6;
  margin: 40px 0;
`;

const ContentContainer1 = styled.div`
  width: 100%;
  height: 160vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, ${themeGet("color.white")} 70%, ${themeGet("color.main")});
  padding: 5vh 0 11vh 0;
`;

const ContentContainer2 = styled.div`
  width: 100%;
  height: 160vh;
  display: flex;
  flex-direction: column;
  background: ${themeGet("color.white")};
  padding: 10vh 0;
`;

const ContentContainer3 = styled.div`
  width: 100%;
  height: 180vh;
  display: flex;
  flex-direction: column;
  background: ${themeGet("color.white")};
  padding: 10vh 0;
`;

const ContentLabel1 = styled.div`
  margin-top: 80px;
  margin-left: 100px;
  width: 280px;
  height: 46px;
  background-color: ${themeGet("color.main")};
  color: ${themeGet("color.white")};
  font-size: 36px;
  font-weight: 500;
  border-radius: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const ContentLabel2 = styled(ContentLabel1)`
  width: 234px;
`;

const ContentLabel3 = styled(ContentLabel2)`
  margin-top: 100px;
`;

const ContentDescription = styled.p`
  margin-left: 100px;
  font-size: 50px;
  font-weight: bold;
  color: ${themeGet("color.500")};
  margin-top: 40px;
  margin-bottom: 80px;

`;

const ContentSubDescription1 = styled.p`
  text-align: center;
  padding-left: 0;
  font-size: 32px;
  color: ${themeGet("color.white")};
  line-height: 1.4;
  margin-top: 10px;
`;

const ContentSubDescription2 = styled(ContentSubDescription1)`
  color: ${themeGet("color.500")};
  text-align: left;
  padding-left: 100px;
`;

const ContentSubDescription3 = styled(ContentSubDescription2)`
  margin-left: 40vw;
  margin-top: 450px;
`;

// const DesignBox = styled.div`
//   width: 100vw;
//   height: 776px;
//   border-top-left-radius: 300px;
//   border-bottom-right-radius: 300px;
//   background-color: ${themeGet("color.main")};
//   padding-top: 280px;
// `

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgBox2 = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`

const ImgBox3 = styled.div`
  position: absolute;
  display: flex;
  padding-top: 550px;
  align-items: baseline;
  z-index: 2;
`

const ContentImg = styled.img`
  width: 64vw;
  z-index: 1;
  object-fit: cover;
`

const ContentImg2 = styled.img`
  width: 65vw;
    object-fit: cover;
`

const moveDownUp = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
    }
  100% {
    transform: translateY(0);
  }
`;

const MovingIcon = styled(BsChevronCompactDown)`
  animation: ${moveDownUp} 2s ease-in-out infinite;
  transition: transform 0.2s ease-in-out;
`;

const ButtonContainer = styled.div`
  background-color: ${themeGet('color.white')};
  padding-top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: 462px;
  height: 74px;
  margin-top: 300px;
  border: none;
  border-radius: 10px;
  background-color: ${themeGet('color.main_light')};
  color:  ${themeGet('color.white')};
  font-size: ${themeGet('fonts.h3.size')};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${themeGet('color.main')};
  }
`