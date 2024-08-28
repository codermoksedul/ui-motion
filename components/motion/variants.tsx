// fade in animation
export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "default" = "default",
  duration: number = 0.7,
  delay: number = 0
) => {
  // Determine initial position based on direction
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -60; // Starts from the left
      break;
    case "right":
      x = 60; // Starts from the right
      break;
    case "up":
      y = -60; // Starts from above
      break;
    case "down":
      y = 60; // Starts from below
      break;
    default:
      x = 0; // Default fade in without directional movement
      y = 0;
      break;
  }

  return {
    hidden: {
      x, // Initial horizontal position based on direction
      y, // Initial vertical position based on direction
      opacity: 0, // Hidden at the start
    },
    visible: {
      x: 0, // Moves to the original horizontal position
      y: 0, // Moves to the original vertical position
      opacity: 1, // Fades in to full opacity
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// flip text animation
export const flipText = (duration: number = 0.7) => ({
  hidden: {
    rotateY: -90, // Starts with a flipped position
    opacity: 0, // Hidden at the start
  },
  visible: {
    rotateY: 0, // Flips back to the original position
    opacity: 1, // Fades in
    transition: {
      type: "spring",
      stiffness: 200, // Controls the springiness of the animation
      damping: 15, // Controls the damping of the animation
      duration: duration,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

// zoom in up animation
export const zoomIn = (
  direction: "left" | "right" | "up" | "down" | "default" = "default",
  duration: number = 0.7,
  delay: number = 0
) => {
  // Determine initial position based on direction
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -60; // Starts to the left of the original position
      break;
    case "right":
      x = 60; // Starts to the right of the original position
      break;
    case "up":
      y = -60; // Starts above the original position
      break;
    case "down":
      y = 60; // Starts below the original position
      break;
    default:
      x = 0; // Default zoom in without directional movement
      y = 0;
      break;
  }

  return {
    hidden: {
      scale: 0.5, // Starts with a smaller scale
      x, // Initial horizontal position
      y, // Initial vertical position
      opacity: 0, // Hidden at the start
    },
    visible: {
      scale: 1, // Scales back to the original size
      x: 0, // Moves to the original horizontal position
      y: 0, // Moves to the original vertical position
      opacity: 1, // Fades in
      transition: {
        type: "spring",
        stiffness: 200, // Controls the springiness of the animation
        damping: 15, // Controls the damping of the animation
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// zoom out animation
export const zoomOut = (
  direction: "left" | "right" | "up" | "down" | "default" = "default",
  duration: number = 0.7,
  delay: number = 0
) => {
  // Determine initial position based on direction
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -60; // Starts to the left of the original position
      break;
    case "right":
      x = 60; // Starts to the right of the original position
      break;
    case "up":
      y = -60; // Starts above the original position
      break;
    case "down":
      y = 60; // Starts below the original position
      break;
    default:
      x = 0; // Default zoom out without directional movement
      y = 0;
      break;
  }

  return {
    hidden: {
      scale: 1.5, // Starts with a scaled-up position
      x, // Initial horizontal position based on direction
      y, // Initial vertical position based on direction
      opacity: 0, // Hidden at the start
    },
    visible: {
      scale: 1, // Scales back to the original size
      x: 0, // Moves to the original horizontal position
      y: 0, // Moves to the original vertical position
      opacity: 1, // Fades in
      transition: {
        type: "tween",
        stiffness: 200, // Controls the springiness of the animation
        damping: 15, // Controls the damping of the animation
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// bounce animation
export const bounce = (
  direction: "left" | "right" | "up" | "down" | "default" = "default",
  duration: number = 0.7,
  delay: number = 0
) => {
  // Determine initial position based on direction
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -100; // Starts to the left of the original position
      break;
    case "right":
      x = 100; // Starts to the right of the original position
      break;
    case "up":
      y = -100; // Starts above the original position
      break;
    case "down":
      y = 100; // Starts below the original position
      break;
    default:
      x = 0; // Default bounce without directional movement
      y = 0;
      break;
  }

  return {
    hidden: {
      x, // Initial horizontal position based on direction
      y, // Initial vertical position based on direction
      opacity: 0, // Hidden at the start
      scale: 0.3, // Start with a smaller scale for bounce effect
    },
    visible: {
      x: 0, // Moves to the original horizontal position
      y: 0, // Moves to the original vertical position
      opacity: 1, // Fades in to full opacity
      scale: 1, // Scales back to the original size
      transition: {
        type: "spring",
        stiffness: 300, // Controls the springiness of the animation
        damping: 10, // Controls the damping of the animation
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// light speed animation
export const lightSpeed = (
  direction: "left" | "right" = "left", // Default is "left"
  type: "in" | "out" = "in", // Type of animation: "in" or "out"
  duration: number = 0.7, // Duration of the animation
  delay: number = 0
) => {
  // Determine the initial and final positions and skew based on direction and type
  let initialX = 0;
  let finalX = 0;
  let skewX = 0;

  if (direction === "left") {
    initialX = type === "in" ? -100 : 0; // Start from left for "in", original for "out"
    finalX = type === "in" ? 0 : -100; // End at original for "in", to the left for "out"
    skewX = type === "in" ? 30 : -30; // Skew right for "in", skew left for "out"
  } else if (direction === "right") {
    initialX = type === "in" ? 100 : 0; // Start from right for "in", original for "out"
    finalX = type === "in" ? 0 : 100; // End at original for "in", to the right for "out"
    skewX = type === "in" ? -30 : 30; // Skew left for "in", skew right for "out"
  }

  return {
    hidden: {
      x: initialX, // Initial horizontal position
      skewX: type === "in" ? skewX : 0, // Skew only when animating "in"
      opacity: 0, // Hidden at the start
    },
    visible: {
      x: finalX, // Final horizontal position
      skewX: 0, // Remove skew when fully visible
      opacity: 1, // Fully visible
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Ease for the light speed effect
      },
    },
  };
};
