import { ScreenDescription } from '../../components/screen-description/screen-description'
import { Heading, Text } from '../../components/global.styles'
import { Badge } from '../../components/badge/badge'
import { DetailWrapper, Footer } from './meal-details.style'
import { Button } from '../../components/button/button'
import { SquarePen, Trash2 } from 'lucide-react-native'
import { IMeal } from '../meal-form/schema'
import { format } from 'date-fns'
import { deleteStoredMeal } from '../../utils/delete-stored-meal'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TAppRoutesProps } from '../../routes/routes'

export function MealDetails() {
  const { params } = useRoute()
  const { meal } = params as { meal: IMeal }
  const { navigate } = useNavigation<TAppRoutesProps>()
  const date = format(meal.date, 'dd/MM/yyyy')
  const hours = format(meal.hour, 'MM:ss')
  const dietInOut = meal.isHealthyFood ? 'Dentro da dieta' : 'Fora da dieta..'
  const dietColor = meal.isHealthyFood ? 'diet-in' : 'diet-out'

  return (
    <>
      <ScreenDescription variant={dietColor}>
        Detalhes da Refeição
      </ScreenDescription>
      <DetailWrapper>
        <Heading variant={'black'}>{meal.name}</Heading>
        <Text variant={'neutral'}>{meal.description}</Text>

        <Text variant={'black'}>Data e hora:</Text>
        <Text variant={'neutral'}>
          {date} às {hours}
        </Text>

        <Badge variant={dietColor}>{dietInOut}</Badge>
      </DetailWrapper>

      <Footer>
        <Button
          onPress={() =>
            navigate('mealForm', {
              mealToEdit: meal,
            })
          }
          icon={<SquarePen size={18} color={'white'} />}
          variant={'filled'}
        >
          Editar Refeição
        </Button>
        <Button
          onPress={() => deleteStoredMeal(meal.id, date)}
          icon={<Trash2 size={18} color={'black'} />}
          variant={'outlined'}
        >
          Excluir Refeição
        </Button>
      </Footer>
    </>
  )
}
