export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        cameraScale: isSmall ? 0.03 : isMobile ? 0.04 : isTablet ? 0.06 : 0.1,
        cameraPosition: isSmall ? [4, 7, 0] : isMobile ? [6, 6, 0] : isTablet ? [9, 5, 0] : [18, 3, 0]
    };
};