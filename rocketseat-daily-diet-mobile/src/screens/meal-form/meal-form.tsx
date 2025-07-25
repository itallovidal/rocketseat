import { ScreenDescription } from '../../components/screen-description/screen-description'
import {
  DateChoosed,
  DateTimeWrapper,
  Form,
  HourChoosed,
  Input,
  InputWrapper,
  IsDietInListWrapper,
  Label,
} from './meal-form.style'
import { useTheme } from 'styled-components'
import { Button } from '../../components/button/button'
import { DotIcon } from '../../components/dot-icon/dot-icon'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IMeal, IMealSchema, mealSchema } from './schema'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { addHours, format, subDays } from 'date-fns'
import { storeNewMeal } from '../../utils/store-new-meal'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TAppRoutesProps } from '../../routes/routes'
import { updateStoredMeal } from '../../utils/update-stored-meal'

export function MealForm() {
  const theme = useTheme()
  const { navigate } = useNavigation<TAppRoutesProps>()
  const { params } = useRoute()
  const routeParams = params as { mealToEdit: IMeal } | undefined

  const defaultValues = routeParams?.mealToEdit
    ? {
        ...routeParams?.mealToEdit,
        date: new Date(routeParams!.mealToEdit.date),
        hour: new Date(routeParams!.mealToEdit.hour),
      }
    : {
        date: new Date(),
        hour: addHours(new Date(), -3),
      }

  const isEditing = !!routeParams?.mealToEdit

  const { control, handleSubmit, setValue, watch } = useForm<IMealSchema>({
    resolver: zodResolver(mealSchema),
    defaultValues,
  })

  async function submitMeal(data: IMealSchema) {
    if (isEditing) {
      console.log('Atualizando nova refeição..')

      await updateStoredMeal(
        routeParams.mealToEdit.id,
        routeParams.mealToEdit.date,
        data,
      )

      navigate('home')
      return
    }

    console.log('Criando nova refeição..')
    await storeNewMeal(data)

    navigate('mealFormFinish', {
      status: data.isHealthyFood,
    })
  }

  const datePicked = format(watch('date'), 'dd/MM/yyyy')
  const hoursPicked = format(watch('hour'), 'HH:mm')
  console.log('---')
  console.log(hoursPicked)

  const isHealthyFood = watch('isHealthyFood')
  console.log(isHealthyFood)

  function showDatePicker() {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: (_, date) => {
        if (date) setValue('date', date)
      },
      mode: 'date',
      is24Hour: true,
      minimumDate: subDays(new Date(), 1),
    })
  }

  function showHourPicker() {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: (_, date) => {
        if (date) setValue('hour', date)
      },
      mode: 'time',
      is24Hour: true,
    })
  }

  return (
    <>
      <ScreenDescription variant={'neutral'}>Nova Refeição</ScreenDescription>
      <Form>
        <Controller
          control={control}
          name={'name'}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputWrapper>
              <Label>Nome</Label>
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={'O que comeu hoje?'}
                placeholderTextColor={theme.colors.gray300}
              />
            </InputWrapper>
          )}
        />

        <Controller
          control={control}
          name={'description'}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputWrapper>
              <Label>Descrição</Label>
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                multiline={true}
                numberOfLines={6}
                textAlignVertical={'top'}
                placeholder={'Como foi a refeição de hoje?'}
                placeholderTextColor={theme.colors.gray300}
              />
            </InputWrapper>
          )}
        />

        <DateTimeWrapper>
          <InputWrapper style={{ flex: 1 }}>
            <Label>Data</Label>
            <DateChoosed onPress={showDatePicker}>{datePicked}</DateChoosed>
          </InputWrapper>

          <InputWrapper style={{ width: '50%' }}>
            <Label>Hora</Label>
            <HourChoosed onPress={showHourPicker}>{hoursPicked}</HourChoosed>
          </InputWrapper>
        </DateTimeWrapper>

        <IsDietInListWrapper>
          <Label style={{ width: '100%' }}>Está dentro da Dieta?</Label>
          <Button
            onPress={() => setValue('isHealthyFood', true)}
            style={{ flex: 1 }}
            icon={<DotIcon variant={'diet-in'} />}
            variant={isHealthyFood ? 'diet-in' : 'light'}
          >
            Sim
          </Button>
          <Button
            onPress={() => setValue('isHealthyFood', false)}
            style={{ flex: 1 }}
            icon={<DotIcon variant={'diet-out'} />}
            variant={isHealthyFood === false ? 'diet-out' : 'light'}
          >
            Não
          </Button>
        </IsDietInListWrapper>
      </Form>
      <Button
        onPress={handleSubmit(submitMeal)}
        style={{ marginBottom: 16, marginHorizontal: 16 }}
      >
        {isEditing ? 'Editar Refeição' : 'Cadastrar Refeição'}
      </Button>
    </>
  )
}
