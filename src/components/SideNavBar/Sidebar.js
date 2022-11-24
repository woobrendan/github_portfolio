import IconLinks from "./Icon_links"
import '../../Styles/nav-bar.scss'

export default function Sidebar({ getComponent }) {

  return (
    <div className="nav-bar">
      <IconLinks getComponent={getComponent}/>
    </div>
  )
}