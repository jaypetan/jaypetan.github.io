import seatBookingImage from '@/assets/nlbCaseStudy/booking-page.png'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLayerGroup,
    faHandPointer,
    faClock,
    faCircle,
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../sharedComponent/Card'
import FadeInOnLoad from '../../../sharedComponents/FadeInOnLoad'

export default function SeatBookingLayout() {
    const Arrow = () => (
        <div className="relative flex w-3/4 items-center border-b-4 border-orange-400">
            <FontAwesomeIcon
                className="absolute right-0 translate-x-1/3 translate-y-[2px] text-2xl text-orange-400"
                icon={faCaretRight}
            />
            <FontAwesomeIcon
                className="absolute left-0 -translate-x-1/3 translate-y-[2px] text-2xl text-orange-400"
                icon={faCircle}
            />
        </div>
    )

    const seatBookingDescription = [
        'The seat booking page in the original design was not integrated into the application and was a seperate webpage, which made booking disjointed. The booking of seats required many back-and-forth taps to select the desired seats and there was also a lack of visual timeline for available seats.',
        'In our redesign we aim to integrate the seat booking, available timeslots and the seat map into a single, cohesive native interface, making the booking process more seamless and intuitive. We also added a draggable tab that users can toggle to reference the seatmap when needed and a dropdown for users that are more experienced. The library map, seatmap and timeline are all interactive, ensuring new users can easily see the location of available seats.',
    ]

    const seatBookingCards = [
        {
            icon: faLayerGroup,
            title: 'Integrated',
            description:
                'Merged the booking page with a collapsible seat map to allow for easy cross reference.',
        },
        {
            icon: faHandPointer,
            title: 'Interactive',
            description:
                'Engineered a functional map that enables users, especially new ones, to visually locate and select the library and seats.',
        },
        {
            icon: faClock,
            title: 'Timeline',
            description:
                'Created a draggable timeslot selector to show available seats, and a “+/- 4hr” shortcut to allow for efficient time selection.',
        },
    ]

    return (
        <div className="flex flex-col gap-12 sm:gap-24">
            <div className="flex flex-col gap-4 sm:gap-12">
                <h2 className="text-4xl font-bold">Seat Booking</h2>
                <p>{seatBookingDescription[0]}</p>
                <p>{seatBookingDescription[1]}</p>
            </div>
            <img src={seatBookingImage} alt="Seat Booking Layout" />
            <div className="flex items-center justify-center">
                <Arrow />
            </div>
            <div className="mx-auto grid grid-cols-1 gap-4 sm:gap-8 lg:grid-cols-3">
                {seatBookingCards.map((card, index) => (
                    <FadeInOnLoad key={index} index={index}>
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            hfull
                        />
                    </FadeInOnLoad>
                ))}
            </div>
        </div>
    )
}
