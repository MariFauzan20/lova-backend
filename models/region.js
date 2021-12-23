module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      province_name: String,
      city: [String],
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  const Region = mongoose.model("region", schema);
  return Region;
};
