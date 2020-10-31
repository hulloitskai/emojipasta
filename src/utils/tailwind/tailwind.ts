import { create } from "tailwind-rn"
import styles from "./styles.json"

import classNames from "classnames"
import { ClassValue } from "classnames/types"

const { tailwind, getColor } = create(styles)

export { getColor }
export default (...classes: ClassValue[]): Record<string, string> =>
  tailwind(classNames(...classes))
