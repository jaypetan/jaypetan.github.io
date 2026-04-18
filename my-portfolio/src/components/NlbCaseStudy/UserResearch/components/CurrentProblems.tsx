import CurrentProblem from '@/assets/nlbCaseStudy/current-problems.png'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CurrentProblems() {
    const problems = [
        { id: 1, description: 'Ineffective landing page' },
        { id: 2, description: 'Poor information presentation' },
        { id: 3, description: 'Lack of integration' },
        { id: 4, description: 'Awkward navigation flow' },
    ]

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4 text-end">
                <h3 className="text-gray-400">
                    What are the current problems?
                </h3>
                <ul className="list-none space-y-2 pl-5 text-end text-gray-600">
                    {problems.map((problem) => (
                        <li
                            key={problem.id}
                            className="flex flex-row items-center justify-end gap-4"
                        >
                            <p className="text-2xl! font-bold">
                                {problem.description}
                            </p>
                            <FontAwesomeIcon
                                icon={faCaretLeft}
                                className="text-xl text-gray-600"
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <img
                src={CurrentProblem}
                alt="Current Problems"
                className="lg:row-end-1"
            />
        </div>
    )
}
