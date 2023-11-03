import useAppConfigs from "@/composables/useAppConfigs";

let pendingRequests = new Map();

interface Response<T> {
  data: T | string | AnyObject | ArrayBuffer;
  statusCode: number;
  header: any;
  cookies: string[];
}

function request<T>(url: string, config?: UniApp.RequestOptions): [Promise<Response<T>>, Symbol] {
  const { baseUrl, timeout } = useAppConfigs();
  const cancelToken = getCancelToken();

  const baseOptions: UniApp.RequestOptions = {
    url: new URL(url, baseUrl).toString(),
    timeout: timeout,
    ...config,
  };
  const promise = new Promise<Response<T>>((resolve, reject) => {
    const requestTask = uni.request({
      ...baseOptions,
      success(response) {
        if (response.statusCode === 200) {
          resolve(response as unknown as Response<T>);
        } else {
          reject(response);
        }
      },
      fail: (error) => {
        reject(error);
      },
      complete: () => {
        pendingRequests.delete(cancelToken);
      },
    })

    pendingRequests.set(cancelToken, requestTask.abort);
  });

  return [promise, cancelToken];
}

const getCancelToken = () => {
  return Symbol();
}

// 中断请求的方法
export const cancelRequest = (cancelToken: Symbol) => {
  if (pendingRequests.has(cancelToken)) {
    const abort = pendingRequests.get(cancelToken);
    abort.call(null); // 调用uni.request的abort方法取消请求
    pendingRequests.delete(cancelToken); // 取消后从pendingRequests中移除
  }
}

export default request;
