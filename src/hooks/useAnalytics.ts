export const useAnalytics = () => {
  return {
    log: (event: string, data?: any) => {
      console.log(`[Analytics] ${event}`, data);
    },
  };
};