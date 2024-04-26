import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ArticleAuthor = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`text-[0.625rem] text-[var(--text-light-grey)] md:mt-6`, className)}>{children}</div>
  )
}

export default ArticleAuthor