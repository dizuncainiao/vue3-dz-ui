/**
 * 绑定事件
 * @param target
 * @param type
 * @param listener
 */
export function addEvent(
  target: Element | Document,
  type: keyof DocumentEventMap,
  listener: EventListenerOrEventListenerObject
): void {
  target.addEventListener(type, listener)
}

/**
 *
 * @param target 移除事件
 * @param type
 * @param listener
 */
export function removeEvent(
  target: Element | Document,
  type: keyof DocumentEventMap,
  listener: EventListenerOrEventListenerObject
): void {
  target.removeEventListener(type, listener)
}
