export const SignIn =  (body: { username: string; password: string }) => {
  return fetch("https://anorkhulov.uz/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};


export const Signup =  (body: { firstName: string, lastName: string, email: string, username: string, password: string }) => {
  return fetch("https://anorkhulov.uz/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

 