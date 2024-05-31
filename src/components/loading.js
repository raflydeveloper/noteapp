const showLoading = () => {
  const loadingIndicator = document.getElementById("loading");
  loadingIndicator.style.display = "block";
};

const hideLoading = () => {
  const loadingIndicator = document.getElementById("loading");
  loadingIndicator.style.display = "none";
};

export { showLoading, hideLoading };
