 import styles from "../style"
 import {feedback} from "../constants"
import FeedBack from "./FeedBack"
function Testimonials() {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div className="w-[60%] h-[60%] absolute -right-[50%] blue__gradient rounded-full z-[0] "></div>

      <div className="flex md:flex-row flex-col justify-center items-center sm:mb-16 mb-6 relative z-[1] w-full">
        <h1 className={`${styles.heading2}`}>What People are <br className="sm:block hidden" /> saying about us</h1>

        <p className={`${styles.paragraph} text-left max-w-[450px]`}> Everything you need to accept card payments and grow your business
          anywhere on the planet.</p>
      </div>

      <div className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}>
        {feedback.map((card)=>(
          <FeedBack key={card.id} {...card}  />
        ))}
      </div>
      
    </section>
  )
}

export default Testimonials
