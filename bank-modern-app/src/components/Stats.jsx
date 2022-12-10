import React from 'react'
import styles from '../style'
import {stats} from '../constants'
function Stats() {
  return (
    <section className={`${styles.flexCenter} flex flex-wrap sm:mb-20 mb-6 sm:mt-20 mt-6`}>
      { stats.map((stat) => (
        <div key={stat.id} className="flex-1 flex justify-center items-center space-x-2">
          <h3 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px]  ">{stat.value}</h3>
          <p className="text-gradient font-poppins  font-normal xs:text-[20px] text-[15px]  ">{stat.title}</p>
        </div>
       ))}
    </section>
  )
}

export default Stats
