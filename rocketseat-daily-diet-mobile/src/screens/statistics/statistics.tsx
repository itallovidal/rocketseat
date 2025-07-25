import { StatsWrapper, Wrapper } from './statistics.style'
import { Header } from './header/header'
import { Text } from '../../components/global.styles'
import { StatsCard } from './card/stats-card'
import { useRoute } from '@react-navigation/native'
import { toPercentage } from '../../utils/to-percentage'

export function Statistics() {
  const { params } = useRoute()
  const { stats } = params as { stats: Omit<IProfile, 'picture' | 'name'> }
  console.log(stats)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, percentageText] = toPercentage(stats.dietIn, stats.dietOut)

  return (
    <Wrapper>
      <Header percentage={percentageText} />

      <StatsWrapper>
        <Text style={{ marginBottom: 12 }} variant={'neutral'}>
          Estatísticas Gerais
        </Text>

        <StatsCard
          variant={'neutral'}
          info={{
            title: stats.bestSequence.toString(),
            description: 'Melhor Sequência de pratos dentro da dieta.',
          }}
        />

        <StatsCard
          variant={'neutral'}
          info={{
            title: stats.meals.toString(),
            description: 'Refeições Registradas',
          }}
        />
        <StatsCard
          variant={'diet-in'}
          info={{
            title: stats.dietIn.toString(),
            description: 'Refeições dentro da dieta',
          }}
        />

        <StatsCard
          variant={'diet-out'}
          info={{
            title: stats.dietOut.toString(),
            description: 'Refeições fora da dieta',
          }}
        />
      </StatsWrapper>
    </Wrapper>
  )
}
