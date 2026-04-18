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
                <div>
                    <p className="text-gray-600">
                        We conducted usability testing on the redesigned
                        application and found significant improvements in user
                        experience.
                    </p>
                    <p>Some key findings from the testing include:</p>
                </div>
                <div className="grid grid-cols-[2fr_3fr] gap-8">
                    <div className="grid w-2/3 grid-cols-1">
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
                    <h2 className="text-4xl font-bold">Concluding Remarks</h2>
                    <p className="text-gray-600">
                        The aim of this redesign was to enhance the overall user
                        experience and address the pain points identified in the
                        initial user research and testing phases. The redesigned
                        application has received largely positive feedback from
                        users, with many noting the improved clarity and ease of
                        use. The results indicate that the redesign was
                        successful in achieving these goals.
                    </p>
                    <p>
                        The creation of this case studty has been a valuable
                        learning experience for me, as it allowed me to apply
                        the design process and principles I have learned in a
                        real-world context. It also provided me with the
                        opportunity to work on a group project and collaborate
                        with others. Overall, I am proud of the work we have
                        done and the outcome of this project, and I look forward
                        to applying what I have learned in future design
                        projects.
                    </p>
                </div>
            </div>
        </div>
    )
}
