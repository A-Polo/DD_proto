const apiCall = (path) => (
  fetch(path, { method: 'POST', mode: 'no-cors' })
);

export default apiCall;
