import { cn } from "@/lib/utils";

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
        "group block cursor-pointer",
        isPrimary ? "exhibition-card-primary" : "exhibition-card",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className={cn(
            "w-full object-cover transition-transform duration-500 group-hover:scale-110",
            isPrimary ? "h-64 md:h-80 lg:h-96" : "h-48 md:h-56 lg:h-64"
          )}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
        
        {/* Primary badge */}
        {isPrimary && (
          <div className="absolute top-4 right-4 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "p-6 md:p-8",
        isPrimary && "p-8 md:p-10"
      )}>
        <h3 className={cn(
          "card-title mb-3 transition-colors duration-300 group-hover:text-primary",
          isPrimary && "text-3xl md:text-4xl"
        )}>
          {title}
        </h3>
        <p className={cn(
          "card-description",
          isPrimary && "text-xl md:text-2xl"
        )}>
          {description}
        </p>
        
        {/* Hover indicator */}
        <div className="mt-4 flex items-center gap-2 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
          <span className="font-semibold">Watch Video</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
