import landingImage from '@/assets/nlbCaseStudy/landing-page.png'
import { faBolt, faObjectGroup } from '@fortawesome/free-solid-svg-icons'
import Card from '../../sharedComponent/Card'

export default function LandingLayout() {
    const landingCards = [
        {
            icon: faBolt,
            title: 'Quick Actions',
            description:
                'Added row at top of homepage for easy navigation to frequent pages.',
        },
        {
            icon: faObjectGroup,
            title: 'Defined Groups',
            description:
                'Added labels and and grouping to elements to make it easier to navigate and find content.',
        },
    ]

    return (
        <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-12">
                <h2 className="text-4xl font-bold">Landing</h2>
                <p className="text-gray-600">
                    The landing page in the original design was very
                    information-dense, which made it difficult for users to
                    navigate around and find their desired page, and it required
                    alot of scrolling and taps to get to the desired content. We
                    redesigned the landing page to be more concise and easier to
                    navigate, with clear sections with labels, and a prominent
                    quick actions section that allows users to quickly access
                    the most commonly used features.
                </p>
            </div>
            <div className="grid grid-cols-2 justify-items-center gap-8">
                <img
                    src={landingImage}
                    alt="Landing Layout"
                    className="max-h-[1000px] rounded-2xl object-cover shadow-lg"
                />
                <div className="grid grid-cols-1 items-center justify-center gap-8">
                    {landingCards.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
