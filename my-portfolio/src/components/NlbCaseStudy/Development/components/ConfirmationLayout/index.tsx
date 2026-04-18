import confirmationImage from '@/assets/nlbCaseStudy/confirmation-page.png'
import Card from '../../sharedComponent/Card'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'

export default function ConfirmationLayout() {
    return (
        <div className="flex flex-col gap-12">
            <h2 className="text-4xl font-bold">Confirmation</h2>
            <p className="text-gray-600">
                The confirmation page was designed to provide users with a clear
                and concise summary of their booking details, including the
                booked seats and timing. This allows users to easily confirm
                that their booking was successful and provides them with the
                necessary information for their visit.
            </p>
            <div className="grid grid-cols-2 gap-8">
                <img src={confirmationImage} alt="Confirmation Layout" />
                <div className="flex items-center justify-center">
                    <Card
                        icon={faCheckCircle}
                        title="Confirmation"
                        description="Displays seat booked and timing to show confirmation of booking "
                    />
                </div>
            </div>
        </div>
    )
}
