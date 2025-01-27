import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation for my project",
    },
  },
  apis: [
    "./src/index.ts",
    "./src/routes/authRoutes.ts",
    "./src/routes/userRoutes.ts",
  ],
};

export const swaggerDocs = swaggerJSDoc(swaggerOptions);
