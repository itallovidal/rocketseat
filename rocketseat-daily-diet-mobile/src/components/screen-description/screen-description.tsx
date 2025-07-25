import { Description, Wrapper } from './screen-description.style'
import { Button } from '../button/button'
import { ChevronLeft } from 'lucide-react-native'
import { TDietStyle } from '../global.styles'
import { useNavigation } from '@react-navigation/native'
import { TAppRoutesProps } from '../../routes/routes'

interface IScreenDescriptionProps {
  children: string
  variant: TDietStyle
}

export function ScreenDescription({
  children,
  variant,
}: IScreenDescriptionProps) {
  const { goBack } = useNavigation<TAppRoutesProps>()

  return (
    <Wrapper variant={variant}>
      <Button
        onPress={() => goBack()}
        variant={'transparent'}
        style={{ width: 12 }}
        icon={<ChevronLeft size={24} color={'black'} />}
      />
      <Description>{children}</Description>
    </Wrapper>
  )
}
