import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Classic Beef-ksh 380</SidebarLink>
        <SidebarLink to='/'>Beef Cheese-ksh480</SidebarLink>
        <SidebarLink to='/'>Beef Bacon-ksh530</SidebarLink>
        <SidebarLink to='/'>Beef Bacon Cheese-ksh630</SidebarLink>
        <SidebarLink to='/'>Double Beef Bacon Cheese-ksh630</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now-0790907545</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
