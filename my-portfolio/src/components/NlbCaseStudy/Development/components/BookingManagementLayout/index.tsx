import postBookingImage from '@/assets/nlbCaseStudy/post-booking.png'
import Card from '../../sharedComponent/Card'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft'
import FadeInOnLoad from '../../../sharedComponents/FadeInOnLoad'

export default function PostBookingLayout() {
    const postBookingDescription = [
        'We created dedicated pages for users to check for upcoming and past seat bookings. This allows users to easily check their booking details and history, and also allows them to quickly access their upcoming booking details before their visit, reducing the need for referencing email receipts.',
    ]

    const postBookingCards = [
        {
            icon: faClockRotateLeft,
            title: 'Previous Bookings',
            description:
                'Created dedicated pages for users to check for upcoming and past seat bookings.',
        },
    ]

    return (
        <div className="flex flex-col gap-4 sm:gap-12">
            <h2 className="text-4xl font-bold">Booking Management</h2>
            <p>{postBookingDescription[0]}</p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_3fr]">
                <div className="flex items-center justify-center">
                    <FadeInOnLoad>
                        <Card
                            icon={postBookingCards[0].icon}
                            title={postBookingCards[0].title}
                            description={postBookingCards[0].description}
                        />
                    </FadeInOnLoad>
                </div>
                <img
                    className="row-end-1 shadow-lg sm:row-end-auto"
                    src={postBookingImage}
                    alt="Post Booking Layout"
                />
            </div>
        </div>
    )
}
