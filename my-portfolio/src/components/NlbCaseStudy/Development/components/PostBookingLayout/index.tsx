import postBookingImage from '@/assets/nlbCaseStudy/post-booking.png'
import Card from '../../sharedComponent/Card'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft'

export default function PostBookingLayout() {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-12">
                <h2 className="text-4xl font-bold">Post Booking</h2>
                <p className="text-gray-600">
                    The confirmation page was designed to provide users with a
                    clear and concise summary of their booking details,
                    including the booked seats and timing. This allows users to
                    easily confirm that their booking was successful and
                    provides them with the necessary information for their
                    visit.
                </p>
                <div className="grid grid-cols-[2fr_3fr] gap-8">
                    <div className="flex items-center justify-center">
                        <Card
                            icon={faClockRotateLeft}
                            title="Previous Bookings"
                            description="Created a page for users to check for upcoming and past seat bookings."
                        />
                    </div>
                    <img src={postBookingImage} alt="Post Booking Layout" />
                </div>
            </div>
        </div>
    )
}
