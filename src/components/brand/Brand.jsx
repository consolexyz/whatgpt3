import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import "./brand.css"



function Brand() {
    return (
        <div className="gpt3_brand section_padding">
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div>
            <div>
                <img src={atlassian} alt="atlassian" />
            </div>
            <div>
                <img src={dropbox} alt="dropbopx" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
        </div>
    );
}

export default Brand;

