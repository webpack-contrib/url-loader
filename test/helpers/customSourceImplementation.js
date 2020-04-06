export default (content) => {
  return (
    `data:image/svg+xml,${ 
    content
      .toString()
      .trim()
      .replace(/\s+/g, ' ')}`
  );
};
