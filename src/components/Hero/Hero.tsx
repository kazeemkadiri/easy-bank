
const Hero = () => {
  return (
    <div className="w-full lg:h-[41.25rem] md:h-[60rem] bg-[var(--hero-bg)] md:bg-[url('/images/hero-bg-desktop.png')] lg:bg-[position:right_center] md:bg-[length:160%_50%] md:bg-[position:left_-10rem_top_0rem] max-md:bg-[url('/images/hero-bg-mobile.png')] max-md:bg-[length:100%_50%] max-md:bg-[position:top_center] max-md:h-[41.9375rem] lg:bg-[length:51.25%_100%] bg-no-repeat relative z-0 flex md:flex-col-reverse md:justify-center items-center lg:flex-row lg:justify-between">
      
        <section className="hero-text lg:ml-[var(--desktop-padding)] lg:relative lg:w-[33.04%] md:max-lg:absolute md:w-[88.55%] md:max-lg:bottom-[3rem] max-lg:block max-md:top-40 max-md:relative max-md:text-center">
          
            <h3 className="md:text-[3.5rem] max-md:text-[2.5rem] font-light text-[var(--text-dark-grey)] md:leading-[1] max-md:text-center">Next generation digital banking</h3>
            
            <p className="md:text-[1.125rem] text-[var(--text-light-grey)] font-normal md:mt-[1.25rem] max-md:text-center max-md:mt-4 max-md:w-[88.55%] max-md:mx-auto">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>

            <button className="call-to-action md:mt-[2.25rem] max-md:mt-8 md:block text-white text-[0.875rem] rounded-[22px] text-center px-[34px] py-[0.5rem] bg-center max-lg:mx-auto">Request Invite</button>
          
        </section>
        

        <section className="hero-phones md:absolute md:bg-[url('/images/hero-phones-desktop.png')] lg:bg-[position:top_0rem_right_-130px] md:bg-cover md:bg-no-repeat lg:right-0 lg:w-[50%] md:w-[88.55%] md:h-[52rem] md:top-[-12rem] lg:h-[56.25rem] overflow-hidden"></section>

    </div>
  )
}

export default Hero