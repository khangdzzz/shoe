/**
 * Format a validation message.
 * @param message example: {項目名}を入力してください'
 * @param filedName example: 'email'
 * @returns emailを入力してください'
 */
export const formatMessage = (message: string, filedName: string) => {
  message = message.replace(/{[^}]+}/, filedName);

  return {
    message
  };
};
