import { Description, Percentage, Wrapper } from './header.styled'
import { Button } from '../../../components/button/button'
import { ChevronLeft } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'
import { TAppRoutesProps } from '../../../routes/routes'

export function Header({ percentage }: { percentage: string }) {
  const { navigate } = useNavigation<TAppRoutesProps>()
  return (
    <Wrapper variant={'diet-in'}>
      <Button
        onPress={() => navigate('home')}
        style={{
          alignSelf: 'flex-start',
        }}
        variant={'transparent'}
        icon={<ChevronLeft size={24} color={'black'} />}
      />
      <Percentage>{percentage}</Percentage>
      <Description>das refeições dentro da dieta.</Description>
    </Wrapper>
  )
}
