import seatBookingImage from '@/assets/nlbCaseStudy/booking-page.png'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLayerGroup,
    faHandPointer,
    faClock,
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../sharedComponent/Card'

export default function SeatBookingLayout() {
    const Arrow = () => (
        <div className="relative flex w-5/6 items-center border-b-4 border-gray-400">
            <FontAwesomeIcon
                className="absolute right-0 translate-x-1/3 translate-y-[2px] text-2xl text-gray-400"
                icon={faCaretRight}
            />
        </div>
    )

    const seatBookingCards = [
        {
            icon: faLayerGroup,
            title: 'Integrated',
            description:
                'Page comprises of bookings and collapsable seat map to allow for easy cross reference.',
        },
        {
            icon: faHandPointer,
            title: 'Interactive',
            description:
                'Added functional map for selecting library and seats for new users.',
        },
        {
            icon: faClock,
            title: 'Timeline',
            description:
                'Created a draggable timeslot to show available seats, as well as a “+/- 4hr” button to allow for easy selection for time.',
        },
    ]

    return (
        <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-12">
                <h2 className="text-4xl font-bold">Seat Booking</h2>
                <p className="text-gray-600">
                    The seat booking page in the original design was was not
                    integrated into the application and was a seperate webpage,
                    which made booking disjointed. The booking of seats also
                    required many back and forth taps to select the desired
                    seats, as well as a lack of visual timeline for available
                    seats.
                </p>
                <p>
                    In our redesign we aim to integrate the seat booking,
                    available timeslots and the seat map into a single, cohesive
                    interface, making the booking process more seamless and
                    intuitive, with a draggable tab that users toggle to
                    reference the seatmap and a dropdown for users that are more
                    experienced. The library map, seatmap and timeline are all
                    interactive, ensuring new users can easily see the location
                    of available seats.
                </p>
            </div>
            <img src={seatBookingImage} alt="Seat Booking Layout" />
            <div className="flex items-center justify-center">
                <Arrow />
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-8">
                {seatBookingCards.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}
