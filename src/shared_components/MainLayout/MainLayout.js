import { useNavigate } from 'react-router-dom';
import './MainLayout.css'

const MainLayout = () => {
  const history = useNavigate();
   const arr = Array.apply(null, Array(12)).map(function (item,ind) {return "Page " + ind})
  return <div className="MainLayout" >
    <div className="">
       <h2>Today's Top Stories</h2>
    </div>
    <div className="mainlayout-card-block">
      {
        arr?.map((b,index) => {
          return  <div className="mainlayout-cards" onClick={()=>history({
            pathname: "/blog",
            search: `?id=${b}`,
          })
          }
          >
            <div className="mainlayout-card-img" key={index}>
          <img
            src="https://www.mydomaine.com/thmb/xgKunfcTO1W6KsjT7hP4hPke4Ss=/380x251/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fall-design-trends-12-katie-leclercq-artist-01fe1f74822143c6a32042d7d808e157.jpeg"
            alt="not found"
            height="100%"
            width="100%"
          />
        </div>
           <div className="mainlayout-card-content">
          <div className="mainlayout-card-content-heading">
            <span>Home Trends</span>
          </div>
          <div className="card-title">
            Title
          </div>
             <div className="card-desc">
            Description
          </div>
           </div>
      </div>  
   
        })
      }
  </div>
  </div>
};
export default MainLayout;