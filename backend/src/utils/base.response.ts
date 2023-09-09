import { ResponseSuccess } from 'src/interface';

class BaseResponse {
  _success(message: string, data?: any): ResponseSuccess {
    return {
      status: 'Success',
      message,
      data: data || {},
    };
  }
}

export default BaseResponse;
