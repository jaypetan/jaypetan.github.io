import UserFlowImage from '@/assets/nlbCaseStudy/user-flow.png'

export default function UserFlowLayout() {
    return (
        <div className="flex flex-col gap-12">
            <h2 className="text-4xl font-bold">User Flow</h2>
            <img src={UserFlowImage} alt="User Flow" />
        </div>
    )
}
