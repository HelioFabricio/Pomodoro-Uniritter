import { useContext, useEffect, useState } from 'react'
import { CountDownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../pages/Home'

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } =
    useContext(CyclesContext)
  const [secondsAmountPassed, setSecondsAmountPassed] = useState(0)
  const totalInSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalInSeconds - secondsAmountPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes} : ${seconds}`
    } else {
      document.title = '00:00'
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (secondsDifference >= totalInSeconds) {
          markCurrentCycleAsFinished()
        }

        setSecondsAmountPassed(totalInSeconds)
        clearInterval(interval)
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalInSeconds, activeCycleId])
  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}
