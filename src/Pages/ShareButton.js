import './ShareButton.css'
import IconSHare from './share.png'
import { FaShareAlt } from 'react-icons/fa'
const ShareButton = () => {

    return(
        <>
        <div className="shareBtn">
            <img src={IconSHare} alt='icon' className='shareIcon' />
        </div>
        <div className="extra">
            <div className="extraItem"></div>
            <div className="extraItem"></div>
            <div className="extraItem"></div>
            <div className="extraItem"></div>

        </div>
        </>
    )
}

export default ShareButton;