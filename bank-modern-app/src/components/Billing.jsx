 import { apple,google,bill} from '../assets'
 import styles, {layout} from '../style'

function Billing() {
  return (
    <section className={`${layout.sectionReverse}`}>
       <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className='absolute z-[3] top-0 -left-1/2 rounded-full w-[50%] h-[50%] white__gradient'></div>
        <div className='absolute z-[3] bottom-0 -left-1/2 rounded-full w-[50%] h-[50%] pink__gradient'></div>
       </div>

       <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden" /> billing &
        invoicing</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.</p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple store" className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google play" className='w-[144.17px] h-[43.08px] object-contain mr-5 cursor-pointer' />
        </div>
       </div>
    </section>
  )
}

export default Billing
