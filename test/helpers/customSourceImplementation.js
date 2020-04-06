export default (content) => {
  return `data:image/svg+xml,${  content.trim().replace(/\s+/g, ' ')}`;
};
