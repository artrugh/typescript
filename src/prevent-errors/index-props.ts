interface ErrorContainer {
  [prop: string]: string;
}

const ErrorBag: ErrorContainer = {
  email: "Not avalid email",
  username: "Must start with a capital letter",
};
