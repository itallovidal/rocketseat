import { Description, Hour, Wrapper, Dot } from './ meal-card.style'
import { IMeal } from '../../../../meal-form/schema'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'
import { TAppRoutesProps } from '../../../../../routes/routes'

interface IMealCardProps {
  info: IMeal
}

export function MealCard({ info }: IMealCardProps) {
  const status = info.isHealthyFood ? 'diet-in' : 'diet-out'
  const date = format(info.hour, 'HH:mm')
  const { navigate } = useNavigation<TAppRoutesProps>()

  function handlePress() {
    navigate('mealDetails', {
      meal: info,
    })
  }

  return (
    <Wrapper onPress={handlePress}>
      <Hour>{date}</Hour>
      <Description>{info.name}</Description>
      <Dot variant={status} />
    </Wrapper>
  )
}
