const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = async () => {
  const res = await fetch(`https://norma.nomoreparties.space/api/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
  const refreshData = await checkReponse(res);
  if (!refreshData.success) {
    return Promise.reject(refreshData);
  }
  localStorage.setItem("refreshToken", refreshData.refreshToken);
  localStorage.setItem("accessToken", refreshData.accessToken.split(" ")[1]);
  return refreshData;
};
