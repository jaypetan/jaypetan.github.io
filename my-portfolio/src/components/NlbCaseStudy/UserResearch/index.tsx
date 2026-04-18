import Header from '../sharedComponents/Header'
import CurrentProblems from './components/CurrentProblems'
import WhySeatBooking from './components/WhySeatBooking'

export default function UserResearch() {
    return (
        <div className="flex flex-col gap-12">
            <Header number="3" title="User Research" />
            <p>
                We conducted 2 surveys and 3 rounds of key interview sessions to
                iteratively gather insights that clarify research objectives,
                understand user needs, and identify pain points.
            </p>
            <h2 className="font-bold">Key Findings :</h2>
            <div className="flex flex-col gap-24">
                <WhySeatBooking />
                <CurrentProblems />
            </div>
        </div>
    )
}
