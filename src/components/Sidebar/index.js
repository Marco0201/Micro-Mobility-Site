import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="locations" onClick={toggle}>
                        Locations
                    </SidebarLink>
                    <SidebarLink to="safety" onClick={toggle}>
                        Safety
                    </SidebarLink>
                    <SidebarLink to="fleet" onClick={toggle}>
                        Fleet
                    </SidebarLink>
                    <SidebarLink to="careers" onClick={toggle}>
                        Careers
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signup">
                        Sign Up
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar