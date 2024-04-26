import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ArticleDescription = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`text-[var(--text-light-grey)] text-[0.8125rem] leading-[18px] tracking-[-0.203px] mt-[0.5rem]`, className)}>{children}</div>
  )
}

export default ArticleDescription