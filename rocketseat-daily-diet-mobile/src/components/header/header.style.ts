import styled from 'styled-components/native'

export const Wrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
})

export const Logo = styled.Image({
  resizeMode: 'contain',
})

export const ProfileImage = styled.Image({
  resizeMode: 'cover',
  width: '100%',
  height: '100%',
})

export const ProfileImageWrapper = styled.View({
  overflow: 'hidden',
  width: '40px',
  height: '40px',
  borderRadius: '50px',
})
