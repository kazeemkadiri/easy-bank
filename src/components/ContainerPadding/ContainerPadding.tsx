import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ContainerPadding = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`w-full md:xl:px-[var(--desktop-padding)] px-[var(--mobile-padding)]`, className)}>{children}</div>
  )
}

export default ContainerPadding