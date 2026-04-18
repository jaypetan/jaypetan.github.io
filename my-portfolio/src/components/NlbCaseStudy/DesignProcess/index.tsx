import Header from '../sharedComponents/Header'
import ProcessCard from './components/ProcessCard'
import {
    faLaptopCode,
    faLightbulb,
    faUsers,
} from '@fortawesome/free-solid-svg-icons'
import FadeInOnLoad from '../sharedComponents/FadeInOnLoad'

export default function DesignProcess() {
    // Staggered offsets for the process cards
    const staggeredOffsets = [
        'lg:mt-0 lg:mb-[240px]',
        'lg:mt-[120px] lg:mb-[120px]',
        'lg:mt-[240px] lg:mb-0',
    ]

    const researchObjectives = [
        'To understand the existing problems in the NLB mobile application, and the user needs of secondary and tertiary students.',
        'In order to achieve the research objectives, we followed a user-centered design process that consisted of three main stages: empathize, ideate and develop.',
    ]

    const processSteps = [
        {
            icon: faUsers,
            title: 'Empathize',
            description:
                'Investigate user needs and define problems users face in the NLB mobile application.',
            whatWeDid: [
                '→ Conducted attitudinal & behavioral testing via surveys, interviews and usability tests.',
                '→ User pain point identification.',
            ],
        },
        {
            icon: faLightbulb,
            title: 'Ideate',
            description:
                'Develop ideas for improvements and ways to develop based on the data collected.',
            whatWeDid: [
                '→ Rapid idea generation for potential solutions.',
                '→ User Journey Mapping to visualize user flows.',
                '→ Hybrid Card Sorting for information architecture.',
            ],
        },
        {
            icon: faLaptopCode,
            title: 'Develop',
            description:
                'Create iterative prototypes to showcase visual design and functionality of the modified application.',
            whatWeDid: [
                '→ Low-Fi Visual Wireframing for structure and layout.',
                '→ High-Fi Interactive Prototyping for functionality and user testing.',
            ],
        },
    ]

    return (
        <div className="flex flex-col gap-4 sm:gap-12">
            <Header number="2" title="Design Process" />
            <div>
                <h2 className="font-bold">Research Objectives :</h2>
                <p>{researchObjectives[0]}</p>
            </div>

            <p>{researchObjectives[1]}</p>

            <div className="grid grid-cols-1 justify-items-center gap-8 lg:grid-cols-3">
                {processSteps.map((step, index) => (
                    <FadeInOnLoad key={index} index={index}>
                        <ProcessCard
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            whatWeDid={step.whatWeDid}
                            className={staggeredOffsets[index] ?? 'lg:mt-0'}
                        />
                    </FadeInOnLoad>
                ))}
            </div>
        </div>
    )
}
