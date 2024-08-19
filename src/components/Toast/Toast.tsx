import './Toast.scss'

const Toast = ({message}: {message: string}) => {
    return (
        <div className="Toast">
            {message}
        </div>
    )
}

export default Toast