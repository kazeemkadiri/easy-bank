import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ServiceIcon = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`md:h-[4.5rem] text-start max-md:flex max-md:justify-center w-full`, className)}>{children}</div>
  )
}

export default ServiceIcon