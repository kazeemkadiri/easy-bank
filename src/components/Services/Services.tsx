import ContainerPadding from "../ContainerPadding/ContainerPadding"
import SectionHeaderText from "../SectionHeaderText/SectionHeaderText"
import ServiceDescription from "./components/ServiceDescription"
import ServiceIcon from "./components/ServiceIcon"
import ServiceTitle from "./components/ServiceTitle"
import SingleService from "./components/SingleService"
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
  return (
    <ContainerPadding className="bg-[#F4F5F7]">
        <div className="w-full flex flex-col">
            <section className="header flex flex-col md:mt-24 max-md:mt-16 lg:w-[44.09%] md:max-lg:w-full">
                <ScrollAnimation animateIn="bounceInDown" className="max-md:flex max-md:flex-col max-md:items-center">
                    <SectionHeaderText className="max-md:text-center max-md:w-[80%] max-md:text-[2rem]">Why choose Easybank?</SectionHeaderText>
                <p className="md:leading[28px] md:tracking-[-0.281px] text-[var(--text-light-grey)] max-md:text-center">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </ScrollAnimation>
            </section>

            <section className="services lg:flex lg:flex-row md:mt-[4.5rem] md:mb-[5.875rem] max-lg:grid md:grid-cols-2 grid-cols-1 md:gap-[1.875rem] w-full relative max-md:mt-[3.5rem]">
                <ScrollAnimation animateIn="fadeInUp" className="relative max-md:block">
                <SingleService>
                    <ServiceIcon><img src="/images/icon-online.svg" className="h-full" alt="service icon" /></ServiceIcon>
                    <ServiceTitle className="mt-10">Online Banking</ServiceTitle>
                    <ServiceDescription className="mt-[1.625rem]">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</ServiceDescription>
                </SingleService>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={100} className="relative">
                <SingleService>
                    <ServiceIcon><img src="/images/icon-budgeting.svg" className="h-full" alt="service icon" /></ServiceIcon>
                    <ServiceTitle className="mt-10">Simple Budgeting</ServiceTitle>
                    <ServiceDescription className="mt-[1.625rem]">See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</ServiceDescription>
                </SingleService>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={300}>
                <SingleService>
                    <ServiceIcon><img src="/images/icon-onboarding.svg" className="h-full" alt="service icon" /></ServiceIcon>
                    <ServiceTitle className="mt-10">Fast Onboarding</ServiceTitle>
                    <ServiceDescription className="mt-[1.625rem]">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</ServiceDescription>
                </SingleService>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={500}>
                <SingleService>
                    <ServiceIcon><img src="/images/icon-api.svg" className="h-full" alt="service icon" /></ServiceIcon>
                    <ServiceTitle className="mt-10">Open API</ServiceTitle>
                    <ServiceDescription className="mt-[1.625rem]">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</ServiceDescription>
                </SingleService>
                </ScrollAnimation>
            </section>
        </div>
    </ContainerPadding>
  )
}

export default Services