import postBookingImage from '@/assets/nlbCaseStudy/post-booking.png'
import Card from '../../sharedComponent/Card'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft'

export default function PostBookingLayout() {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-12">
                <h2 className="text-4xl font-bold">Booking Management</h2>
                <p className="text-gray-600">
                    We created dedicated pages for users to check for upcoming
                    and past seat bookings. This allows users to easily check
                    their booking details and history, and also allows them to
                    quickly access their upcoming booking details before their
                    visit, reducing the need for referencing email receipts.
                </p>
                <div className="grid grid-cols-[2fr_3fr] gap-8">
                    <div className="flex items-center justify-center">
                        <Card
                            icon={faClockRotateLeft}
                            title="Previous Bookings"
                            description="Created dedicated pages for users to check for upcoming and past seat bookings."
                        />
                    </div>
                    <img src={postBookingImage} alt="Post Booking Layout" />
                </div>
            </div>
        </div>
    )
}
