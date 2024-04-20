import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  HomeContainer,
  CountDownContainer,
  FormContainer,
  TaskInput,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
} from './styles'
import { useState } from 'react'

export function Home() {
    const { register, handleSubmit, watch } = useForm()
    function handleCreateNewCycle(data: any) {
      console.log(data)
    }
    const task = watch('task')
    const isSubmitDisabled = !task
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em: </label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para a tarefa"
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="A3 - engenharia"></option>
            <option value="A3 - inglês instrumental"></option>
            <option value="Estudar React"></option>
            <option value="Tempo para leitura"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante: </label>
          <MinutesAmountInput
            type="number"
            step={5}
            min={5}
            max={60}
            id="minutesAmount"
            placeholder="00"
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
