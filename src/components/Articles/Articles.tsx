import ContainerPadding from "../ContainerPadding/ContainerPadding"
import SectionHeaderText from "../SectionHeaderText/SectionHeaderText"
import ArticleAuthor from "./components/ArticleAuthor"
import ArticleBody from "./components/ArticleBody"
import ArticleBodyPadding from "./components/ArticleBodyPadding"
import ArticleDescription from "./components/ArticleDescription"
import ArticleImage from "./components/ArticleImage"
import ArticleTitle from "./components/ArticleTitle"
import SingleArticle from "./components/SingleArticle"

import ScrollAnimation from "react-animate-on-scroll"

const Articles = () => {
  return (
    <ContainerPadding className="md:pb-20">
        
        <ScrollAnimation animateIn="bounceInDown">
            <SectionHeaderText className="md:mt-[5rem] max-md:mt-[5.5rem] max-md:mb-8 max-md:text-[2rem]">Latest Articles</SectionHeaderText>
        </ScrollAnimation>

        <div className="w-full lg:flex lg:flex-row md:grid md:grid-cols-2 md:justify-between md:gap-[2%]">
            <ScrollAnimation animateIn="fadeInRight">
            <SingleArticle>
                <ArticleImage className="bg-[url('/images/image-currency.jpg')] bg-cover overflow-hidden" />
                <ArticleBodyPadding>
                    <ArticleAuthor>By Claire Robinson</ArticleAuthor>
                    <ArticleBody>
                        <ArticleTitle>Receive money in any currency with no fees</ArticleTitle>
                        <ArticleDescription>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …</ArticleDescription>
                    </ArticleBody>
                </ArticleBodyPadding>
            </SingleArticle>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInRight" delay={100}>
            <SingleArticle>
                <ArticleImage className="bg-[url('/images/image-restaurant.jpg')] bg-cover overflow-hidden" />
                <ArticleBodyPadding>
                    <ArticleAuthor>By Wilson Hutton</ArticleAuthor>
                    <ArticleBody>
                        <ArticleTitle>Treat yourself without worrying about money</ArticleTitle>
                        <ArticleDescription>Tour simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</ArticleDescription>
                    </ArticleBody>
                </ArticleBodyPadding>
            </SingleArticle>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInRight" delay={200}>
            <SingleArticle>
                <ArticleImage className="bg-[url('/images/image-plane.jpg')] bg-cover overflow-hidden" />
                <ArticleBodyPadding>
                    <ArticleAuthor>By Wilson Hutton</ArticleAuthor>
                    <ArticleBody>
                        <ArticleTitle>Take your Easybank card wherever you go</ArticleTitle>
                        <ArticleDescription>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …</ArticleDescription>
                    </ArticleBody>
                </ArticleBodyPadding>
            </SingleArticle>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInRight" delay={300}>
            <SingleArticle>
            <ArticleImage className="bg-[url('/images/image-confetti.jpg')] bg-cover overflow-hidden" />
                <ArticleBodyPadding>
                    <ArticleAuthor>By Claire Robinson</ArticleAuthor>
                    <ArticleBody>
                        <ArticleTitle>Our invite-only Beta accounts are now live!</ArticleTitle>
                        <ArticleDescription>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</ArticleDescription>
                    </ArticleBody>
                </ArticleBodyPadding>
            </SingleArticle>
            </ScrollAnimation>
        </div>
    </ContainerPadding>
  )
}

export default Articles