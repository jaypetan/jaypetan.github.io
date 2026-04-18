import Footer from '../../components/footer'
import DesignProcess from '../../components/NlbCaseStudy/DesignProcess'
import Development from '../../components/NlbCaseStudy/Development'
import Hero from '../../components/NlbCaseStudy/Hero'
import Outcome from '../../components/NlbCaseStudy/Outcome'
import ProblemStatement from '../../components/NlbCaseStudy/ProblemStatement'
import UserResearch from '../../components/NlbCaseStudy/UserResearch'

export default function NlbCaseStudy() {
    return (
        <div className="mx-auto flex max-w-[1440px] flex-col gap-32 px-12">
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
