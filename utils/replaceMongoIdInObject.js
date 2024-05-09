export default function replaceMongoIdInObject(object) {
  const { _id, ...updateObj } = {
    ...object,
    id: object._id.toString(),
  };
  return updateObj;
}
