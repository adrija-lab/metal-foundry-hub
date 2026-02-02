import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CTAButton from "@/components/CTAButton";
import metalcloudThumb from "@/assets/metalcloud-thumb.jpg";
import flagshipThumb from "@/assets/flagship-thumb.jpg";
import scrapThumb from "@/assets/scrap-thumb.jpg";

// Video URLs - replace with actual video links
const VIDEO_URLS = {
  metalcloud: "https://example.com/metalcloud-video",
  flagship: "https://example.com/flagship-video",
  scrap: "https://example.com/scrap-video",
};

const FORM_URL = "https://example.com/consultation-form";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-8 py-8 md:px-12 lg:px-16">
        {/* Main Heading */}
        <h1 className="display-heading text-center mb-12 md:mb-16 max-w-5xl">
          Transforming Procurement & Production for{" "}
          <span className="text-primary">250+</span> Metal Manufacturers
        </h1>

        {/* Cards Grid */}
        <div className="w-full max-w-7xl grid gap-6 lg:gap-8">
          {/* Primary Card - MetalCloud */}
          <div className="flex justify-center">
            <ProductCard
              title="MetalCloud"
              description="The Only Way to Truly Digitize Your Foundry"
              thumbnail={metalcloudThumb}
              href={VIDEO_URLS.metalcloud}
              isPrimary
              className="w-full max-w-4xl"
            />
          </div>

          {/* Secondary Cards Row */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Flagship Range */}
            <ProductCard
              title="FLAGSHIP RANGE"
              description="Reliable Materials, Perfect Casts, Guaranteed every time"
              thumbnail={flagshipThumb}
              href={VIDEO_URLS.flagship}
            />

            {/* Scrap Recycling */}
            <ProductCard
              title="SCRAP RECYCLING"
              description="Standardized Metal Scrap for your Melting Needs"
              thumbnail={scrapThumb}
              href={VIDEO_URLS.scrap}
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16">
          <CTAButton href={FORM_URL}>
            Schedule 1-on-1 Expert Consultancy
          </CTAButton>
        </div>
      </main>
    </div>
  );
};

export default Index;
