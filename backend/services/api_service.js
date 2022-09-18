const chalk = require('chalk');
const { StatusCodes } = require('http-status-codes');


class ApiService {

  response;
  status_code;
  success;
  message;
  data;
  response_data;

  constructor(
    response = "",
    status_code = 0,
    success = true,
    message = "",
    data = {}
  ) {
    this.response = response;
    this.status_code = status_code;
    this.success = success;
    this.message = message;
    this.data = data;
    this.response_data = {
      success: this.success,
      message: this.message,
      data: this.data
    }
  }

  sendResponse() {
    if (this.status_code >= 400) {
      console.error(chalk.black.bgRed(`[${new Date()}] ${this.message}`));
    } else {
      console.log(chalk.black.bgGreen(`[${new Date()}] ${this.message}`));
    }
    return this.response.status(this.status_code).json(this.response_data);
  }

  sendErrorResponse(err) {
    return new ApiService(
      this.response, err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, false, err.message
    ).sendResponse();
  }

}


module.exports = ApiService;