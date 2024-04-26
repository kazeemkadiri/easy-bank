import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ServiceTitle = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`md:text-[1.5rem] text-[var(--text-dark-grey)] max-md:text-[1.25rem] max-md:text-center w-full font-light`, className)}>{children}</div>
  )
}

export default ServiceTitle