import React from 'react'
import {
  Logo,
  // ProfileImage,
  // ProfileImageWrapper,
  Wrapper,
} from './header.style'
// import ProfilePlaceholderImage from '../../assets/profile-placeholder.jpg'
import DailyDietLogo from '../../assets/Logo.png'

export function Header() {
  return (
    <Wrapper>
      <Logo source={DailyDietLogo} />
      {/* <ProfileImageWrapper> */}
      {/*  <ProfileImage source={ProfilePlaceholderImage} /> */}
      {/* </ProfileImageWrapper> */}
    </Wrapper>
  )
}
