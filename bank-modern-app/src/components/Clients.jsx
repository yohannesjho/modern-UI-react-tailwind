import {clients} from "../constants"
import styles from "../style"
function Clients() {
  return (
    <section className={`${styles.flexCenter} my-6`}>
       <div className={`${styles.flexCenter} flex-wrap  w-full`}>
       {clients.map((client)=>(
         <div id={client.id} className={ `${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[100px]`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px]" />
         </div>
       ))}
       </div>
    </section>
  )
}

export default Clients
