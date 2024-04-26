import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ArticleImage = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`w-full h-[12.5rem]`, className)}>{children}</div>
  )
}

export default ArticleImage