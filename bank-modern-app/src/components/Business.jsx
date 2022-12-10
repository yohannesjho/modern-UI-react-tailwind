import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card justify-end items-center ml-[200px]`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
   
   <div className="ml-2 flex flex-col space-y-2">
    <h2 className="text-white ml-2">{title}</h2>
    <p className="max-w-[500px] text-gray-400">{content}</p>
   </div>
  </div>
);

function Business() {
  return (
    <section id="features" className={`${layout.section}`}>
      <div>
        <h2 className={`${styles.heading2}`}>
          {" "}
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[420px] mt-6`}>
          {" "}
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button style="mt-12" />
      </div>

      <div className="">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Business;
