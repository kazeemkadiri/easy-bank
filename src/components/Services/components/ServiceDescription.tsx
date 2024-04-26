import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ServiceDescription = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`md:text-base text-[var(--text-light-grey)] max-md:text-[0.9375rem] max-md:text-center font-light md:leading-[26px]`, className)}>{children}</div>
  )
}

export default ServiceDescription