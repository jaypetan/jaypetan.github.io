import Header from '../sharedComponents/Header'

export default function ProblemStatement() {
    return (
        <div className="flex flex-col gap-4 sm:gap-12">
            <Header number="1" title="Problem Statement" />
            <h1 className="text-justify sm:leading-20 lg:text-7xl!">
                “ How might we improve the{' '}
                <span className="font-bold text-orange-400">
                    seat booking experience
                </span>{' '}
                for <span className="font-bold">student users</span> of the
                National Library Board (NLB) mobile application ? ”
            </h1>
        </div>
    )
}
