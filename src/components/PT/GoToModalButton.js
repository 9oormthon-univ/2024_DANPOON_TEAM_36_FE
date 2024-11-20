import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import themeGet from '../../utils/themeGet';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const GoToModalButton = ({ color, size }) => {
  const [isOpen, setIsOpen] = useState(false); // 메뉴 열기/닫기 상태
  const [openModal, setOpenModal] = useState(false); // 모달 열기/닫기 상태
  const [iconColor, setIconColor] = useState(color);  

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-wrapper')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEdit = () => {
    setIsOpen(false); // 메뉴 닫기
  };

  const handleDelete = () => {
    console.log('삭제');
    setIsOpen(false); // 메뉴 닫기
    setOpenModal(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setOpenModal(false); // 모달 닫기
  };

  const handleConfirmDelete = () => {
    console.log('삭제 확정');
    setOpenModal(false); // 모달 닫기
  };

  return (
    <MenuWrapper>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <BiDotsVerticalRoundedIcon color={iconColor} size={size} />
      </MenuButton>

      {isOpen && (
        <Menu>
          <MenuItem onClick={handleEdit}>수정</MenuItem>
          <MenuItem onClick={handleDelete}>삭제</MenuItem>
        </Menu>
      )}


    </MenuWrapper>
  );
};

export default GoToModalButton;

const MenuWrapper = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const BiDotsVerticalRoundedIcon = styled(BiDotsVerticalRounded)`
  color: ${({ color }) => color || 'white'};
`;

const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: -40px;
  width: 80px;
  height: 56px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid ${themeGet('color.neutral_300')};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 50%; // 높이 기준 절반 위치
    left: 0;
    width: 100%; // 가로선 전체 너비
    height: 1px; // 선의 두께
    background-color: ${themeGet('color.neutral_300')}; // 선 색상
  }
`;

const MenuItem = styled.button`
  width: 100%;
  height: 28px;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: ${themeGet('color.neutral_400')};
  background-color: ${themeGet('color.white')};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${themeGet('color.neutral_300')};
    color: ${themeGet('color.white')}
  }
`;
