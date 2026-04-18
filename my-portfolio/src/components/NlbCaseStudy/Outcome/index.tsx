import Header from '../sharedComponents/Header'
import outcomeImage from '@/assets/nlbCaseStudy/outcome.png'
export default function Outcome() {
    const outcomeFindings = [
        {
            value: '70',
            boldtext: 'improvement',
            text: 'in task completion time for users to navigate the application.',
        },
        {
            value: '+22',
            boldtext: 'increase',
            text: 'in satisfaction level for the new design compared to the original design.',
        },
        {
            value: '+26',
            boldtext: 'increase',
            text: 'in ease in finding desired features and content.',
        },
    ]

    return (
        <div className="flex flex-col gap-12">
            <Header number="5" title="Outcome" />
            <div className="flex flex-col gap-24">
                <p className="text-gray-600">
                    We conducted usability testing on the redesigned application
                    to measure the effectiveness of the changes and found
                    significant improvements in user experience.
                </p>
                <div className="grid grid-cols-[2fr_3fr] gap-8">
                    <div className="grid w-2/3 grid-cols-1">
                        <h2 className="text-2xl font-bold">What we found :</h2>
                        {outcomeFindings.map((finding, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <h1 className="font-bold">{finding.value}%</h1>
                                <p className="text-gray-600">
                                    <span className="font-bold">
                                        {finding.boldtext}
                                    </span>{' '}
                                    {finding.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <img src={outcomeImage} alt="Post Booking Layout" />
                </div>
                <div className="flex flex-col gap-12">
                    <h2 className="text-4xl font-bold">Conclusion</h2>
                    <p className="text-gray-600">
                        The redesigned application has successfully addressed
                        the key issues identified in the original design,
                        resulting in a more intuitive and user-friendly
                        experience. The key improvements include a more
                        streamlined navigation, native integration of the seat
                        booking process, and a more informative confirmation
                        page.
                    </p>
                    <h2 className="text-4xl font-bold">Reflection</h2>
                    <p>
                        The creation of this case study has been a valuable
                        learning experience for me, as it allowed me to apply
                        the design process and principles I have learnt in a
                        real-world context. It also provided me with the
                        opportunity to work on a group project and collaborate
                        with others. Overall, I am proud of the outcome of this
                        project, and I look forward to applying what I have
                        learnt in future design projects.
                    </p>
                </div>
            </div>
        </div>
    )
}
