import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const SectionHeaderText = ({className, children}: ICommonProps) => {
  return (
    <h3 className={cn(`text-[var(--text-dark-grey)] md:text-[2.5rem] md:leading-[64px]`, className)}>{children}</h3>
  )
}

export default SectionHeaderText