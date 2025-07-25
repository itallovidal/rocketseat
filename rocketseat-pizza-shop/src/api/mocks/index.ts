import { setupWorker } from 'msw/browser'
import { env } from '@/env.ts'
import { signInMock } from '@/api/mocks/signInMock.ts'
import { registerRestaurantMock } from '@/api/mocks/registerRestaurantMock.ts'
import { getDayOrdersAmountMock } from '@/api/mocks/getDayOrdersAmountMock.ts'
import { getMonthOrdersAmountMock } from '@/api/mocks/getMonthOrdersAmountMock.ts'
import { getCanceledOrdersAmountMock } from '@/api/mocks/getCanceledOrdersAmountMock.ts'
import { getMonthRevenueMock } from '@/api/mocks/getMonthRevenueMock.ts'
import { getDailyRevenueInPeriodMock } from '@/api/mocks/getDailyRevenueInPeriodMock.ts'
import { getPopularProductsMock } from '@/api/mocks/getPopularProductsMock.ts'
import { getProfileMock } from '@/api/mocks/getProfileMock.ts'
import { getManagedRestaurantMock } from '@/api/mocks/getManagedRestaurantMock.ts'
import { updateProfileMock } from '@/api/mocks/updateProfileMock.ts'
import { getOrdersMock } from '@/api/mocks/getOrdersMock.ts'
import { getOrderDetailsMock } from '@/api/mocks/getOrderDetails.ts'
import { approveOrdersMock } from '@/api/mocks/approveOrdersMock.ts'
import { cancelOrdersMock } from '@/api/mocks/cancelOrdersMock.ts'
import { deliverOrdersMock } from '@/api/mocks/deliverOrdersMock.ts'
import { dispatchOrdersMock } from '@/api/mocks/dispatchOrdersMock.ts'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getCanceledOrdersAmountMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrdersMock,
  cancelOrdersMock,
  deliverOrdersMock,
  dispatchOrdersMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
