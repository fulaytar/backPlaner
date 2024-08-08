export const mongooseSaveErrorModel = (error, data, next) => {
  error.status = 400;
  next();
};

export const mongooseSetUpdateSettings = function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};
