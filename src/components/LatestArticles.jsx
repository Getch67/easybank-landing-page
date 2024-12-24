import ArticleCard from "./ArticleCard";
import currencyImg from "../assets/images/image-currency.jpg";
import restaurantImg from "../assets/images/image-restaurant.jpg";
import planeImg from "../assets/images/image-plane.jpg";
import confettiImg from "../assets/images/image-confetti.jpg";

const LatestArticles = () => {
  return (
    <section className="px-6 md:px-11 py-20 xl:py-20 lg:px-6 xl:px-32 bg-VeryLightGray">
      <div className="2xl:w-2xl 2xl:mx-auto">
        <h1 className="text-3xl2 xl:text-4xl2 font-light text-center xl:text-left text-DarkBlue mb-6 xl:mb-14">
          Latest Articles
        </h1>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex xl:gap-7 lg:flex-row">
          <ArticleCard
            img={currencyImg}
            imgAlt="Currency Image"
            author="By Claire Robinson"
            title="Receive money in any currency with no fees"
            detail="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ..."
          />
          <ArticleCard
            img={restaurantImg}
            imgAlt="Restaurant Image"
            author="By Wilson Hutton"
            title="Treat yourself without worrying about money"
            detail="Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you ..."
          />
          <ArticleCard
            img={planeImg}
            imgAlt="Plane Image"
            author="By Wilson Hutton"
            title="Take your Easybank card wherever you go"
            detail="We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you..."
          />
          <ArticleCard
            img={confettiImg}
            imgAlt="Confetti Image"
            author="By Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
            detail="After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ..."
          />
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
