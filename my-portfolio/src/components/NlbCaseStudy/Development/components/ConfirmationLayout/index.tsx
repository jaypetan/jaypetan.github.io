import confirmationImage from '@/assets/nlbCaseStudy/confirmation-page.png'
import Card from '../../sharedComponent/Card'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'

export default function ConfirmationLayout() {
    const confirmationDescription = [
        'We transitioned from the current external email confirmation to a native page. The confirmation page is designed to provide users an immediate and clear summary of their booking details, including the booked seats and timing. This allows users to easily verify that their booking at a glance before their visit.',
    ]

    const confirmationCards = [
        {
            icon: faCheckCircle,
            title: 'Confirmation',
            description:
                'Displays essential booking details and confirms the booking.',
        },
    ]

    return (
        <div className="flex flex-col gap-4 sm:gap-12">
            <h2 className="text-4xl font-bold">Confirmation</h2>
            <p>{confirmationDescription[0]}</p>

            <div className="grid gap-2 sm:grid-cols-2 sm:gap-8">
                <img src={confirmationImage} alt="Confirmation Layout" />
                <div className="flex items-center justify-center">
                    <Card
                        icon={confirmationCards[0].icon}
                        title={confirmationCards[0].title}
                        description={confirmationCards[0].description}
                    />
                </div>
            </div>
        </div>
    )
}
