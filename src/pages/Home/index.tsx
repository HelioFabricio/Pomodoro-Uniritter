import { Play } from 'phosphor-react'
import {
  HomeContainer,
  CountDownContainer,
  FormContainer,
  TaskInput,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em: </label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para a tarefa"
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
        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
