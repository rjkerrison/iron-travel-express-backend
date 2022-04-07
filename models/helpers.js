const linkTo = (ref) => {
  return { type: Schema.Types.ObjectId, ref }
}

module.exports = {
  linkTo,
}
