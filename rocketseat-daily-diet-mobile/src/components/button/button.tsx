import { ButtonVariantStyle, Text, Wrapper } from './button.style'
import { TouchableOpacityProps } from 'react-native'
import { ReactNode } from 'react'

interface ButtonProps extends TouchableOpacityProps {
  children?: string
  icon?: ReactNode
  variant?: ButtonVariantStyle
}

export function Button({ children, variant, icon, ...props }: ButtonProps) {
  return (
    <Wrapper variant={variant || 'filled'} {...props}>
      {icon && icon}
      {children && <Text variant={variant || 'filled'}>{children}</Text>}
    </Wrapper>
  )
}
