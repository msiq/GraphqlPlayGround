module.exports = (arg) => {
  throw new Error(`args ${arg} is required!`, arg)
};