import { Description, Icon, Percentage, Wrapper } from './diet-percentage.style'
import { ChevronRight } from 'lucide-react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { TAppRoutesProps } from '../../../../routes/routes'
import { useCallback, useState } from 'react'
import { Text } from 'react-native'
import { toPercentage } from '../../../../utils/to-percentage'
import { syncUserProfile } from '../../../../utils/sync-user-profile'

export function DietPercentage() {
  const { navigate } = useNavigation<TAppRoutesProps>()
  const [profile, setProfile] = useState<IProfile | null>(null)

  useFocusEffect(
    useCallback(() => {
      syncUserProfile().then((data) => setProfile(data))
    }, []),
  )

  console.log(profile)

  if (!profile) return <Text>Carregando..</Text>

  const [percentage, percentageText] = toPercentage(
    profile.dietIn,
    profile.dietOut,
  )

  return (
    <Wrapper
      onPress={() =>
        navigate('statistics', {
          stats: profile,
        })
      }
      variant={percentage > 50 ? 'diet-in' : 'diet-out'}
    >
      <Icon>
        <ChevronRight size={32} color={'black'} />
      </Icon>
      <Percentage>{percentageText}</Percentage>
      <Description> das refeições dentro da dieta.</Description>
      <Description> Total de {profile.meals} refeições.</Description>
    </Wrapper>
  )
}
