export const makeFlexRequest = (fetchData, callback, errorCallback) => {
  let status = "requesting";

  fetchData()
    .then(({ data }) => status === "requesting" && callback(data))
    .catch(errorCallback);

  return () => (status = "aborted");
};
