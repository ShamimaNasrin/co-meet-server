import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

//parsers
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mechanical-keyboards-client.vercel.app",
    ],
    credentials: true,
  })
);

// application routes
// app.use("/api/products", ProductRoutes);

app.get("/", (req, res) => {
  res.send("keyclicks server running!!");
});

// middleware to handle invalid routes (404 Not Found)
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// middleware to handle global error
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  return res.status(statusCode).json({
    success: false,
    message: error.message || "Internal Server Error",
    error,
  });
});

export default app;
