exports.notFound = (req, res, next) => {
  res.status(404).json({
    message: `Path not found: ${req.originalUrl}`
  });
};

exports.serverError = (error, req, res, next) => {
  const status = res.statusCode === 200 ? 500 : res.statusCode;

  const payload = {
    message: error.message,
    ...error
  };

  if (process.env.NODE_EVNT === "development") payload.stack = error.stack;

  res.status(status).json(payload);
};
