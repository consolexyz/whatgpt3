import gptLogo from "../../assets/logo.svg"
import "./footer.css"

function Footer() {
    return (<div className="gpt3_footer  section__padding">
        <div className="gpt3_footer_heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>
        <div className="gpt3_footer_btn">
            <p>Request Early Access</p>
        </div>

        <div className="gpt3_footer_links">
            <div className="gpt3_footer_links_logo">
                <img src={gptLogo} alt="logo" />
                <p> Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>

            <div className="gpt3_footer_links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contacts</p>
            </div>

            <div className="gpt3_footer_links_div">
                <h4>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>

            <div className="gpt3_footer_links_div">
                <h4>Get in touch</h4>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
            </div>


        </div>

        <div className="gpt3_footer_copyright">
            <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    </div>);
}

export default Footer;