import './NotFound.css'
import react from "react"

function NotFound() {
    const [state,setState] = react.useState({height:"0vh",display:"flex",opacity:"0"})
    react.useEffect(() => {
        setState({ height:"100vh",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign: "center", opacity:"1", transition:"all 1.5s" })
    },[])
    return (
        <div style={state} >
            <img
                style={{ width: "250px", borderRadius: "50%", boxShadow: "6px 8px 12px black" }}
                src="https://flxt.tmsimg.com/assets/p34757_p_v8_aa.jpg"
        alt="not found"
            />
            <h2>404 - Page Not Found</h2>
        </div>
    )
}
export default NotFound