import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const SingleArticle = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`flex flex-col rounded-md max-md:h-[24.6875rem] overflow-hidden`, className)}>{children}</div>
  )
}

export default SingleArticle