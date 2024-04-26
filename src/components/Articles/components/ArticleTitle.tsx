import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"

const ArticleTitle = ({className, children}: ICommonProps) => {
  return (
    <div className={cn(`text-base text-[var(--text-dark-grey)] font-normal leading-[20px] tracking-[-0.286px] hover:text-[var(--active-selection)]`, className)}>{children}</div>
  )
}

export default ArticleTitle