import Header from '../sharedComponents/Header'
import outcomeImage from '@/assets/nlbCaseStudy/outcome.png'
export default function Outcome() {
    const outcomeDescription = `We conducted usability testing on the redesigned application to measure the effectiveness of the changes and found significant improvements in user experience.`

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

    const conclusion = `The redesigned application has successfully addressed the key issues identified in the original design, resulting in a more intuitive and user-friendly experience. The key improvements include a more streamlined navigation, native integration of the seat booking process, and a more informative confirmation page.`
    const reflection = `The creation of this case study has been a valuable learning experience for me, as it allowed me to apply the design process and principles I have learnt in a real-world context. It also provided me with the opportunity to work on a group project and collaborate with others. Overall, I am proud of the outcome of this project, and I look forward to applying what I have learnt in future design projects.`

    return (
        <div className="flex flex-col gap-4 sm:gap-12">
            <Header number="5" title="Outcome" />
            <div className="flex flex-col gap-12 sm:gap-24">
                <p>{outcomeDescription}</p>

                <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
                    <div className="grid grid-cols-1 gap-2 sm:gap-8 lg:w-2/3">
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
                    <img
                        src={outcomeImage}
                        alt="Post Booking Layout"
                        className="rounded-2xl shadow-lg"
                    />
                </div>

                <div className="flex flex-col gap-4 sm:gap-12">
                    <h2 className="text-4xl font-bold">Conclusion</h2>
                    <p className="text-gray-600">{conclusion}</p>
                    <h2 className="text-4xl font-bold">Reflection</h2>
                    <p>{reflection}</p>
                </div>
            </div>
        </div>
    )
}
