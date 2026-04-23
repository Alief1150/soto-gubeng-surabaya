function colorToHex(color: string) {
  return color;
}

export function createMenuArt(title: string, accent = '#f59e0b') {
  const safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
        <stop stop-color="#222222"/>
        <stop offset="1" stop-color="#2A241B"/>
      </linearGradient>
      <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(740 320) rotate(90) scale(330 420)">
        <stop stop-color="#FFF5DB" stop-opacity="0.95"/>
        <stop offset="1" stop-color="#FFF1C7" stop-opacity="0"/>
      </radialGradient>
      <filter id="shadow" x="0" y="0" width="1200" height="900" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="24"/>
        <feGaussianBlur stdDeviation="28"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix values="0 0 0 0 0.54 0 0 0 0 0.36 0 0 0 0 0 0.28 0 0 0 0.22 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1" result="shape"/>
      </filter>
    </defs>
    <rect width="1200" height="900" rx="64" fill="url(#bg)"/>
    <circle cx="280" cy="180" r="120" fill="#F5E7C6" fill-opacity="0.15"/>
    <circle cx="1030" cy="160" r="96" fill="#FF6D1F" fill-opacity="0.12"/>
    <circle cx="890" cy="700" r="180" fill="#F5E7C6" fill-opacity="0.08"/>
    <ellipse cx="646" cy="548" rx="306" ry="190" fill="#2C261F" fill-opacity="0.9" filter="url(#shadow)"/>
    <ellipse cx="646" cy="518" rx="334" ry="92" fill="#FAF3E1" fill-opacity="0.12"/>
    <ellipse cx="646" cy="548" rx="292" ry="164" fill="#FF6D1F" fill-opacity="0.92"/>
    <ellipse cx="646" cy="538" rx="262" ry="128" fill="#F5E7C6" fill-opacity="0.9"/>
    <path d="M536 375C452 448 430 562 458 616C478 656 550 664 596 640C635 620 646 581 656 527C666 468 637 403 612 362C594 333 559 334 536 375Z" fill="#FAF3E1" fill-opacity="0.72"/>
    <path d="M741 392C700 441 688 516 704 568C719 617 777 636 823 616C862 598 875 549 876 494C877 440 854 388 822 368C793 349 762 361 741 392Z" fill="#FFF8E9" fill-opacity="0.9"/>
    <ellipse cx="606" cy="543" rx="150" ry="62" fill="#FFF9F0" fill-opacity="0.18"/>
    <path d="M602 294C554 368 512 399 474 462C455 494 442 533 447 557C454 592 480 612 516 609C555 606 572 577 592 533C621 469 652 436 682 402C711 369 716 329 689 304C657 274 625 274 602 294Z" fill="#F5E7C6"/>
    <path d="M746 287C736 331 744 371 766 405C786 436 813 449 843 447C870 445 893 428 904 401C914 376 912 346 899 319C881 282 852 257 817 253C782 249 753 259 746 287Z" fill="#FAF3E1"/>
    <path d="M760 291C758 320 770 340 788 354C803 366 821 370 839 366C858 362 872 351 879 336C886 321 886 304 878 289C867 267 847 252 824 250C801 248 772 264 760 291Z" fill="${colorToHex(accent)}"/>
    <path d="M938 452C941 481 930 505 905 523C881 541 848 541 824 529C799 516 786 494 788 466C790 437 808 419 834 413C865 406 915 419 938 452Z" fill="#FFF7E6"/>
    <path d="M508 497C492 481 477 482 463 494" stroke="#FF6D1F" stroke-width="18" stroke-linecap="round"/>
    <path d="M560 582C545 565 527 563 511 575" stroke="#F5E7C6" stroke-width="18" stroke-linecap="round"/>
    <path d="M667 628C650 612 631 609 615 621" stroke="#FF6D1F" stroke-width="18" stroke-linecap="round"/>
    <path d="M735 580C717 564 700 563 683 575" stroke="#F5E7C6" stroke-width="18" stroke-linecap="round"/>
    <path d="M814 534C801 516 785 513 770 525" stroke="#FF6D1F" stroke-width="18" stroke-linecap="round"/>
    <path d="M558 398C515 417 498 448 492 476" stroke="#FAF3E1" stroke-width="16" stroke-linecap="round"/>
    <path d="M616 354C574 384 553 424 541 460" stroke="#FAF3E1" stroke-width="16" stroke-linecap="round"/>
    <path d="M684 341C657 361 636 389 624 423" stroke="#FFF7E6" stroke-width="16" stroke-linecap="round"/>
    <path d="M756 368C731 391 716 420 707 454" stroke="#FFF7E6" stroke-width="16" stroke-linecap="round"/>
    <path d="M824 390C806 411 797 438 793 465" stroke="#FFF7E6" stroke-width="16" stroke-linecap="round"/>
    <path d="M404 326C455 344 491 381 509 425" stroke="#F5E7C6" stroke-width="22" stroke-linecap="round" opacity="0.9"/>
    <path d="M892 644C855 630 830 604 817 573" stroke="#FF6D1F" stroke-width="20" stroke-linecap="round" opacity="0.85"/>
    <g filter="url(#shadow)">
      <rect x="76" y="74" width="280" height="84" rx="42" fill="#FAF3E1" fill-opacity="0.14"/>
      <text x="116" y="126" fill="#FAF3E1" font-size="34" font-weight="700" font-family="Inter, Arial, sans-serif">Best Seller</text>
    </g>
    <text x="76" y="184" fill="#FAF3E1" font-size="58" font-weight="800" font-family="Inter, Arial, sans-serif">${safeTitle}</text>
    <text x="76" y="244" fill="#F5E7C6" font-size="28" font-weight="500" font-family="Inter, Arial, sans-serif">Warm, creamy, and crafted for a clean modern menu.</text>
    <circle cx="980" cy="230" r="8" fill="#FFFFFF" fill-opacity="0.8"/>
    <circle cx="1015" cy="262" r="5" fill="#FFFFFF" fill-opacity="0.65"/>
    <circle cx="930" cy="280" r="6" fill="#FFFFFF" fill-opacity="0.6"/>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
