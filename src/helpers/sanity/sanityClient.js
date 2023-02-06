import sanityClient from "@sanity/client";

const sanityToken =
  "skGJHpL9C0RvMh8CrA9VbtSjFtEKFZHJs07sV8bSRpo2huxifkserqF3BiLBKU771V21RJATwixma9HwdlXQDGLMOqOzOE8UTxnTkt5yEY1BSzhinuhwuL50K7nI191kfaQKpdZ1IbJ3AzdHr7JjLpySyqpFngZFraQRrnvMG5mpPxpe9ljw";

export const client = sanityClient({
  projectId: "scye5se5",
  dataset: "production",
  apiVersion: "2023-02-06",
  useCdn: true,
  token: sanityToken,
});
