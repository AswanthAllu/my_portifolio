import { Component} from "react";
import Footer from '../Footer'
import './index.css'

const certificatesTabsList=[
    {
        tabId:'technical',
        displayText:'Technical'
    },
    {
        tabId:'nonTechnical',
        displayText:'Non-Technical'
    }
]
const certificatesList=[
    {
        id:'c1',
        imgUrl:'https://media.licdn.com/dms/image/v2/D4E2DAQFwJjTJGvJc8Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1710776879156?e=1737298800&v=beta&t=fnbXN8DnFUJYRrCe8HMDmoAhrYRtmOjOTvuWdDdoqYU',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/static-website?id=NSBNAVRFZN'
    },
    {
        id:'c2',
        imgUrl:'https://media.licdn.com/dms/image/v2/D4E2DAQHYituMaMpI-g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1710777128599?e=1737298800&v=beta&t=GMTY4FYDrEAVTOyuzSzXfV-vf9dUx2RWnUj7YnSY0W8',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=SSSCOQXRFV'
    },
    {
        id:'c3',
        imgUrl:'https://media.licdn.com/dms/image/v2/D4E2DAQHsJEVMv7bV0Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1710777343658?e=1737298800&v=beta&t=pIPsFDxxCFx2LP1WG4EQbXDRoZO2HpB_wm-RWBXvAhI',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/dynamic-web-application?id=AHGVDTBRCE'
    },
    {
        id:'c4',
        imgUrl:'https://media.licdn.com/dms/image/v2/D562DAQGXWZKZnu-jCQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1713020365864?e=1737298800&v=beta&t=J4NezdfPG28nVsZM-gOYC6gmPSOlMPbXvjZNmjekaxY',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/introduction-to-databases?id=SXTGXCLFNM'
    },
    {
        id:'c5',
        imgUrl:'https://media.licdn.com/dms/image/v2/D562DAQEGrJo4sPlBAg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720436422191?e=1737298800&v=beta&t=DCXTFhrMYrs4l-yL-GcexrEinYtOLwFzehv7srmqK2E',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/javascript-essentials?id=ZDEBRWTANN'
    },
    {
        id:'c6',
        imgUrl:'https://media.licdn.com/dms/image/v2/D562DAQF_Soa9im0nmg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724597775290?e=1737298800&v=beta&t=rQnol8TyEBtQJ3x5hPURag22P6bPm9xkMpOXjODIudE',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/developer-foundations?id=KWLAEUXISA'
    },
   
    {
        id:'c7',
        imgUrl:'https://media.licdn.com/dms/image/v2/D562DAQEBExiDTHALKg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1721266130743?e=1737298800&v=beta&t=qokUjAnxtrKaj0sFcL6ScihGQU4hLuVIVQwqUiq2txY',
        category:'technical',
        certificateLink:'https://www.linkedin.com/in/jaya-aswanth-allu/details/certifications/1721266484221/single-media-viewer/?profileId=ACoAAD0lscoBjUYDwnt7UjPXI7H5dm_zHo5qf1U'
    },
    {
        id:'c8',
        imgUrl:'https://media.licdn.com/dms/image/v2/D562DAQGTX0SgAcYnHQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720437601217?e=1737298800&v=beta&t=Wz8bzjYK8cyfA5ehwefp9PHmBBF5cmbC9kmq1Y5-kEM',
        category:'technical',
        certificateLink:'https://cdn1.ccbp.in/misc/da-workshop-completion-certificate/HUM87X4XYZ.png'
    },
    {
        id:'c9',
        imgUrl:'https://media.licdn.com/dms/image/v2/D562DAQHyNv04YLTk5w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720436945506?e=1737298800&v=beta&t=Rp9z_LklUsn8VsUStoUPVDgojhC1mZEuzykjb5QAmRo',
        category:'technical',
        certificateLink:'https://cdn1.ccbp.in/misc/aws-workshop-completion-certificate/G082G1NCZU.png'
    },
    {
        id:'c10',
        imgUrl:'https://media.licdn.com/dms/image/v2/D5622AQGxKk9b2t6wcA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726322103257?e=1739404800&v=beta&t=W_GY2622GQup8TPv_BikyHT8LsZ6_R76fLnwAw2sMsg',
        category:'nonTechnical',
        certificateLink:'https://media.licdn.com/dms/image/v2/D5622AQGxKk9b2t6wcA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726322103257?e=1739404800&v=beta&t=W_GY2622GQup8TPv_BikyHT8LsZ6_R76fLnwAw2sMsg'
    },
    {
        id:'c11',
        imgUrl:'https://media.licdn.com/dms/image/v2/D5622AQHGSBzkuBx3DA/feedshare-shrink_800/feedshare-shrink_800/0/1711352999812?e=1739404800&v=beta&t=6L75bDwK3p_Z8Eufw4jG9YVMjfypa7VMQzlFBes5cKo',
        category:'nonTechnical',
        certificateLink:'https://media.licdn.com/dms/image/v2/D5622AQHGSBzkuBx3DA/feedshare-shrink_800/feedshare-shrink_800/0/1711352999812?e=1739404800&v=beta&t=6L75bDwK3p_Z8Eufw4jG9YVMjfypa7VMQzlFBes5cKo'
    },
    {
        id:'c12',
        imgUrl:'https://i.imgur.com/7iJmNlc.jpeg',
        category:'nonTechnical',
        certificateLink:'https://drive.google.com/file/d/1P41t15-FHKr35PPrLmi8hjES1ld1EJad/view?usp=drivesdk'
    },

    

    
]
class Certificates extends Component{
    state = {
        activeTabId: certificatesTabsList[0].tabId,
      };
      updateTablIdFn = (id) => {
        this.setState({ activeTabId: id });
      };
    render(){
    const { activeTabId } = this.state;
    const filteredCertificatesList = certificatesList.filter(
        (each) => activeTabId === each.category
      );
        return(
            <div>
                <div className="certi-bg">
                    <h1>My Certificates</h1>
                    <div className="tabs-con">
          {certificatesTabsList.map((eachTab) => (
            <h2
              key={eachTab.tabId}
              className={
                eachTab.tabId === activeTabId ? "activeTab" : "unActiveTab"
              }
              onClick={() => this.updateTablIdFn(eachTab.tabId)}
            >
              {eachTab.displayText}
            </h2>
          ))}
        </div>
        <div className="certificates-items-con mb-5" >
           {
              filteredCertificatesList.map(each => (
                <a href ={each.certificateLink} target="__blanck" >
                      <img src={each.imgUrl} alt="certificate" className="certificate-image fade-in-to-top" /> 
                </a>
               
              ))
           }
        </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Certificates