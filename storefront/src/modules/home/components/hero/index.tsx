import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";

const Hero = () => {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dvzdodv1r/image/upload/v1732105664/woment-min_pk6isx_b17qrz.webp";

  return (
    <div
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Well done! You have successfully deployed your Medusa 2.0 store on
            Railway!
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Need help customizing your store?
          </Heading>
        </span>
        <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>Visit the tutorial</h1>
        </a>
      </div>
    </div>
  );
};

export default Hero;
