const notFoundPage = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: `Not found page `,
  });
  next();
};

export default notFoundPage;
