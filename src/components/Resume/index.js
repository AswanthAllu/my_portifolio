import './index.css'
import { FaDownload } from "react-icons/fa6";
const Resume =()=>{
    return (

            <a href="/myResume.pdf" download="AswanthAllu_Resume.pdf" >
                <div className="resume-button-con fade-in-to-right ">
                    <div className='resume-button'>Resume</div>
                    <FaDownload size={25} />
                </div>
            </a>

    )
}
export default Resume