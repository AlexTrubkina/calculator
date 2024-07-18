import './OperationsSignature.scss'
const OperationsSignature = ({text}: {text: string}): React.ReactElement => {
    return (
        <label className="signature">
            {text}
        </label>
    )
}

export default OperationsSignature