/**
 * Custom Paw Icon Component
 * SVG vector icon for brand identity
 */
interface PawIconProps {
  className?: string;
  size?: number;
}

export function PawIcon({ className = '', size = 24 }: PawIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 18C12 18 6 15 6 12C6 9 8 7 10 7C11 7 12 7.5 12 7.5C12 7.5 13 7 14 7C16 7 18 9 18 12C18 15 12 18 12 18Z"
        fill="currentColor"
      />
      <ellipse cx="8" cy="5" rx="1.5" ry="2" fill="currentColor" />
      <ellipse cx="16" cy="5" rx="1.5" ry="2" fill="currentColor" />
      <ellipse cx="5" cy="9" rx="1.5" ry="2" fill="currentColor" />
      <ellipse cx="19" cy="9" rx="1.5" ry="2" fill="currentColor" />
    </svg>
  );
}
