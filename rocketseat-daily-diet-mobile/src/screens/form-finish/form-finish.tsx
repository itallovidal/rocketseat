import Happy from '../../assets/happy.svg'
import Sad from '../../assets/sad.svg'
import { Header, Wrapper } from './form-finish.style'
import { Heading, Text } from '../../components/global.styles'
import { Button } from '../../components/button/button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TAppRoutesProps } from '../../routes/routes'
import { useEffect } from 'react'
import { updateUserProfile } from '../../utils/update-user-profile'

export function FormFinish() {
  const { params } = useRoute()
  const { status } = params as { status: boolean }
  const { navigate } = useNavigation<TAppRoutesProps>()

  useEffect(() => {
    updateUserProfile(status).then(() => console.log('Perfil Atualizado.'))
  }, [])

  return (
    <Wrapper>
      {status ? <GoodMeal /> : <BadMeal />}
      <Button
        onPress={() => navigate('home')}
        style={{ marginTop: 48 }}
        variant={'filled'}
      >
        Ir para página inicial
      </Button>
    </Wrapper>
  )
}

function GoodMeal() {
  return (
    <>
      <Header>
        <Heading style={{ textAlign: 'center' }} variant={'diet-in'}>
          Continue assim!
        </Heading>
        <Text style={{ textAlign: 'center' }} variant={'neutral'}>
          Você continua dentro da dieta. Muito bem!
        </Text>
      </Header>
      <Happy />
    </>
  )
}

function BadMeal() {
  return (
    <>
      <Header>
        <Heading style={{ textAlign: 'center' }} variant={'diet-out'}>
          Que pena!
        </Heading>
        <Text style={{ textAlign: 'center' }} variant={'neutral'}>
          Você saiu da dieta dessa vez, mas continue se esforçando e não
          desista!
        </Text>
      </Header>
      <Sad />
    </>
  )
}
