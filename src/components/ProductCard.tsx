import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
  isPrimary?: boolean;
  className?: string;
}

const ProductCard = ({
  title,
  description,
  thumbnail,
  href,
  isPrimary = false,
  className,
}: ProductCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block cursor-pointer touch-manipulation",
        isPrimary ? "exhibition-card-primary" : "exhibition-card",
        className
      )}
      data-tab={title.toLowerCase().replace(/\s+/g, '-')}
    >
      {/* Thumbnail with Play Button Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className={cn(
            "w-full object-cover",
            isPrimary ? "h-64 md:h-80 lg:h-96" : "h-48 md:h-56 lg:h-64"
          )}
        />
        
        {/* Overlay gradient - from top for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/20 to-transparent" />
        
        {/* Text overlay at top */}
        <div className={cn(
          "absolute top-0 left-0 right-0 p-6 md:p-8 text-center",
          isPrimary && "p-8 md:p-10"
        )}>
          <h3 className={cn(
            "card-title mb-2 text-white drop-shadow-lg",
            isPrimary && "text-3xl md:text-4xl"
          )}>
            {title}
          </h3>
          <p className={cn(
            "card-description text-white/90 drop-shadow-md",
            isPrimary && "text-xl md:text-2xl"
          )}>
            {description}
          </p>
        </div>
        
        {/* Play Button - Central, always visible */}
        <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
          <div className={cn(
            "flex items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-2xl",
            "transition-transform duration-200 active:scale-90",
            isPrimary 
              ? "h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32" 
              : "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
          )}>
            <Play 
              className={cn(
                "ml-1 fill-current",
                isPrimary 
                  ? "h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" 
                  : "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
              )} 
            />
          </div>
        </div>
        
        {/* Primary badge */}
        {isPrimary && (
          <div className="absolute top-4 right-4 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg">
            Featured
          </div>
        )}
      </div>
    </a>
  );
};

export default ProductCard;
