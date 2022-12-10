 import { quotes } from "../assets"

function FeedBack({content,name,title,img}) {
  return (
    <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
      <p className="font-poppins font-normal text-white text-[18px] my-10 leading-[32.4px]">{content} </p>  

      <div className="flex justify-start ">
        <img src={img} alt="name" className="w-[50px] h-[50px]" />
        <div className="flex flex-col ml-2">
          <h2 className="font-poppins font-normal text-white text-[15px]    ml-2">{name}</h2>
          <p className="font-poppins font-normal text-gray-500 text-[12px]  ml-2  ">{title}</p>

        </div>
      </div>
    </div>
  )
}

export default FeedBack
