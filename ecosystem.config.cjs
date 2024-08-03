module.exports = {
  apps: [
    {
      name: "guitarla",
      version: "1.0.0",
      args: "start",
      script: "npm",
      cwd: "/home/henry/Codes/guitarla",
      env: {
        NODE_ENV: "production",
        BASE_URL: "http://127.0.0.1:1337/api"
      },
    },
  ],
};
