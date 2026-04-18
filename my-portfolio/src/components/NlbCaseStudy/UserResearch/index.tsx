import Header from '../sharedComponents/Header'

export default function UserResearch() {
    const keyFindings = [
        {
            value: 85,
            text: (
                <>
                    Of students that use the NLB mobile application{' '}
                    <span className="font-bold">
                        use the seat booking function
                    </span>
                </>
            ),
        },
        {
            value: 75,
            text: (
                <>
                    Of users found that seat booking function is the{' '}
                    <span className="font-bold">highest-impact</span> issue that
                    needs to be improved in the NLB mobile application
                </>
            ),
        },
    ]

    return (
        <div className="flex flex-col gap-12">
            <Header number="3" title="User Research" />
            <h2 className="font-bold">Key Findings</h2>
            <div>
                <h3 className="mb-8 text-gray-400">Why seat booking?</h3>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {keyFindings.map((finding, index) => (
                        <div
                            key={index}
                            className="grid grid-rows-[1fr_1fr_1fr] gap-4"
                        >
                            <div className="flex items-end justify-between">
                                <h1 className="font-bold">{finding.value}%</h1>
                            </div>
                            <p className="text-gray-600">{finding.text}</p>
                            <div
                                className="h-8 w-full overflow-hidden rounded-full bg-gray-200"
                                role="progressbar"
                                aria-valuenow={finding.value}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={`Key finding ${finding.value} percent`}
                            >
                                <div
                                    className="h-full rounded-full bg-orange-400 transition-all duration-700"
                                    style={{ width: `${finding.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
