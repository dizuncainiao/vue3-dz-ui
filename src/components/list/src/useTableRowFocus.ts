import { ref } from 'vue'

export const showFocusMask = ref(false)
const focusTime = ref(0)
const FOCUS_TIME = 2
let timer: number | null = null

export function enterHandler(e: MouseEvent) {
  timer = window.setInterval(() => {
    focusTime.value++
    console.log(focusTime.value)
    if (focusTime.value === FOCUS_TIME) {
      clearInterval(timer as number)
      ;(e.target as HTMLTableRowElement).classList.add('focused')
      showFocusMask.value = true
      // console.log(focusTime.value, '添加 class');
    }
  }, 1000)
}

export function leaveHandler(e: MouseEvent) {
  clearInterval(timer as number)
  ;(e.target as HTMLTableRowElement).classList.remove('focused')
  showFocusMask.value = false
  focusTime.value = 0
  console.log(focusTime.value)
}
