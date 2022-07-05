export type OptionsItem = {
  label: string
  value: any
  [propName: string]: any
}

export type Options = Array<OptionsItem>

export function getLabel(
  options: Options,
  value: OptionsItem['value']
): OptionsItem['label'] {
  return options.find(item => item.value === value)
    ?.label as OptionsItem['label']
}
