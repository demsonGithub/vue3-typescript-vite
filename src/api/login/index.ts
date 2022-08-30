import * as IService from "./types";

const loginApi: IService.ILoginApi = {
  login: function (params: IService.ILoginParams): Promise<any> {
    throw new Error("Function not implemented.");
  },
  register: function (): Promise<any> {
    throw new Error("Function not implemented.");
  },
};

export default loginApi;
