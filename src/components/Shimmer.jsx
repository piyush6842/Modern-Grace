export const Shimmer = ({ width = '100%', height = '100px' }) => {
  return (
    <div
      style={{ width, height }}
      className="bg-gray-300 animate-pulse rounded-md"
    ></div>
  );
};

export const ShimmerText = ({ width = '100%' }) => (
  <div className={`h-6 ${width} bg-gray-300 animate-pulse rounded`}></div>
);

export const ShimmerImage = ({ width = '100%', height = '200px' }) => (
  <div
    className={`bg-gray-300 animate-pulse rounded-lg`}
    style={{ width, height }}
  ></div>
);




