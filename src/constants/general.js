export const cuisineTypes = [
  "offers",
  "breakfast",
  "pizza",
  "dessert",
  "burgers",
  "chicken",
  "italian",
  "healthy",
  "indian",
  "chinese",
  "asian",
  "sushi",
  "thai",
  "vegan",
];

export const remarks = (rating) => {
  if (rating > 0 && rating <= 2) {
    return "Poor";
  } else if (rating > 2 && rating <= 4) {
    return "Good";
  }
  if (rating > 4 && rating < 4.5) {
    return "Very good";
  }
  if (rating >= 4.5) {
    return "Excellent";
  }
};
