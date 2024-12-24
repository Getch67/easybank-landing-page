import FeatureCard from "./FeatureCard";
import iconOnline from "../assets/images/icon-online.svg";
import iconBudgeting from "../assets/images/icon-budgeting.svg";
import iconOnboarding from "../assets/images/icon-onboarding.svg";
import iconApi from "../assets/images/icon-api.svg";

const BankFeatures = () => {
  return (
    <section className="px-4 pt-16 pb-11 md:px-11 xl:py-24 xl:px-32 bg-LightGrayishBlue">
      <div className="2xl:w-2xl 2xl:mx-auto">
        <div className="xl:mb-16 mb-14">
          <h1 className="text-3xl2 xl:text-4xl2 leading-10 font-light text-center xl:text-left text-DarkBlue mb-4">
            Why choose Easybank?
          </h1>
          <p className="text-center text-lsm xl:text-lg xl:text-left lg:mx-auto xl:mx-0 lg:w-prLg xl:w-prXl text-GrayishBlue">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 md:grid md:grid-cols-2 lg:flex lg:gap-0 lg:justify-between lg:flex-row">
          <FeatureCard
            img={iconOnline}
            imgAlt="Online Banking Icon"
            featureTitle="Online Banking"
            featureDetail="Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world."
          />
          <FeatureCard
            img={iconBudgeting}
            imgAlt="Budgeting Icon"
            featureTitle="Simple Budgeting"
            featureDetail="See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits."
          />
          <FeatureCard
            img={iconOnboarding}
            imgAlt="Onboarding Icon"
            featureTitle="Fast Onboarding"
            featureDetail="We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away."
          />
          <FeatureCard
            img={iconApi}
            imgAlt="API Icon"
            featureTitle="Open API"
            featureDetail="Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier."
          />
        </div>
      </div>
    </section>
  );
};

export default BankFeatures;
