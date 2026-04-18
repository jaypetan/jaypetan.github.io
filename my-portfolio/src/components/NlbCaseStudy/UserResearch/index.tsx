import Header from '../sharedComponents/Header'
import CurrentProblems from './components/CurrentProblems'
import WhySeatBooking from './components/WhySeatBooking'

export default function UserResearch() {
    return (
        <div className="flex flex-col gap-12">
            <Header number="3" title="User Research" />
            <div className="flex flex-col gap-24">
                <h2 className="font-bold">Key Findings</h2>
                <WhySeatBooking />
                <CurrentProblems />
            </div>
        </div>
    )
}
