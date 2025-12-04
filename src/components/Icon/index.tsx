import iconSvg from '@/assets/icon.svg'
import './index.css'

export default function Icon() {
    return (
        <div className="icon-container">
            <img className="icon" src={iconSvg} alt="icon" />
        </div>
    )
}
