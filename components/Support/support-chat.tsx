export const SupportChat = () => {
  return (
    <div className="col-lg-8">
      <div className="chat_box rounded border p-3">
        <div className="chat_list w-100">
          <div className="row" id="append_conversation">
            <div className="col-md-8 ml-auto">
              <div className="d-flex justify-content-end my-2">
                <small className="chat_text mr-1">
                  Binance stores 10% of all trading fees in a secure asset fund
                  to protect a share of user funds.
                </small>

                <a href="" target="_blank">
                  <img
                    className="rounded me-2 p-2"
                    width="90"
                    src="/user.jpeg"
                  />
                </a>
                <div>
                  <img className="chat_img" src="/user.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex justify-content-between my-2">
                <div>
                  <img className="chat_img" src="/user.jpeg" alt="" />
                </div>
                <a href="" target="_blank">
                  <img
                    className="rounded me-2 p-2"
                    width="90"
                    src="/user.jpeg"
                  />
                </a>
                <small className="chat_text ml-1">
                  Binance stores 10% of all trading fees
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-4">
        <form>
          <div className="d-flex gap-2 align-items-center">
            <input
              type="text"
              className="w-100 px-2 rounded py-2 message_bg"
              id="send-message-box"
              name="message"
              placeholder="message"
            />

            <div className="input-group chat_file_upload mx-1">
              <div className="custom-file ">
                <input
                  type="file"
                  className="custom-file-input "
                  id="inputGroupFile01"
                />
                <label className="custom-file-label">Choose</label>
              </div>
            </div>
            <button className="rounded chat_btn">send</button>
          </div>
        </form>
      </div>
    </div>
  );
};
