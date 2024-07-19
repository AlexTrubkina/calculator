import { ReactElement } from 'react'
import './OperationsSignature.scss'
const OperationsSignature = ({text}: {text: string}): ReactElement => {
    return (
        <label className="signature">
            {text}
        </label>
    )
}

export default OperationsSignature