import { Outlet, useNavigation } from "react-router-dom";
import { Loading,Navbar } from "../components";
import { userGlobal } from "../context/userContext";

export default function HomeLayout() {
  const navigation = useNavigation()
  const ispageLoading = navigation.state === 'loading'
  const {User}= userGlobal()
  return (
    <div>
      <Navbar/>

      {ispageLoading ? <Loading/>:  <section className="align-element py-20">
      <Outlet/>
      </section>}
    
      
    </div>
  )
}