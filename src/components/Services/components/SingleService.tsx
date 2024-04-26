import { ICommonProps } from "@/interfaces/general";
import { cn } from "@/lib/utils";

const SingleService = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`flex flex-col items-start max-md:mb-8 max-md:mx-auto`, className)}>
        {children}
    </div>
  )
}

export default SingleService