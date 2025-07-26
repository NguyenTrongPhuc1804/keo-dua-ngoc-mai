export interface ResponseType<T> {
  success: boolean;
  message: string;
  data?: T;
}

export const createSuccessResponse = <T>({
  message = "Operation successful",
  data,
}: {
  message: string;
  data?: T;
}): ResponseType<T> => {
  return {
    success: true,
    message,
    data: data ? JSON.parse(JSON.stringify(data)) : undefined, // Ensure data is serializable
  };
};

export const createErrorResponse = ({
  message = "Operation failed",
}: {
  message: string;
}): ResponseType<null> => {
  return {
    success: false,
    message,
  };
};
