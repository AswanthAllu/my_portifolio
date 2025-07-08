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
        imgUrl:'https://media-content.ccbp.in/certificates/share/NSBNAVRFZN.png',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/static-website?id=NSBNAVRFZN'
    },
    {
        id:'c2',
        imgUrl:'https://media-content.ccbp.in/certificates/share/SSSCOQXRFV.png',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=SSSCOQXRFV'
    },
    {
        id:'c3',
        imgUrl:'https://media-content.ccbp.in/certificates/share/AHGVDTBRCE.png',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/dynamic-web-application?id=AHGVDTBRCE'
    },
    {
        id:'c4',
        imgUrl:'https://media-content.ccbp.in/certificates/share/SXTGXCLFNM.png',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/introduction-to-databases?id=SXTGXCLFNM'
    },
    {
        id:'c5',
        imgUrl:'https://media-content.ccbp.in/certificates/share/ZDEBRWTANN.png',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/javascript-essentials?id=ZDEBRWTANN'
    },
    {
        id:'c6',
        imgUrl:'https://media-content.ccbp.in/certificates/share/KWLAEUXISA.png',
        category:'technical',
        certificateLink:'https://certificates.ccbp.in/academy/developer-foundations?id=KWLAEUXISA'
    },
   
    {
        id:'c7',
        imgUrl:'https://i.imgur.com/w6wO3eU.png',
        category:'technical',
        certificateLink:'https://www.linkedin.com/in/jaya-aswanth-allu/details/certifications/1721266484221/single-media-viewer/?profileId=ACoAAD0lscoBjUYDwnt7UjPXI7H5dm_zHo5qf1U'
    },
    {
        id:'c8',
        imgUrl:'https://cdn1.ccbp.in/misc/da-workshop-completion-certificate/HUM87X4XYZ.png',
        category:'technical',
        certificateLink:'https://cdn1.ccbp.in/misc/da-workshop-completion-certificate/HUM87X4XYZ.png'
    },
    {
        id:'c9',
        imgUrl:'https://cdn1.ccbp.in/misc/aws-workshop-completion-certificate/G082G1NCZU.png',
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
                <a href ={each.certificateLink} target="_blank" >
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