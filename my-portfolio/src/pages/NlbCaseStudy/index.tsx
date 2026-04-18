import Footer from '../../components/footer'
import DesignProcess from '../../components/NlbCaseStudy/DesignProcess'
import Development from '../../components/NlbCaseStudy/Development'
import Hero from '../../components/NlbCaseStudy/Hero'
import Outcome from '../../components/NlbCaseStudy/Outcome'
import ProblemStatement from '../../components/NlbCaseStudy/ProblemStatement'
import UserResearch from '../../components/NlbCaseStudy/UserResearch'

export default function NlbCaseStudy() {
    return (
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-8 sm:gap-32 sm:px-8 lg:px-12">
            <Hero />
            <ProblemStatement />
            <DesignProcess />
            <UserResearch />
            <Development />
            <Outcome />
            <Footer />
        </div>
    )
}
