import { List } from './day-meal-list.styled'
import { MealCard } from './meal-card/meal-card'
import { Text } from '../../../../components/global.styles'

import { IMeal } from '../../../meal-form/schema'
import { IMealList } from '../../../../utils/store-new-meal'

interface IDayMealList {
  storedMeals: IMealList[]
}
export function DayMealList({ storedMeals }: IDayMealList) {
  console.log('Refeições')
  console.log(storedMeals)

  if (!storedMeals) {
    return <></>
  }

  return (
    <List
      contentContainerStyle={{
        gap: 12,
      }}
      sections={storedMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: { item: IMeal }) => <MealCard info={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text variant={'black'}>{title}</Text>
      )}
    />
  )
}
