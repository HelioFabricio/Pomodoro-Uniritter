import alertSound from '../assets/alert-finished-cycle.wav'

export function checkNotificationPermission(requestIfDenied = true) {
  if (!('Notification' in window)) {
    alert('Este navegador não suporta notificações de desktop')
    return false
  } else if (Notification.permission === 'granted') {
    return true
  } else if (requestIfDenied && Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      return permission === 'granted'
    })
  }
  return false
}

export function sendNotification(title: string, options?: NotificationOptions) {
  if (Notification.permission === 'granted') {
    // eslint-disable-next-line no-new
    new Notification(title, options)

    const audio = new Audio(alertSound)
    audio
      .play()
      .catch((error) =>
        console.error('Erro ao tentar tocar o som da notificação:', error),
      )
  }
}
