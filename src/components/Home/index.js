import { Component} from "react";
import Resume from '../Resume'
import Footer from '../Footer'
import './index.css'

class Home extends Component{
    render(){
        return(
            <div>
                <div  className="home-bg fade-in-to-top">
                <img src="https://i.imgur.com/nX7fwVI.jpeg" alt="profile pic" className="profile-pic" />
                <h1 class=" ml-3 mt-3 head">Hey,I'm <span>Aswanth Allu</span></h1>
                        <p className="intro-para">Self-starting and resourceful B.Tech student and aspiring developer with a strong foundation in implementing front-end and back-end coding. Passionate about creating intuitive user experiences and database interactions that enhance functionality and usability. I thrive in collaborative environments, effectively communicating with both technical and non-technical team members.</p>
                </div> 
                <Resume />
            <Footer />
            </div>
        )
    }
}
export default Home