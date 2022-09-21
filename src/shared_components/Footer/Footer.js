import './Footer.css'
import TextField from "@mui/material/TextField";

const Footer = () => {

  return <>
    <div className="footer">
      <div className="footer_container1">
        <div className="footer-block"
        >
          <div >
            <div className="news_letter">Subscribe to our News Letter</div>
            <TextField
        inputProps={{
          placeholder: "Enter your Email",
          style: {
            color: "white",
            fontWeight: "bold",
            height: 10,
            border: "1px solid #FFF",
            borderRadius: "5px"
          }
        }}
      />
            <input className="custom_button" type="button" value="Subscribe"/>
            
          </div>
        </div>
      </div>
      <div className="footer_container2">
        <div className="footer-block"
        >

          <div className="footer_container2_div">
            <div>
              <div  className="ui">
              <div className="li">Category 1</div>
              <div className="li">Category 2</div>
              <div className="li">Category 3</div>
              <div className="li">Category 4</div>
              <div className="li">Category 5</div>
              <div className="li">Category 6</div>
              <div className="li">Category 7</div>
              </div>
            </div>
            <div>
              <div  className="ui">
              <div  className="li">Link 1</div>
              <div  className="li">Link 2</div>
              <div  className="li">Link 3</div>
              <div  className="li">Link 4</div>
              <div  className="li">Link 5</div>
              </div>
            </div>
            <div>
              <div  className="ui">
              <div  className="li">Address 1</div>
              <div  className="li">Address 2</div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  </>
};
export default Footer;