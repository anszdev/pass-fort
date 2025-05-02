export function jsonSuccessResponse({
  data = {},
  status = 200,
  message = "OK",
}: {
  data?: any;
  status?: number;
  message?: string;
}): Response {
  return Response.json(
    {
      data,
      message,
      success: true,
    },
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export function jsonErrorResponse({
  data = {},
  status = 500,
  error = {
    message: "Error",
    code: "ERROR",
  },
}: {
  data?: any;
  status?: number;
  error?: {
    message: string;
    code?: string;
  };
}): Response {
  return Response.json(
    {
      data,
      error: {
        message: error.message,
        code: error.code,
      },
      success: false,
    },
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
}
