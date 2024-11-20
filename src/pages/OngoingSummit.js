import React from 'react';
import styled from 'styled-components';
import themeGet from '../utils/themeGet';
import NavigationBar from "../components/NavigationBar";
import Carousel from '../components/OngoingSummit/Carousel';
import GotoUpload from '../components/Summit/GotoUpload';

const OngoingSummit = () => {
    return (
        <Container>
            <InfoContainer>
                <InfoSemiContainer>
                    <NavigationBar />
                    <TitleContainer>
                        <Title>현재 진행 중인 써밋에서 다양한 피칭을 둘러보세요</Title>
                        <Description>
                            YE;Summit에서는 매주 두 개의 써밋이 열립니다.
                        </Description>
                    </TitleContainer>
                </InfoSemiContainer>

                <SummitSection>
                    <SummitContainer>
                        <Carousel
                            title="디지털 헬스케어를 선도하는 AI 서비스"
                            items={[
                                { presenter: '최재형 대표님', description: '의사와 환자를 연결하는 원격 진료 서비스, 딥다이브' },
                                { presenter: '이상일 대표님', description: '게인 건강 기록을 관리하고 관리 모니터링하는 헬스케어테크' },
                                { presenter: '이상현 대표님', description: '시용자 맞춤형 운동 및 건강 관리 서비스, 이노핏' },
                                // { presenter: '최재형 대표님', description: '의사와 환자를 연결하는 원격 진료 서비스, 딥다이브' },
                                // { presenter: '이상일 대표님', description: '게인 건강 기록을 관리하고 관리 모니터링하는 헬스케어테크' },
                                // { presenter: '이상현 대표님', description: '시용자 맞춤형 운동 및 건강 관리 서비스, 이노핏' },
                            ]}
                        />
                    </SummitContainer>

                
                    <CTASection>
                        <CTAHeader>써밋 주제를 선도하는 청년 창업가가 되고 싶으신가요?</CTAHeader>
                        <CTADescription>
                            써밋 페이지에 접속하여 가장 먼저 피칭 영상을 업로드해보세요.
                        </CTADescription>
                        <GotoUpload />
                    </CTASection>
                </SummitSection>
            </InfoContainer>
        </Container>
    );
};

export default OngoingSummit;

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

const TitleContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: ${themeGet("fonts.h1.font_size")};
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: ${themeGet("fonts.body1.font_size")};
  margin: 0;
`;

const SummitSection = styled.section`
  position: relative;
  top: 10%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;

const SummitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1180px;
  height: 552px;
  border-radius: 10px;
  border: none;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  background-color: ${themeGet('color.white')};
  margin-bottom: 40px;
`;

const CTASection = styled.section`
  background-color: ${themeGet('color.main_light')};
  border-radius: 10px;
  width: 1020px;
  height: 220px;
  padding-left: 40px;
  color: ${themeGet('color.white')}
`;

const CTAHeader = styled.h2`
  font-size: ${themeGet("fonts.h2.font_size")};
  font-weight: bold;
  margin-bottom: 16px;
`;

const CTADescription = styled.p`
  font-size: ${themeGet("fonts.sub_head.font_size")};
  margin-bottom: 40px;
`;
