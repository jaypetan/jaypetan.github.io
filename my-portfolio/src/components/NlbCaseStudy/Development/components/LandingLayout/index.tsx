import landingImage from '@/assets/nlbCaseStudy/landing-page.png'
import { faBolt, faObjectGroup } from '@fortawesome/free-solid-svg-icons'
import Card from '../../sharedComponent/Card'
import FadeInOnLoad from '../../../sharedComponents/FadeInOnLoad'

export default function LandingLayout() {
    const landingDescription = [
        'The landing page in the original design was information-dense, which made it difficult for users to navigate around and find their desired page, and it required excessive scrolling and taps to get to their desired content.',
        'We redesigned the landing page to prioritize discoverability and navigation speed with clear section labeling, and introduced a prominent "Quick Actions" section that allows users to quickly access commonly used features.',
    ]

    const landingCards = [
        {
            icon: faBolt,
            title: 'Quick Actions',
            description:
                'Integrated a row at top of homepage as a shortcut for easy navigation to core pages.',
        },
        {
            icon: faObjectGroup,
            title: 'Defined Groups',
            description:
                'Implemented defined grouping and clear labeling to make it easier to navigate and find content.',
        },
    ]

    return (
        <div className="flex flex-col gap-12 sm:gap-24">
            <div className="flex flex-col gap-4 sm:gap-12">
                <h2 className="text-4xl font-bold">Landing Page</h2>
                <p>{landingDescription[0]}</p>
                <p>{landingDescription[1]}</p>
            </div>

            <div className="grid justify-items-center gap-8 sm:grid-cols-2">
                <img
                    src={landingImage}
                    alt="Landing Layout"
                    className="max-h-[500px] rounded-2xl object-cover shadow-lg sm:max-h-[1000px]"
                />
                <div className="grid items-center justify-center gap-2 sm:grid-cols-1 sm:gap-8">
                    {landingCards.map((card, index) => (
                        <FadeInOnLoad key={index} index={index}>
                            <Card
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        </FadeInOnLoad>
                    ))}
                </div>
            </div>
        </div>
    )
}
