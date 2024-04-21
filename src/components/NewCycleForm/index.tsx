import { useForm } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function NewCycleForm() {
  const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
  })

  type NewCycleFormData = zod.infer<typeof newCycleValidationSchema>

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: { task: '', minutesAmount: 0 },
  })

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em: </label>
      <TaskInput
        id="task"
        disabled={!!activeCycle}
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
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
