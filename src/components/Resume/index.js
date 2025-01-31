import './index.css'
import { FaDownload } from "react-icons/fa6";
const Resume =()=>{
    return (

            <a href="https://drive.google.com/file/d/127dgiw-qfYBeG-XFwiPidOC0sgkdLdOy/view?usp=drivesdk"  >
                <div className="resume-button-con fade-in-to-right ">
                    <div className='resume-button'>Resume</div>
                    <FaDownload size={25} />
                </div>
            </a>

    )
}
export default Resume