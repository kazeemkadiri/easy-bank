import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ArticleBodyPadding = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`px-[9.41%] max-lg:my-6`, className)}>{children}</div>
  )
}

export default ArticleBodyPadding