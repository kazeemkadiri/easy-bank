import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ArticleBody = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`mt-[0.5rem]`, className)}>{children}</div>
  )
}

export default ArticleBody