import { useNavigate } from 'react-router-dom';
import './MainLayout.css'
import Banner from "../../shared_components/Banner/Banner";

const MainLayout = () => {
  const history = useNavigate();
   const arr = Array.apply(null, Array(12)).map(function (item,ind) {return "Page " + ind})
  return <>
            <Banner/>
    <div className="MainLayout" >
    <div className="">
       <h2>Today's Top Stories</h2>
    </div>
    <div className="mainlayout-card-block">
      {
        arr?.map((b,index) => {
          return <div className="mainlayout-cards"
          key={index}
            onClick={() => history({
            pathname: "/blog",
            search: `?id=${b}`,
          })
          }
          >
            <div className="mainlayout-card-img"
            >
          <img
            src="https://source.unsplash.com/random"
                alt="not found"
                width="100%"
                
          />
        </div>
           <div className="mainlayout-card-content">
          <div className="mainlayout-card-content-heading">
            <span>Home Trends</span>
          </div>
          <div className="card-category">
            Category
          </div>
             <div className="card-desc">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur fermentum massa, ut volutpat justo maximus convallis. Vivamus nec neque in erat lobortis egestas ac sed orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sit amet lacinia elit, vitae pharetra lectus. Pellentesque efficitur a neque vitae ultrices.


          </div>
           </div>
      </div>  
   
        })
      }
  </div>
  </div>
</>
};
export default MainLayout;