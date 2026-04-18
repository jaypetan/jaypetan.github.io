export default function WhySeatBooking() {
    const keyFindings = [
        {
            value: 85,
            text: (
                <>
                    Of students that use the NLB mobile application{' '}
                    <span className="font-bold">
                        use the seat booking function.
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
                    needs to be improved in the NLB mobile application.
                </>
            ),
        },
    ]

    return (
        <div>
            <h3 className="mb-4 text-gray-400 sm:mb-12">
                Why focus on seat booking?
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                {keyFindings.map((finding, index) => (
                    <div
                        key={index}
                        className="grid grid-rows-[1fr_1fr] gap-4 lg:gap-12"
                    >
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold">{finding.value}%</h1>
                            <p className="text-gray-600">{finding.text}</p>
                        </div>
                        <div
                            className="h-8 w-full overflow-hidden rounded-full bg-orange-200 shadow-lg sm:h-12"
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
    )
}
