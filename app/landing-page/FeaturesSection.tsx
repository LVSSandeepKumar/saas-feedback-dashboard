import Feature from "./Feature";

const features = [
  {
    title: "Seamless Integration",
    description: "Easily integrate with your existing tools and services.",
  },
  {
    title: "Customizable",
    description: "Customize Nexx to fit your needs and preferences.",
    icon: "icon-2",
  },
  {
    title: "Analytics",
    description: "Track and analyze feedback to make informed decisions.",
  },
  {
    title: "Secure",
    description: "Your data is safe and secure with Nexx.",
  },
  {
    title: "Scalable",
    description: "Grow your business with Nexx as you scale.",
  },
  {
    title: "Fast Support",
    description: "Get help when you need it with our fast support team.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 my-24 flex flex-col items-center">
        <h2 className="font-semibold mb-6 text-3xl">Features</h2>
      <div className="mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;