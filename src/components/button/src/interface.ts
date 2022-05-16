export type ButtonSize = 'small' | 'default'

export type ButtonType = 'default' | 'primary'

export type IconType =
  | 'icon-jiahao'
  | 'icon-sousuo'
  | 'icon-icon-test1'
  | 'icon-jiazai_shuaxin'

export interface Props {
  type: ButtonType
  disabled: boolean
  round: boolean
  icon: IconType
  size: ButtonSize
}
