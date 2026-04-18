import Header from '../sharedComponents/Header'
import ConfirmationLayout from './components/ConfirmationLayout'
import LandingLayout from './components/LandingLayout'
import PostBookingLayout from './components/BookingManagementLayout'
import SeatBookingLayout from './components/SeatBookingLayout'
import UserFlowLayout from './components/UserFlowLayout'

export default function Development() {
    return (
        <div className="flex flex-col gap-8 sm:gap-12">
            <Header number="4" title="Development" />
            <div className="flex flex-col gap-12 sm:gap-24">
                <UserFlowLayout />
                <LandingLayout />
                <SeatBookingLayout />
                <ConfirmationLayout />
                <PostBookingLayout />
            </div>
        </div>
    )
}
