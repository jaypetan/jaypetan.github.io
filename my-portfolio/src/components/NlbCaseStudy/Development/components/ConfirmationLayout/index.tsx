import confirmationImage from '@/assets/nlbCaseStudy/confirmation-page.png'
import Card from '../../sharedComponent/Card'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'

export default function ConfirmationLayout() {
    return (
        <div className="flex flex-col gap-12">
            <h2 className="text-4xl font-bold">Confirmation</h2>
            <p className="text-gray-600">
                We transitioned from the current external email confirmation to
                a native page. The confirmation page is designed to provide
                users an immediate and clear summary of their booking details,
                including the booked seats and timing. This allows users to
                easily verify that their booking at a glance before their visit.
            </p>
            <div className="grid grid-cols-2 gap-8">
                <img src={confirmationImage} alt="Confirmation Layout" />
                <div className="flex items-center justify-center">
                    <Card
                        icon={faCheckCircle}
                        title="Confirmation"
                        description="Displays essential booking details and confirms the booking."
                    />
                </div>
            </div>
        </div>
    )
}
