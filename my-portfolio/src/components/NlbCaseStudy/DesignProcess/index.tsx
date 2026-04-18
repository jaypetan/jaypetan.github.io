import Header from '../sharedComponents/Header'
import ProcessCard from './components/ProcessCard'
import {
    faLaptopCode,
    faLightbulb,
    faUsers,
} from '@fortawesome/free-solid-svg-icons'

export default function DesignProcess() {
    const staggeredOffsets = [
        'lg:mt-0 lg:mb-[240px]',
        'lg:mt-[120px] lg:mb-[120px]',
        'lg:mt-[240px] lg:mb-0',
    ]

    const processSteps = [
        {
            icon: faUsers,
            title: 'Empathize',
            description:
                'Investigate user needs and identify pain points and define problems they face.',
            whatWeDid: [
                '→ Attitudinal & Behavioral Testing through surveys, interviews and usability tests.',
                '→ User Pain Point Identification',
            ],
        },
        {
            icon: faLightbulb,
            title: 'Ideate',
            description:
                'Find improvements and ways to develop from the data collected',
            whatWeDid: [
                '→ Hybrid Card Sorting',
                '→ User Journey Mapping',
                '→ Idea generation',
            ],
        },
        {
            icon: faLaptopCode,
            title: 'Develop',
            description:
                'Iterative prototyping to showcase design and functionality',
            whatWeDid: [
                '→ Low-Fi Visual Wireframing',
                '→ High-Fi Interactive Prototyping',
            ],
        },
    ]

    return (
        <div className="flex flex-col gap-12">
            <Header number="2" title="Design Process" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {processSteps.map((step, index) => (
                    <ProcessCard
                        key={index}
                        icon={step.icon}
                        title={step.title}
                        description={step.description}
                        whatWeDid={step.whatWeDid}
                        className={staggeredOffsets[index] ?? 'lg:mt-0'}
                    />
                ))}
            </div>
        </div>
    )
}
