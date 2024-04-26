import { ICommonProps } from "@/interfaces/general"
import { cn } from "@/lib/utils"
import ContainerPadding from "../ContainerPadding/ContainerPadding"

const Footer = ({className}: ICommonProps) => {
  return (
    <div className={cn(`w-full bg-[var(--text-dark-grey)] h-auto md:pt-12 md:pb-12`, className)}>
        
        <ContainerPadding className="md:h-[5.9375rem] flex md:flex-row md:justify-between flex-col items-center gap-[0.3125rem] h-auto">
            
            <section className="flex flex-col items-center md:justify-between md:h-full md:w-fit h-auto max-md:mt-10 max-md:gap-8">
                <img src="/images/logo-white.svg" className="h-[1.25rem]" alt="site logo" />
                <p className="flex flex-row h-[1.25rem] gap-[0.6rem]">
                    <img src="/images/icon-facebook.svg" alt="facebook icon" />
                    <img src="/images/icon-youtube.svg" alt="youtube icon" />
                    <img src="/images/icon-twitter.svg" alt="twitter icon" />
                    <img src="/images/icon-pinterest.svg" alt="pinterest icon" />
                    <img src="/images/icon-instagram.svg" alt="instagram icon" />
                </p>
            </section>

            <section className="h-full md:py-[0.3125rem] md:w-fit lg:ml-[9%] max-md:mt-8 max-md:gap-2">
                <ul className="decoration-transparent flex flex-col justify-between h-full max-md:text-center max-md:gap-2">
                    <li><a href="#" className="text-white">About Us</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                    <li><a href="#" className="text-white">Blog</a></li>
                </ul>
            </section>

            <section className="h-full md:py-[0.3125rem] md:w-fit lg:ml-[9%] max-md:mt-2 max-md:gap-2 max-md:text-center">
                <ul className="decoration-transparent flex flex-col justify-between h-full max-md:gap-2">
                    <li><a href="#" className="text-white">Careers</a></li>
                    <li><a href="#" className="text-white">Support</a></li>
                    <li><a href="#" className="text-white">Privacy Policy</a></li>
                </ul>
            </section>

            <section className="flex flex-col items-end justify-start lg:ml-[22.22%] max-md:mt-8 max-md:text-center max-md:block">
            <button className="call-to-action md:block text-white text-[0.875rem] rounded-[22px] text-center px-[34px] py-[0.5rem] bg-center max-md:mx-auto">Request Invite</button>
                <p className="text-white text-[0.9375rem] max-md:mx-auto mt-6 max-md:mb-10">© Easybank. All Rights Reserved</p>
            </section>
        </ContainerPadding>
    </div>
  )
}

export default Footer