import Header from '../sharedComponents/Header'
import ConfirmationLayout from './components/ConfirmationLayout'
import LandingLayout from './components/LandingLayout'
import PostBookingLayout from './components/PostBookingLayout'
import SeatBookingLayout from './components/SeatBookingLayout'

export default function Development() {
    return (
        <div className="flex flex-col gap-12">
            <Header number="4" title="Development" />
            <div className="flex flex-col gap-24">
                <LandingLayout />
                <SeatBookingLayout />
                <ConfirmationLayout />
                <PostBookingLayout />
            </div>
        </div>
    )
}
