import { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

import api from 'api/api';

export function useAxios<T>(endpoint: string, config?: AxiosRequestConfig) {
  const { data, error } = useSWR<T>(endpoint, async endpoint => {
    const response = await api.get(endpoint, config);

    return response.data;
  });

  return { data, error };
};